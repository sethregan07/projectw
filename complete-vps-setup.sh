#!/bin/bash
# 🚀 COMPLETE VPS SETUP SCRIPT FOR PROJECTW
# Run this script on your target VPS after SSH access is working

set -e

echo "🚀 STARTING COMPLETE VPS SETUP FOR PROJECTW..."
echo "Timestamp: $(date)"
echo ""

# Step 1: Update system
echo "📦 STEP 1: Updating system packages..."
apt update && apt upgrade -y

echo "✅ System updated"
echo ""

# Step 2: Install essential packages
echo "🔧 STEP 2: Installing essential connectivity and system packages..."
apt install -y \
    curl \
    wget \
    git \
    unzip \
    htop \
    iotop \
    ncdu \
    vim \
    nano \
    ufw \
    fail2ban \
    unattended-upgrades \
    net-tools \
    dnsutils \
    traceroute \
    software-properties-common \
    apt-transport-https \
    ca-certificates \
    gnupg \
    lsb-release

echo "✅ Essentials installed"
echo ""

# Step 3: Install Docker
echo "🐳 STEP 3: Installing Docker..."
# Remove old versions
apt remove -y docker docker-engine docker.io containerd runc || true

# Install Docker using official method
curl -fsSL https://get.docker.com | sh

# Enable Docker service
systemctl enable docker
systemctl start docker

echo "✅ Docker installed and started"
echo ""

# Step 4: Install Docker Compose
echo "🐙 STEP 4: Installing Docker Compose..."
# Install Docker Compose v2 (plugin)
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep '"tag_name"' | sed -E 's/.*"([^"]+)".*/\1/')
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version

echo "✅ Docker Compose installed"
echo ""

# Step 5: Configure firewall
echo "🛡️  STEP 5: Configuring firewall..."
# Reset firewall
ufw --force reset

# Allow essential services
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 3000/tcp  # Next.js app
ufw allow 3001/tcp  # API Gateway
ufw allow 9090/tcp  # Monitoring (Prometheus)
ufw allow 5601/tcp  # Logs (Kibana)
ufw allow 8080/tcp  # Cloning monitor

# Enable firewall
ufw --force enable

echo "✅ Firewall configured"
echo ""

# Step 6: Enable automatic security updates
echo "🔒 STEP 6: Enabling automatic security updates..."
dpkg-reconfigure --frontend noninteractive unattended-upgrades

echo "✅ Security updates enabled"
echo ""

# Step 7: Create necessary directories
echo "📁 STEP 7: Creating project directories..."
mkdir -p /opt/projectw
mkdir -p /opt/projectw/logs
mkdir -p /opt/projectw/backups
mkdir -p /opt/projectw/scripts

# Set proper permissions
chmod 755 /opt/projectw

echo "✅ Directories created"
echo ""

# Step 8: Install Node.js (for any local scripts that might need it)
echo "📦 STEP 8: Installing Node.js..."
# Install Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install PM2 globally (for process management)
npm install -g pm2

echo "✅ Node.js and PM2 installed"
echo ""

# Step 9: Install additional monitoring tools
echo "📊 STEP 9: Installing monitoring tools..."
apt install -y \
    prometheus \
    prometheus-node-exporter \
    grafana \
    htop \
    iotop \
    sysstat

echo "✅ Monitoring tools installed"
echo ""

# Step 10: Configure system limits and swap (for better performance)
echo "⚙️  STEP 10: Configuring system settings..."

# Increase file descriptors limit
cat >> /etc/security/limits.conf << EOF
* soft nofile 65536
* hard nofile 65536
root soft nofile 65536
root hard nofile 65536
EOF

# Create swap file if it doesn't exist (2GB)
if [ ! -f /swapfile ]; then
    echo "Creating 2GB swap file..."
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
fi

echo "✅ System optimizations applied"
echo ""

# Step 11: Install additional development tools
echo "🔨 STEP 11: Installing development tools..."
apt install -y \
    build-essential \
    python3 \
    python3-pip \
    jq \
    tree \
    rsync

echo "✅ Development tools installed"
echo ""

# Step 12: Clone or prepare deployment directory
echo "🗂️  STEP 12: Setting up deployment directory..."
# Create deployment directory with proper ownership
mkdir -p /opt/deployment
chmod 755 /opt/deployment

echo "✅ Deployment directory ready"
echo ""

# Step 13: Install SSL/TLS certificates preparation
echo "🔐 STEP 13: Installing SSL tools..."
apt install -y certbot python3-certbot-nginx

echo "✅ SSL tools installed"
echo ""

# Step 14: Setup database restoration automation
echo "🗄️  STEP 14: Setting up database restoration automation..."

# Create database restoration script
cat > /opt/projectw/scripts/restore-databases.sh << 'EOF'
#!/bin/bash
# Database restoration script for ProjectW

set -e

echo "🗄️  Starting database restoration..."

# Wait for database service to be ready
echo "Waiting for database service..."
timeout=300
counter=0
while ! docker exec database-service pg_isready -U postgres -h localhost >/dev/null 2>&1; do
    if [ $counter -ge $timeout ]; then
        echo "Database service not ready after $timeout seconds"
        exit 1
    fi
    counter=$((counter + 5))
    echo "Waiting... ($counter/$timeout seconds)"
    sleep 5
done

echo "Database service is ready!"

# Create databases
echo "Creating databases..."
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS auth_db;" || true
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS ghost_db;" || true
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS mautic_db;" || true
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS analytics_db;" || true

# Restore auth database if backup exists
if [ -f "/opt/projectw/backups/auth_db_backup_*.sql.gz" ]; then
    echo "Restoring auth database..."
    BACKUP_FILE=$(ls -t /opt/projectw/backups/auth_db_backup_*.sql.gz | head -1)
    echo "Using backup: $BACKUP_FILE"
    gunzip -c "$BACKUP_FILE" | docker exec -i database-service psql -U postgres -d auth_db
    echo "✅ Auth database restored"
else
    echo "No auth database backup found, initializing fresh..."
    # Initialize auth database schema
    docker cp /opt/projectw/backend/microservices/auth-service/init-db.sql database-service:/tmp/init-db.sql
    docker exec database-service psql -U postgres -d auth_db -f /tmp/init-db.sql

    # Add test users
    docker cp /opt/projectw/backend/microservices/auth-service/init-user.sql database-service:/tmp/init-user.sql
    docker exec database-service psql -U postgres -d auth_db -f /tmp/init-user.sql
    echo "✅ Auth database initialized with test data"
fi

# Restore other databases if backups exist
for db in ghost_db mautic_db analytics_db; do
    if ls /opt/projectw/backups/${db}_backup_*.sql.gz 1> /dev/null 2>&1; then
        echo "Restoring $db..."
        BACKUP_FILE=$(ls -t /opt/projectw/backups/${db}_backup_*.sql.gz | head -1)
        echo "Using backup: $BACKUP_FILE"
        gunzip -c "$BACKUP_FILE" | docker exec -i database-service psql -U postgres -d $db
        echo "✅ $db restored"
    else
        echo "No backup found for $db, skipping..."
    fi
done

echo "🗄️  Database restoration completed!"
EOF

chmod +x /opt/projectw/scripts/restore-databases.sh

echo "✅ Database restoration script created"
echo ""

# Step 15: Final system status check
echo "📊 STEP 15: Performing final checks..."

echo "Service Status:"
echo "- Docker: $(systemctl is-active docker)"
echo "- SSH: $(systemctl is-active ssh)"
echo "- Firewall: $(ufw status | grep Status)"

echo ""
echo "Versions:"
echo "- Docker: $(docker --version 2>/dev/null || echo 'Not found')"
echo "- Docker Compose: $(docker-compose --version 2>/dev/null || echo 'Not found')"
echo "- Node.js: $(node --version 2>/dev/null || echo 'Not found')"
echo "- NPM: $(npm --version 2>/dev/null || echo 'Not found')"

echo ""
echo "Network Info:"
echo "- SSH Port: $(netstat -tlnp 2>/dev/null | grep :22 | wc -l) connections active"
echo "- Firewall Status: $(ufw status | head -n 2)"

echo ""
echo "✅ COMPLETE VPS SETUP FINISHED!"
echo ""
echo "🎉 Your VPS is now ready for ProjectW deployment!"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Copy your project files: scp projectw-setup.tar.gz root@YOUR_VPS_IP:/opt/projectw/"
echo "2. Extract and deploy: cd /opt/projectw && tar xzf projectw-setup.tar.gz"
echo "3. Run deployment: ./deploy-vps.sh"
echo "4. Restore databases: ./scripts/restore-databases.sh"
echo ""
echo "🔧 MANUAL COMMANDS IF NEEDED:"
echo "• Check services: docker ps && systemctl status docker"
echo "• Monitor resources: htop && df -h"
echo "• View logs: docker-compose logs -f"
echo "• Restore databases manually: /opt/projectw/scripts/restore-databases.sh"
echo ""
echo "🚀 You can now run your deployment scripts!"

# Keep interactive for final confirmation
read -p "Press Enter to continue..." || true
