#!/bin/bash
# 🚀 VPS BASIC SETUP SCRIPT
# Run this on your VPS via provider console (DigitalOcean/Hetzner/etc.)

set -e

echo "🛠️  Setting up basic VPS connectivity..."

# Update system
echo "📦 Updating packages..."
apt update && apt upgrade -y

# Install essential connectivity packages
echo "🔧 Installing OpenSSH and essentials..."
apt install -y openssh-server curl wget net-tools ufw htop nano

# Ensure SSH service is running
echo "⚙️  Configuring SSH service..."
systemctl enable ssh
systemctl start ssh

# Configure SSH for password authentication
echo "🔐 Configuring SSH settings..."
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config
sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Set root password if interactive (or you can do it manually)
echo "🔑 Setting root password (press Enter to keep current or set new)..."
passwd root

# Configure firewall
echo "🛡️  Setting up firewall..."
ufw --force enable
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw reload

# Restart SSH with new config
echo "🔄 Restarting SSH service..."
systemctl restart ssh

# Show status
echo "📊 Service status:"
systemctl status ssh --no-pager
netstat -tlnp | grep :22

echo ""
echo "✅ SETUP COMPLETE!"
echo "🌐 Your VPS is ready for SSH connection"
echo "🔗 SSH Command: ssh root@YOUR_VPS_IP"
echo ""
echo "🚀 Next steps:"
echo "1. Test SSH connection from your local machine"
echo "2. Run your deployment scripts"

# Keep the script interactive if needed
read -p "Press Enter to continue..."
