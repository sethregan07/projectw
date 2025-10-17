#!/bin/bash
#
# TARGET VPS RECOVERY SETUP
# Run this script on the TARGET VPS (151.241.14.12) to prepare for cloning
#

set -e

echo "🎯 TARGET VPS RECOVERY SETUP - 151.241.14.12"
echo "=============================================="
echo ""
echo "📋 PREREQUISITES:"
echo "   - Run as root user: sudo su -"
echo "   - Internet connection required"
echo "   - SSH service running: systemctl status sshd"
echo ""

# Color definitions
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo -e "${BLUE}[$(date '+%H:%M:%S')]${NC} $*" >&2
}

success() {
    echo -e "${GREEN}✅ $*${NC}" >&2
}

warning() {
    echo -e "${YELLOW}⚠️  $*${NC}" >&2
}

error() {
    echo -e "${RED}❌ $*${NC}" >&2
}

# Function to check system requirements
check_requirements() {
    log "Checking system requirements..."

    # Check if running as root
    if [[ $EUID -ne 0 ]]; then
        error "This script must be run as root (sudo su -)"
        exit 1
    fi

    # Check internet connectivity
    if ! ping -c 1 8.8.8.8 &> /dev/null; then
        error "No internet connection detected"
        exit 1
    fi

    success "System requirements check passed"
}

# Function to install SSH key for cloning
install_ssh_key() {
    log "Installing SSH key for cloning system..."

    local ssh_key="sh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEV1HnwsCJ4k3HI5GhwnNJjo74C2M8Fk/1Ay6XiK5/Yt vps-recovery-world-class"

    # Create .ssh directory if it doesn't exist
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh

    # Remove any existing entry for this key
    sed -i '/vps-recovery-world-class/d' ~/.ssh/authorized_keys 2>/dev/null || true

    # Add the new key
    echo "$ssh_key" >> ~/.ssh/authorized_keys
    chmod 600 ~/.ssh/authorized_keys

    # Restart SSH service
    systemctl reload sshd 2>/dev/null || systemctl restart sshd 2>/dev/null || true

    success "SSH key installed successfully"

    # Test the key
    sleep 2
    if ssh-keygen -l -f ~/.ssh/authorized_keys | grep -q "vps-recovery-world-class"; then
        success "SSH key verified"
    else
        error "SSH key verification failed"
        exit 1
    fi
}

# Function to update system and install required tools
update_system() {
    log "Updating system and installing required tools..."

    # Update package lists
    apt update

    # Install essential tools
    apt install -y \
        curl \
        wget \
        htop \
        iotop \
        jq \
        rsync \
        openssh-server \
        pigz \
        openssl \
        net-tools \
        dnsutils

    success "System tools installed"
}

# Function to configure SSH for cloning
configure_ssh() {
    log "Configuring SSH for high-performance cloning..."

    # Backup original sshd_config
    cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup.$(date +%Y%m%d_%H%M%S)

    # Enable root login (required for VPS cloning)
    sed -i 's/#PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config

    # Optimize SSH for performance
    cat >> /etc/ssh/sshd_config << EOF

# VPS Cloning optimizations
TCPKeepAlive yes
ClientAliveInterval 60
ClientAliveCountMax 3
UseDNS no

# Performance tuning
MaxStartups 10:30:100
LoginGraceTime 30
MaxAuthTries 3
EOF

    # Restart SSH service
    systemctl reload sshd 2>/dev/null || systemctl restart sshd 2>/dev/null || true

    success "SSH configured for cloning"
}

# Function to create directory structure
create_directories() {
    log "Creating required directory structure..."

    # Create directories for cloning operations
    mkdir -p \
        /var/log/vps_cloning \
        /opt/vps-recovery \
        /mnt/clone-temp \
        /backup

    # Set permissions
    chown -R root:root /var/log/vps_cloning
    chown -R root:root /opt/vps-recovery
    chmod -R 755 /var/log/vps_cloning
    chmod -R 755 /opt/vps-recovery

    success "Directory structure created"
}

# Function to install Docker (if needed)
install_docker() {
    log "Checking Docker installation..."

    if ! command -v docker &> /dev/null; then
        log "Installing Docker..."

        # Install Docker using the official method
        curl -fsSL https://get.docker.com | sh
        systemctl enable docker
        systemctl start docker

        # Install Docker Compose
        curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" \
            -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose

        success "Docker installed"
    else
        success "Docker already installed"
    fi
}

# Function to create recovery script for microservices
create_microservices_recovery() {
    log "Creating microservices recovery setup..."

    cat > /opt/vps-recovery/setup-microservices.sh << 'EOF'
#!/bin/bash
# MICRO SERVICES RECOVERY SETUP
# This script configures the target VPS to run the cloned microservices

set -e

echo "🎯 Setting up microservices on recovered VPS"

# Navigate to microservices directory
if [ -d "~/backend/microservices" ]; then
    cd ~/backend/microservices

    # Ensure Docker is running
    systemctl start docker

    # Build and start all services
    docker-compose build --parallel
    docker-compose up -d

    # Wait for services to be healthy
    echo "Waiting for services to start..."
    sleep 60

    # Check service status
    docker-compose ps

    echo "Microservices recovery completed!"
    echo ""
    echo "🎯 Service URLs:"
    echo "   Frontend: http://localhost:80"
    echo "   API Gateway: http://localhost:3000"
    echo "   Monitoring: http://localhost:8080/health"
else
    echo "Error: Microservices directory not found"
    exit 1
fi
EOF

    chmod +x /opt/vps-recovery/setup-microservices.sh
    success "Microservices recovery script created"
}

# Function to create health check for recovered system
create_health_check() {
    log "Creating system health check script..."

    cat > /opt/vps-recovery/health-check.sh << 'EOF'
#!/bin/bash
# SYSTEM HEALTH CHECK - POST RECOVERY
# Verify that the cloned system is working correctly

echo "🔍 PERFORMING POST-RECOVERY HEALTH CHECK"
echo "========================================="
echo ""

# Check Docker status
echo "🐳 Docker Status:"
if systemctl is-active --quiet docker; then
    echo "  ✅ Docker: Running"
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | sed 's/^/    /'
else
    echo "  ❌ Docker: Stopped"
fi

echo ""

# Check SSH status
echo "🔐 SSH Status:"
if systemctl is-active --quiet sshd; then
    echo "  ✅ SSH: Running"
    netstat -tlnp | grep :22 | sed 's/^/    /'
else
    echo "  ❌ SSH: Stopped"
fi

echo ""

# System resources
echo "💻 System Resources:"
echo "    CPU Load: $(uptime | awk -F'load average:' '{print $2}')"
echo "    Memory: $(free -h | grep Mem | awk '{print $3"/"$2}')"
echo "    Disk: $(df -h / | tail -1 | awk '{print $3"/"$2" ("$5" used)"}')"

echo ""

# Test critical services
echo "🔍 Service Health Checks:"
services=(
    "3000:API Gateway"
    "80:Frontend"
    "8080:Recovery Monitor"
)

for service in "${services[@]}"; do
    port=$(echo $service | cut -d: -f1)
    name=$(echo $service | cut -d: -f2)

    if timeout 5 bash -c "</dev/tcp/localhost/$port" 2>/dev/null; then
        echo "  ✅ $name (port $port): Healthy"
    else
        echo "  ⚠️  $name (port $port): Unhealthy or not started"
    fi
done

echo ""
echo "🎯 If services are unhealthy, run:"
echo "   /opt/vps-recovery/setup-microservices.sh"
EOF

    chmod +x /opt/vps-recovery/health-check.sh
    success "Health check script created"
}

# Function to display final instructions
display_final_instructions() {
    echo ""
    echo "🎉 TARGET VPS RECOVERY SETUP COMPLETED!"
    echo "========================================"
    echo ""
    echo "📋 IMMEDIATE NEXT STEPS:"
    echo ""
    echo "1. 🔑 Return to your SOURCE VPS and run cloning:"
    echo "   SSH back to your source VPS and execute:"
    echo "   cd backend/scripts && ./lightning-deploy.sh 151.241.14.12"
    echo ""
    echo "2. 🩺 After cloning completes, check system health:"
    echo "   /opt/vps-recovery/health-check.sh"
    echo ""
    echo "3. 🚀 Start your recovered microservices:"
    echo "   /opt/vps-recovery/setup-microservices.sh"
    echo ""
    echo "⚡ EMERGENCY RECOVERY DIRECTORIES:"
    echo "   Recovery scripts: /opt/vps-recovery/"
    echo "   Logs: /var/log/vps_cloning/"
    echo "   Temp files: /mnt/clone-temp/"
    echo ""
    echo "🛡️ THIS VPS IS NOW READY FOR ULTRA-FAST DISASTER RECOVERY!"
}

# Main execution
main() {
    echo "🎯 TARGET VPS RECOVERY SETUP STARTING..."
    echo "=========================================="
    echo ""

    check_requirements
    install_ssh_key
    update_system
    configure_ssh
    create_directories
    install_docker
    create_microservices_recovery
    create_health_check

    display_final_instructions
}

# Run main function
main "$@"
