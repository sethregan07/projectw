#!/bin/bash
#
# Clone Scheduler - Automated VPS Cloning Triggers
#
# This script provides automated scheduling and triggers for VPS cloning
# based on various conditions and events.
#
# Usage: ./clone-scheduler.sh [command] [options]
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLONING_SCRIPT="${SCRIPT_DIR}/os_cloning_system.sh"
LOG_FILE="/var/log/vps_cloning/scheduler_$(date +%Y%m%d).log"

# Configuration
readonly MONITORING_INTERVAL=300  # Health check interval (seconds)
readonly MAX_DURATION_WITHOUT_CLONE=604800  # 7 days in seconds
readonly EMERGENCY_TRIGGER_THRESHOLD=85  # CPU usage threshold for emergency clones
readonly SCHEDULED_CLONE_HOUR=2  # Run scheduled clones at 2 AM

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

show_usage() {
    cat << EOF
🚀 VPS Clone Scheduler

COMMANDS:
  monitor        Start monitoring for emergency clone triggers
  schedule       Schedule regular automated clones (cron)
  install        Install scheduler as system service
  uninstall      Remove scheduler service
  status         Check scheduler status
  trigger        Manually trigger emergency clone
  list           List scheduled clones

EXAMPLES:
  ./clone-scheduler.sh monitor                    # Start monitoring
  ./clone-scheduler.sh schedule daily             # Schedule daily clones
  ./clone-scheduler.sh install                    # Install as service
  ./clone-scheduler.sh trigger --provider vultr --region nyc1  # Emergency clone

MONITORING MODES:
  auto          Auto-decide target provider/region
  provider      Use specific provider (--provider)
  manual        Use pre-configured target IP (--target-ip)

TRIGGERS:
  cpu-high      Trigger when CPU usage > 85%
  mem-high      Trigger when memory usage > 85%
  disk-high     Trigger when disk usage > 85%
  service-down  Trigger when critical services fail
  manual        Manual trigger only
EOF
}

get_system_health() {
    # CPU usage (percentage)
    local cpu_usage=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')

    # Memory usage (percentage)
    local mem_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')

    # Disk usage (percentage)
    local disk_usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')

    # Service health
    local services_down=0
    if ! docker info >/dev/null 2>&1; then ((services_down++)); fi
    if ! systemctl is-active --quiet nginx 2>/dev/null; then ((services_down++)); fi
    if ! systemctl is-active --quiet sshd 2>/dev/null; then ((services_down++)); fi

    echo "$cpu_usage:$mem_usage:$disk_usage:$services_down"
}

should_trigger_clone() {
    local health_data="$1"

    IFS=':' read -r cpu_usage mem_usage disk_usage services_down <<< "$health_data"

    # Convert to integers for comparison
    cpu_usage=${cpu_usage%.*}
    mem_usage=${mem_usage%.*}
    disk_usage=${disk_usage%.*}

    # Emergency triggers
    if ((cpu_usage > EMERGENCY_TRIGGER_THRESHOLD)); then
        echo "cpu-high:$cpu_usage"
        return 0
    fi

    if ((mem_usage > 85)); then
        echo "mem-high:$mem_usage"
        return 0
    fi

    if ((disk_usage > 85)); then
        echo "disk-high:$disk_usage"
        return 0
    fi

    if ((services_down > 0)); then
        echo "service-down:$services_down"
        return 0
    fi

    echo "healthy"
    return 1
}

perform_emergency_clone() {
    local trigger_reason="$1"
    local health_data="$2"

    log "🚨 EMERGENCY CLONE TRIGGERED: $trigger_reason"

    # Send notification if configured
    if [ -n "$NOTIFICATION_WEBHOOK" ]; then
        curl -s -X POST "$NOTIFICATION_WEBHOOK" \
            -H "Content-Type: application/json" \
            -d "{\"event\":\"emergency_clone\",\"reason\":\"$trigger_reason\",\"health\":\"$health_data\"}" || true
    fi

    # Determine target provider based on trigger
    local target_provider
    local target_region

    # Intelligent provider selection based on trigger type
    case "$trigger_reason" in
        cpu-high|load-high)
            # Use provider with better CPU performance
            target_provider="${CPU_OPTIMIZED_PROVIDER:-hetzner}"
            target_region="${CPU_OPTIMIZED_REGION:-fsn1}"
            ;;
        mem-high)
            # Use provider with more memory
            target_provider="${MEMORY_OPTIMIZED_PROVIDER:-digitalocean}"
            target_region="${MEMORY_OPTIMIZED_REGION:-nyc1}"
            ;;
        disk-high)
            # Use provider with more storage
            target_provider="${STORAGE_OPTIMIZED_PROVIDER:-vultr}"
            target_region="${STORAGE_OPTIMIZED_REGION:-lax1}"
            ;;
        service-down|unreachable)
            # Use geographically close provider for fastest recovery
            target_provider="${RECOVERY_PROVIDER:-hetzner}"
            target_region="${RECOVERY_REGION:-fsn1}"
            ;;
        *)
            # Default provider
            target_provider="${DEFAULT_PROVIDER:-hetzner}"
            target_region="${DEFAULT_REGION:-fsn1}"
            ;;
    esac

    log "🎯 Selected target: $target_provider / $target_region"

    # Execute emergency clone
    if "$CLONING_SCRIPT" --auto-provision --target-provider "$target_provider" --target-region "$target_region" --emergency; then
        log "✅ Emergency clone completed successfully"
        return 0
    else
        log "❌ Emergency clone failed"
        return 1
    fi
}

monitor_system() {
    log "👁️  Starting system monitoring for automatic clone triggers..."

    while true; do
        local health_data=$(get_system_health)
        local trigger=$(should_trigger_clone "$health_data")

        if [[ "$trigger" != "healthy" ]]; then
            # Check if enough time has passed since last clone
            local last_clone_file="/var/lib/vps-cloning/last_emergency_clone"
            if [ -f "$last_clone_file" ]; then
                local last_clone=$(cat "$last_clone_file")
                local now=$(date +%s)
                local time_diff=$((now - last_clone))

                if ((time_diff < 3600)); then  # Wait at least 1 hour between emergency clones
                    log "⏳ Skipping emergency clone (last clone was $time_diff seconds ago)"
                    sleep "$MONITORING_INTERVAL"
                    continue
                fi
            fi

            # Perform emergency clone
            if perform_emergency_clone "$trigger" "$health_data"; then
                # Record successful clone time
                mkdir -p /var/lib/vps-cloning
                date +%s > "$last_clone_file"
            fi
        fi

        sleep "$MONITORING_INTERVAL"
    done
}

schedule_regular_clones() {
    local frequency="${1:-daily}"

    log "📅 Scheduling $frequency clones..."

    case "$frequency" in
        hourly)
            local cron_time="0 * * * *"
            ;;
        daily)
            local cron_time="0 $SCHEDULED_CLONE_HOUR * * *"
            ;;
        weekly)
            local cron_time="0 $SCHEDULED_CLONE_HOUR * * 0"
            ;;
        monthly)
            local cron_time="0 $SCHEDULED_CLONE_HOUR 1 * *"
            ;;
        *)
            log "ERROR: Invalid frequency. Use: hourly, daily, weekly, monthly"
            exit 1
            ;;
    esac

    # Create cron job using target from config
    local cron_job="$cron_time $CLONING_SCRIPT --auto-provision --target-provider ${DEFAULT_PROVIDER} --target-region ${DEFAULT_REGION} >> /var/log/vps_cloning/scheduled.log 2>&1"

    # Add to cron
    (crontab -l 2>/dev/null; echo "$cron_job") | crontab -

    log "✅ Scheduled $frequency cloning: $cron_time"

    # Verify
    crontab -l | grep -q "$CLONING_SCRIPT" && log "✅ Cron job installed" || log "❌ Cron job installation failed"
}

check_scheduler_status() {
    echo "=== CLONE SCHEDULER STATUS ==="

    # Check monitoring process
    if pgrep -f "clone-scheduler.sh monitor" >/dev/null; then
        echo "🟢 Monitoring: RUNNING"
        local pid=$(pgrep -f "clone-scheduler.sh monitor")
        echo "   PID: $pid"
        local uptime=$(ps -p "$pid" -o etime= 2>/dev/null | tr -d ' ')
        echo "   Uptime: ${uptime:-unknown}"
    else
        echo "🔴 Monitoring: STOPPED"
    fi

    # Check cron jobs
    if crontab -l 2>/dev/null | grep -q "$CLONING_SCRIPT"; then
        echo "🟢 Scheduled clones: CONFIGURED"
        crontab -l | grep "$CLONING_SCRIPT" | sed 's/^/   /'
    else
        echo "🔴 Scheduled clones: NOT CONFIGURED"
    fi

    # Check recent activity
    echo ""
    echo "=== RECENT ACTIVITY ==="
    if [ -f "$LOG_FILE" ]; then
        tail -10 "$LOG_FILE" 2>/dev/null || echo "No recent logs"
    else
        echo "No log file found"
    fi

    echo ""
    echo "=== LAST CLONES ==="
    local last_file="/var/lib/vps-cloning/last_emergency_clone"
    if [ -f "$last_file" ]; then
        local last_timestamp=$(cat "$last_file")
        local readable_date=$(date -d "@$last_timestamp" '+%Y-%m-%d %H:%M:%S' 2>/dev/null || date -r "$last_timestamp" '+%Y-%m-%d %H:%M:%S' 2>/dev/null)
        local ago=$(( $(date +%s) - last_timestamp ))
        local ago_readable
        if ((ago < 3600)); then
            ago_readable="$((ago / 60)) minutes ago"
        elif ((ago < 86400)); then
            ago_readable="$((ago / 3600)) hours ago"
        else
            ago_readable="$((ago / 86400)) days ago"
        fi
        echo "Last emergency clone: $readable_date ($ago_readable)"
    else
        echo "No emergency clones recorded"
    fi
}

install_service() {
    log "📦 Installing scheduler as system service..."

    cat > /etc/systemd/system/vps-clone-scheduler.service << EOF
[Unit]
Description=VPS Clone Scheduler
After=network.target

[Service]
Type=simple
ExecStart=${SCRIPT_DIR}/clone-scheduler.sh monitor
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
User=root

[Install]
WantedBy=multi-user.target
EOF

    systemctl daemon-reload
    systemctl enable vps-clone-scheduler.service
    systemctl start vps-clone-scheduler.service

    log "✅ Scheduler service installed"
    log "   Start: systemctl start vps-clone-scheduler.service"
    log "   Stop: systemctl stop vps-clone-scheduler.service"
    log "   Logs: journalctl -u vps-clone-scheduler.service -f"
}

uninstall_service() {
    log "🗑️  Removing scheduler service..."

    systemctl stop vps-clone-scheduler.service 2>/dev/null || true
    systemctl disable vps-clone-scheduler.service 2>/dev/null || true
    rm -f /etc/systemd/system/vps-clone-scheduler.service
    systemctl daemon-reload

    log "✅ Scheduler service removed"
}

# Main command handling
main() {
    local command="$1"
    shift

    case "$command" in
        monitor)
            monitor_system
            ;;
        schedule)
            schedule_regular_clones "$@"
            ;;
        install)
            install_service
            ;;
        uninstall)
            uninstall_service
            ;;
        status)
            check_scheduler_status
            ;;
        trigger)
            local health_data=$(get_system_health)
            perform_emergency_clone "manual" "$health_data"
            ;;
        health)
            local health_data=$(get_system_health)
            IFS=':' read -r cpu mem disk services <<< "$health_data"
            echo "System Health:"
            echo "  CPU Usage: $cpu%"
            echo "  Memory Usage: $mem%"
            echo "  Disk Usage: $disk%"
            echo "  Services Down: $services"
            ;;
        list)
            echo "Scheduled clones:"
            crontab -l 2>/dev/null | grep "$CLONING_SCRIPT" || echo "No scheduled clones"
            ;;
        ""|help|--help)
            show_usage
            ;;
        *)
            log "ERROR: Unknown command '$command'"
            echo ""
            show_usage
            exit 1
            ;;
    esac
}

# Load configuration
if [ -f "${SCRIPT_DIR}/cloning_config.conf" ]; then
    source "${SCRIPT_DIR}/cloning_config.conf"
fi

# Run main function
main "$@"
