# 🚀 Automated OS-Level VPS Cloning System

This document provides complete setup and usage instructions for the automated OS-level VPS cloning system designed for ultra-fast disaster recovery.

## 📋 Overview

The OS-Level VPS Cloning System provides:
- **Complete OS cloning** (systems, configs, apps, data)
- **Multi-provider support** (Hetzner, DigitalOcean, Vultr, Linode)
- **Zero-downtime** hot cloning or minimal-downtime cold cloning
- **Automated triggers** based on system health metrics
- **Monitoring dashboard** and health checks
- **Parallel transfer optimization** for speed

## 🛠️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   Source VPS    │    │  Target VPS     │
│                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │ Microservices│ │    │ │   Micro-    │ │
│ │ Architecture │ │    │ │  services   │ │
│ │             │ │    │ │             │ │
│ │ • Frontend   │ │    │ │ • Blockchain │ │
│ │ • API Gateway│ │◄──►│ │ • API       │ │
│ │ • Auth       │ │    │ │ • Database  │ │
│ │ • Database   │ │    │ │ • Auth      │ │
│ │ • Ghost CMS  │ │    │ │ • Ghost     │ │
│ │ • Mautic     │ │    │ │ • Mautic    │ │
│ └─────────────┘ │    │ └─────────────┘ │
│                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │ OS Cloning  │ │    │ │ OS Cloning  │ │
│ │ Service     │ │    │ │ Service     │ │
│ │             │ │    │ │             │ │
│ │ • Monitor   │ │    │ │ • Monitor   │ │
│ │ • rsync     │ │    │ │ • rsync     │ │
│ │ • Scheduler │ │    │ │ • Scheduler │ │
│ │ • Health    │ │    │ │ • Health    │ │
│ └─────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └─────────────────┘
```

## 📦 Files Structure

```
backend/scripts/
├── os_cloning_system.sh      # Main cloning script
├── clone-scheduler.sh        # Automated scheduling & triggers
├── cloning_config.conf       # Configuration file
├── monitor.js                # Health monitoring service
├── package.json              # Node.js dependencies
├── Dockerfile.monitor        # Docker build file
└── OS_LEVEL_VPS_CLONING.md   # This documentation
```

## ⚙️ Initial Setup

### 1. Configure API Keys

Edit `backend/scripts/cloning_config.conf` and set your VPS provider API keys:

```bash
# Hetzner Cloud
export HCLOUD_TOKEN="your-hetzner-api-token-here"

# DigitalOcean
export DIGITALOCEAN_TOKEN="your-do-api-token-here"

# Vultr
export VULTR_API_KEY="your-vultr-api-key-here"

# SSH Key Setup
export SSH_KEY_PATH="$HOME/.ssh/recovery"
```

### 2. Setup SSH Keys

```bash
# Generate SSH key for cloning
ssh-keygen -t ed25519 -C "vps-cloning-system" -f ~/.ssh/recovery

# Add to your VPS providers:
# Hetzner: Add key in Cloud Console
# DigitalOcean: doctl compute ssh-key import recovery ~/.ssh/recovery.pub
# Vultr: Add via web interface
```

### 3. Make Scripts Executable

```bash
cd backend/scripts
chmod +x os_cloning_system.sh clone-scheduler.sh
```

### 4. Install Node.js Dependencies (for monitoring)

```bash
cd backend/scripts
npm install
```

## 🚀 Usage Guide

### Command Line Usage

#### Basic Cloning Commands

```bash
# Clone to auto-provisioned VPS
./os_cloning_system.sh --auto-provision --target-provider hetzner --target-region fsn1

# Clone to existing VPS IP
./os_cloning_system.sh --target-ip 1.2.3.4

# Hot clone (services stay running)
./os_cloning_system.sh --auto-provision --target-provider digitalocean --target-region nyc1 --hot-clone

# Cold clone (brief service pause)
./os_cloning_system.sh --target-ip 1.2.3.4 --cold-clone

# Dry run (see what would be cloned)
./os_cloning_system.sh --target-ip 1.2.3.4 --dry-run
```

#### Advanced Options

```bash
# Incremental clone (resume from last sync)
./os_cloning_system.sh --target-ip 1.2.3.4 --incremental

# Custom performance settings
./os_cloning_system.sh --target-provider vultr --target-region lax1 \
  --bwlimit 50m \
  --compression-level 6

# Verify cloned system
./os_cloning_system.sh --verify-only --target-ip 1.2.3.4
```

### Automated Scheduling

#### Start Monitoring System

```bash
# Start health monitoring and automatic triggers
./clone-scheduler.sh monitor

# Install as system service
./clone-scheduler.sh install

# Check scheduler status
./clone-scheduler.sh status

# List scheduled clones
./clone-scheduler.sh list
```

#### Schedule Regular Clones

```bash
# Schedule daily clones at 2 AM
./clone-scheduler.sh schedule daily

# Schedule weekly clones
./clone-scheduler.sh schedule weekly

# Schedule hourly clones (for testing)
./clone-scheduler.sh schedule hourly
```

#### Emergency Triggers

```bash
# Manually trigger emergency clone
./clone-scheduler.sh trigger

# Check system health
./clone-scheduler.sh health
```

### Docker Integration

#### Start Monitoring Service

```bash
# Navigate to microservices directory
cd ../microservices

# Start all services including cloning monitor
docker-compose up -d

# Check cloning monitor health
curl http://localhost:8080/health

# View cloning monitor logs
docker-compose logs cloning-monitor
```

#### Monitoring Endpoints

```bash
# Health check with full system status
curl http://localhost:8080/health

# Current status
curl http://localhost:8080/status

# Get recent logs
curl "http://localhost:8080/logs?limit=50"

# Manually trigger clone via API
curl -X POST http://localhost:8080/trigger

# Enable/disable monitoring
curl -X POST http://localhost:8080/monitoring/enable
curl -X POST http://localhost:8080/monitoring/disable
```

## 🏃‍♂️ Recovery Procedures

### Scenario 1: Emergency Clone (Automatic)

1. **Trigger Detected**: System detects high CPU/memory/disk usage or service failures
2. **Automatic Action**: Cloning system auto-provisions new VPS and starts cloning
3. **Notification**: Webhook notifications sent if configured
4. **Completion**: Target VPS ready with identical system in 15-45 minutes
5. **DNS Update**: Update DNS to point to new VPS IP

### Scenario 2: Planned Migration

1. **Manual Trigger**: Run `./os_cloning_system.sh --auto-provision --target-provider hetzner --target-region fsn1`
2. **Monitor Progress**: Watch logs in `/var/log/vps_cloning/`
3. **Verification**: Check target system at completion
4. **DNS Switch**: Update DNS records to new IP
5. **Cleanup**: Terminate old VPS when verified

### Scenario 3: Quick Recovery

1. **Check Status**: `./clone-scheduler.sh status`
2. **Trigger Clone**: `./clone-scheduler.sh trigger`
3. **Monitor**: Watch progress via logs or API
4. **Verify**: SSH to target VPS and check services
5. **Recover**: Update DNS and redirect traffic

## 📊 Monitoring & Health Checks

### System Health Metrics Tracked

- **CPU Usage**: Triggers clone if > 85%
- **Memory Usage**: Triggers clone if > 85%
- **Disk Usage**: Triggers clone if > 85%
- **Service Health**: Triggers clone if critical services down
- **Load Average**: Monitored for performance issues

### Log Files

- **Cloning Logs**: `/var/log/vps_cloning/os_clone_YYYYMMDD_HHMMSS.log`
- **Scheduler Logs**: `/var/log/vps_cloning/scheduler_YYYYMMDD.log`
- **Monitor Logs**: `/var/log/vps_cloning/monitor.log`
- **Summary Logs**: `/var/log/vps_cloning/clone_summary_YYYYMMDD_HHMMSS.txt`

### Dashboard Integration

The cloning monitor integrates with your existing Prometheus/Grafana stack:

```bash
# Add to Prometheus config
scrape_configs:
  - job_name: 'cloning-monitor'
    static_configs:
      - targets: ['localhost:8080']
```

## 🛡️ Security Considerations

### Encrypted Transfers
- All data transferred via SSH (encrypted)
- Rsync uses SSH tunneling
- Optional: Configure GPG encryption for backups

### Access Control
- Restricted SSH key usage
- API keys stored securely
- Minimal service permissions in containers

### Network Security
- SSH hardened configurations
- Firewall rules maintained during clone
- Provider network security groups preserved

## 🔧 Configuration Customization

### Performance Tuning

```bash
# In cloning_config.conf
export RSYNC_PARALLEL_JOBS=8          # Increase for faster transfers
export RSYNC_BW_LIMIT="0"             # Remove bandwidth limits
export COMPRESSION_LEVEL=9            # Maximum compression
export MAX_CLONE_TIME=7200            # Increase timeout for large VPS
```

### Provider-Specific Settings

```bash
# Default instance sizes
export HETZNER_SIZE="cx31"            # 2vCPU, 8GB RAM
export DIGITALOCEAN_SIZE="s-2vcpu-4gb" # 2vCPU, 4GB RAM
export VULTR_SIZE="vc2-2c-4gb"        # 2vCPU, 4GB RAM

# Custom regions for performance
export CPU_OPTIMIZED_PROVIDER="hetzner"
export CPU_OPTIMIZED_REGION="fsn1"
```

### Notification Setup

```bash
# Slack/Discord webhook notifications
export NOTIFICATION_WEBHOOK="https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK"

# Health check endpoint
export MONITORING_ENDPOINT="https://healthcheck.yourdomain.com"
```

## 🚨 Troubleshooting

### Common Issues

#### Clone Fails with SSH Error
```bash
# Check SSH key permissions
ls -la ~/.ssh/recovery*

# Test SSH connection manually
ssh -i ~/.ssh/recovery root@target-ip "echo 'SSH works'"
```

#### Docker Services Not Starting
```bash
# Check Docker is running on target
ssh root@target-ip "systemctl status docker"

# Verify microservices setup
ssh root@target-ip "cd /root/backend/microservices && docker-compose ps"
```

#### High Memory Usage During Clone
```bash
# Reduce parallel jobs
sed -i 's/RSYNC_PARALLEL_JOBS=4/RSYNC_PARALLEL_JOBS=2/' cloning_config.conf

# Add bandwidth limits
sed -i 's/RSYNC_BW_LIMIT="0"/RSYNC_BW_LIMIT="10m"/' cloning_config.conf
```

#### Provider API Errors
```bash
# Verify API keys
grep "_TOKEN\|API_KEY" cloning_config.conf

# Test API access manually
curl -H "Authorization: Bearer $HCLOUD_TOKEN" https://api.hetzner.cloud/v1/servers
```

### Log Analysis

```bash
# View recent cloning activity
tail -f /var/log/vps_cloning/os_clone_*.log

# Check for errors
grep "ERROR" /var/log/vps_cloning/*.log

# Monitor disk usage during clone
watch -n 5 'df -h && echo "--- rsync processes ---" && ps aux | grep rsync'
```

## 📈 Performance Optimization

### Network Optimization

```bash
# Use faster rsync options
rsync --archive --xattrs --hard-links --no-whole-file \
      --compress --compress-level=9 \
      --rsync-path='sudo rsync' \
      --timeout=300

# Parallel transfers (experimental)
parallel --no-notice -j 4 rsync ::: /etc /usr /var /home
```

### Storage Optimization

```bash
# Exclude volatile files
--exclude='/proc/*'
--exclude='/sys/*'
--exclude='/tmp/*'
--exclude='*.log'
--exclude='*.tmp'

# Compress old logs before transfer
find /var/log -name "*.log" -mtime +7 -exec gzip {} \;
```

### Provider-Specific Tuning

```bash
# Hetzner: Use their internal network if available
# DigitalOcean: Use spaces for backup storage
# Vultr: Utilize block storage for large data
```

## 🎯 Best Practices

### Regular Testing

1. **Weekly Testing**: Run test clones to unused VPS
2. **Monthly DR Test**: Full disaster recovery simulation
3. **Performance Monitoring**: Track clone times and success rates

### Cost Optimization

1. **Auto-Termination**: Configure cloned VPS auto-termination after testing
2. **Spot Instances**: Use spot/preemptible instances for non-production clones
3. **Storage Tiers**: Archive old clone logs and summaries

### Backup Integration

1. **Pre/Post Clone Backups**: Integrate with existing backup system
2. **Incremental Backups**: Use rsync's incremental capabilities
3. **Multi-Region Backups**: Store backups across regions

## 🎉 Success Metrics

### Recovery Time Objectives (RTO)

- **Emergency Clone**: < 15 minutes (critical systems)
- **Full System Clone**: < 45 minutes (complete system)
- **Incremental Sync**: < 5 minutes (frequent sync)

### Recovery Point Objectives (RPO)

- **Hot Clone**: < 5 minutes data loss
- **Cold Clone**: < 1 minute data loss
- **Incremental**: Near real-time sync

### Reliability Targets

- **Success Rate**: > 99% successful clones
- **False Positives**: < 1 per month
- **Monitoring Uptime**: > 99.9%

## 🔄 Updates & Maintenance

### System Updates

```bash
# Update cloning scripts
cd backend/scripts
git pull origin main

# Rebuild monitoring container
cd ../microservices
docker-compose build cloning-monitor
docker-compose up -d cloning-monitor

# Restart monitoring
docker-compose restart cloning-monitor
```

### Log Rotation

```bash
# Configure logrotate for cloning logs
cat > /etc/logrotate.d/vps-cloning << EOF
/var/log/vps_cloning/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 640 root adm
    postrotate
        systemctl reload rsyslog >/dev/null 2>&1 || true
    endscript
}
EOF
```

## 📞 Support & Resources

### Quick Commands Reference

```bash
# Emergency clone
./clone-scheduler.sh trigger

# Check status
./clone-scheduler.sh status && curl http://localhost:8080/health

# View logs
tail -f /var/log/vps_cloning/*.log

# Manual clone
./os_cloning_system.sh --auto-provision --target-provider hetzner --target-region fsn1
```

### Monitoring Integration

```bash
# Prometheus metrics endpoint
curl http://localhost:8080/health | jq '.health'

# Log aggregation
docker-compose logs cloning-monitor --tail=100

# System resource monitoring
htop && watch -n 5 'df -h / && free -h'
```

### Emergency Contacts

- **Critical Issues**: Check logs and restart services
- **API Key Problems**: Regenerate keys in provider console
- **Network Issues**: Verify SSH connectivity and DNS
- **Performance Issues**: Tune RSYNC_PARALLEL_JOBS and bandwidth limits

---

**Remember**: This system provides complete OS-level cloning for maximum recovery speed. Always test the cloning process in a non-production environment first.
