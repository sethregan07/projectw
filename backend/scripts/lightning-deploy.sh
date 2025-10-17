#!/bin/bash
#
# LIGHTNING FAST VPS CLONING DEPLOYMENT
# Ultra-minimal setup for instant emergency cloning
#

set -e

TARGET_IP="$1"
SCRIPTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -z "$TARGET_IP" ]; then
    echo "Usage: $0 <target-vps-ip>"
    echo "Example: $0 151.241.14.12"
    exit 1
fi

echo "⚡ LIGHTNING DEPLOYMENT - Cloning to $TARGET_IP"

# Force logging directory
LOG_DIR="$SCRIPTS_DIR/logs"
mkdir -p "$LOG_DIR"

# Create minimal SSH config for immediate use
cat > ~/.ssh/config << EOF
Host $TARGET_IP
    HostName $TARGET_IP
    User root
    IdentityFile ~/.ssh/recovery_ed25519
    IdentitiesOnly yes
    StrictHostKeyChecking no
    UserKnownHostsFile ~/.ssh/known_hosts_test
    PasswordAuthentication no
    ConnectTimeout 10
    LogLevel QUIET
EOF

# Test immediate connection
echo "Testing connection to $TARGET_IP..."
if ! ssh -o ConnectTimeout=5 "$TARGET_IP" "echo '✓ SSH OK'" 2>/dev/null; then
    echo "❌ Cannot connect to $TARGET_IP via SSH"
    echo "Make sure:"
    echo "1. The VPS is running"
    echo "2. SSH service is active: systemctl status sshd"
    echo "3. Root login is enabled"
    echo "4. SSH key is installed on target VPS"
    echo ""
    echo "Install SSH key manually:"
    echo "cat ~/.ssh/recovery_ed25519.pub | ssh root@$TARGET_IP 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'"
    exit 1
fi

echo "✓ SSH connection verified"

# Start emergency clone - no waiting
echo "🚀 Starting emergency clone... (this will run in background)"
nohub "$SCRIPTS_DIR/os_cloning_system.sh" --target-ip "$TARGET_IP" --hot-clone --emergency < /dev/null > "$LOG_DIR/emergency_clone.log" 2>&1 &

echo "✅ Deployment initiated!"
echo ""
echo "📊 MONITOR: tail -f $LOG_DIR/emergency_clone.log"
echo "🛑 STOP: pkill -f os_cloning_system.sh"
echo ""
echo "🎯 Target IP: $TARGET_IP"
echo "⚡ This system is now ready for ultra-fast disaster recovery!"
echo "   Any crisis: ./lightning-deploy.sh $TARGET_IP"
