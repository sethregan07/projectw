#!/bin/bash
# 🚀 Mailcow Installation Script for VPS

set -e

echo "🐄 STARTING MAILCOW INSTALLATION ON VPS..."
echo "Timestamp: $(date)"
echo ""

# Variables - Update these as needed
MAILCOW_DIR="/opt/mailcow-dockerized"
VPS_IP="102.215.228.243"  # Update with your VPS IP
DOMAIN="mail.example.com"  # TODO: CHANGE THIS - Update with your actual domain (e.g., mail.yourdomain.com)
ADMIN_USER="admin"  # Update with desired admin username
ADMIN_PASS="changeme123"  # TODO: CHANGE THIS - Update with secure password

# Step 1: Install Docker if not present
echo "1️⃣ Checking Docker installation..."
if ! command -v docker &> /dev/null; then
    echo "   Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl enable docker
    systemctl start docker
    echo "   Docker installed successfully"
else
    echo "   Docker already installed"
fi

# Install Docker Compose if not present
if ! command -v docker-compose &> /dev/null; then
    echo "   Installing Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    echo "   Docker Compose installed successfully"
else
    echo "   Docker Compose already installed"
fi

# Install required packages for Mailcow
echo "   Installing required packages (jq, curl, etc.)..."
apt-get update
apt-get install -y jq curl wget git

echo "✅ Docker prerequisites completed"
echo ""

# Step 2: Clone Mailcow repository
echo "2️⃣ Cloning Mailcow repository..."
if [ -d "$MAILCOW_DIR" ]; then
    echo "   Mailcow directory already exists, updating..."
    cd "$MAILCOW_DIR"
    git pull
else
    git clone https://github.com/mailcow/mailcow-dockerized "$MAILCOW_DIR"
    cd "$MAILCOW_DIR"
fi

echo "✅ Mailcow repository ready"
echo ""

# Step 3: Generate configuration
echo "3️⃣ Generating Mailcow configuration..."
cd "$MAILCOW_DIR"

# Generate configuration interactively (will use default values)
echo "   Running generate_config.sh..."
echo -e "\n\n\n\n\n\n\n\n\n\n" | ./generate_config.sh || {
    echo "   Interactive config failed, creating manual configuration..."
    # Create basic mailcow.conf manually
    cat > mailcow.conf << EOF
# mailcow configuration
MAILCOW_HOSTNAME=$DOMAIN
MAILCOW_PASSWD=$ADMIN_PASS
MAILCOW_ADMIN_USER=$ADMIN_USER
ADDITIONAL_SAN=mail.$DOMAIN,webmail.$DOMAIN
SKIP_LETS_ENCRYPT=y
EOF
    echo "   Manual configuration created"
}

echo "✅ Configuration generated"
echo ""

# Step 4: Pull and start Mailcow
echo "4️⃣ Starting Mailcow containers..."
docker-compose pull
docker-compose up -d

echo "✅ Mailcow containers started"
echo ""

# Step 5: Wait for services to be ready
echo "5️⃣ Waiting for services to initialize..."
sleep 30

# Check if services are running
if docker-compose ps | grep -q "Up"; then
    echo "✅ Mailcow services are running"
else
    echo "❌ Some services failed to start"
    docker-compose logs
    exit 1
fi

echo ""

# Step 6: Display access information
echo "🎉 MAILCOW INSTALLATION COMPLETED!"
echo ""
echo "🌐 Access URLs:"
echo "   Web Interface: https://$DOMAIN"
echo "   Admin User: $ADMIN_USER"
echo "   Admin Password: $ADMIN_PASS"
echo ""
echo "📋 Next Steps:"
echo "   1. TODO: Configure DNS records for $DOMAIN (A record pointing to $VPS_IP)"
echo "   2. TODO: Set up SSL certificates (Let's Encrypt) - run: ./generate_config.sh"
echo "   3. TODO: Configure firewall rules (allow ports 80, 443, 25, 465, 587, 993, 995)"
echo "   4. TODO: Create additional domains/mailboxes via web interface"
echo "   5. TODO: Update DOMAIN and ADMIN_PASS variables in this script for your setup"
echo ""
echo "🔧 Useful commands:"
echo "   cd $MAILCOW_DIR"
echo "   docker-compose logs -f"
echo "   docker-compose down"
echo "   docker-compose up -d"
echo ""
echo "⏰ Total installation time: ~5-10 minutes"