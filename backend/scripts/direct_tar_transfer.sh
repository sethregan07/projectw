#!/bin/bash

#!/bin/bash

# Simple TAR file transfer and extract to target VPS using password auth
# Usage: ./direct_tar_transfer.sh [target_ip] [ssh_user] [ssh_password]

TARGET_IP="${1:-151.241.14.12}"
SSH_USER="${2:-root}"
SSH_PASSWORD="${3:-Starter4}"  # Default password

echo "Direct TAR Transfer to $TARGET_IP"
echo "=================================="

# Create exclude file (same as cloning script)
EXCLUDE_FILE="/tmp/rsync_exclude_$$.txt"
cat > "$EXCLUDE_FILE" << 'EXCLUDE_EOF'
# Volatile system directories
/proc/*
/sys/*
/dev/*
/mnt/*
/media/*
/tmp/*
/var/tmp/*
/lost+found

# Protected directories that commonly cause permission errors
/usr/NX/*
/usr/local/cuda/*
/usr/src/linux-headers-*

# Logs (will be recreated)
/var/log/*
*.log

# Package caches
/var/cache/apt/*
/var/cache/debconf/*

# Runtime data
/var/run/*.pid
/var/run/dbus/system_bus_socket
/var/lock/*

# Docker overlays (volatile)
/var/lib/docker/overlay2/*/work
/var/lib/docker/containers/*/checkpoints

# System specific files that shouldn't be cloned
/etc/hostname
/etc/hosts
/etc/machine-id
/etc/ssh/ssh_host_*
/etc/network/interfaces.d/50-cloud-init.cfg

# Cloud-init and provider specific
/var/lib/cloud/*

# Security-Enhanced Linux (SELinux) policy files
/.autorelabel
/etc/selinux/targeted/policy/*

# Temporary and lock files
/var/spool/mail/*
/var/spool/cron/crontabs/*
EXCLUDE_EOF

echo "Creating system TAR archive..."
echo "Excluding protected directories..."

# Build tar command
TAR_CMD="tar --create --preserve-permissions --acls --xattrs --hard-dereference"
TAR_CMD="$TAR_CMD --exclude-tag-all=.rsync_backup"

# Add exclusions
while IFS= read -r line; do
    [[ -z "$line" ]] && continue
    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    TAR_CMD="$TAR_CMD --exclude=\"$line\""
done < "$EXCLUDE_FILE"

TAR_CMD="$TAR_CMD /"

echo "Starting transfer via SSH..."
echo "Command: $TAR_CMD | sshpass -p '$SSH_PASSWORD' ssh -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=60 -o LogLevel=ERROR $SSH_USER@$TARGET_IP 'cd / && tar --extract --preserve-permissions --acls --xattrs --hard-dereference -f -'"

# Execute transfer with timeout protection
timeout 3600 bash -c "
if $TAR_CMD 2>/tmp/tar_errors_$$.log | sshpass -p '$SSH_PASSWORD' ssh -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=60 -o LogLevel=ERROR '$SSH_USER@$TARGET_IP' 'cd / && tar --extract --preserve-permissions --acls --xattrs --hard-dereference -f -'; then
    echo ''
    echo '✅ TAR transfer completed successfully!'
    echo ''
    echo '📋 Connected to target VPS: $TARGET_IP'
    echo '👤 SSH User: $SSH_USER'
    echo '🔐 Password Auth: Enabled'
    echo ''
    echo 'Next steps:'
    echo '1. SSH to target: sshpass -p \"$SSH_PASSWORD\" ssh $SSH_USER@$TARGET_IP'
    echo '2. Check services: ps aux | grep -E \"(dock|nginx|node)\"'
    echo '3. Start services: cd /root/backend/microservices && docker-compose up -d'
    exit 0
else
    echo ''
    echo '❌ Transfer failed!'
    echo ''
    echo '🔍 Troubleshooting steps:'
    echo '1. Test SSH: sshpass -p \"$SSH_PASSWORD\" ssh $SSH_USER@$TARGET_IP \"echo connected\"'
    echo '2. Check disk space: sshpass -p \"$SSH_PASSWORD\" ssh $SSH_USER@$TARGET_IP \"df -h /\"'
    echo '3. Check TAR errors in /tmp/tar_errors_$$.log'
    exit 1
fi"

# Cleanup
rm -f "$EXCLUDE_FILE"

echo "🎯 Transfer complete!"
