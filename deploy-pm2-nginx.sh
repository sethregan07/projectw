#!/bin/bash
# 🚀 PM2 + Nginx Deployment Script
# Deploys the Next.js app using PM2 for process management and Nginx reverse proxy

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="nextjs-app"
APP_PORT=5000
VPS_IP="YOUR_VPS_IP_HERE"  # Replace with your actual IP

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running on VPS (optional - remove if deploying remotely)
# if ! ip addr | grep -q "inet.*${VPS_IP}"; then
#     log_warning "This script should be run on the VPS directly"
#     exit 1
# fi

log_info "🚀 Starting PM2 + Nginx deployment..."

# Update system
log_info "Updating system packages..."
apt update && apt upgrade -y

# Install Node.js if not installed
if ! command -v node &> /dev/null; then
    log_info "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    log_info "Installing PM2..."
    npm install -g pm2
fi

# Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
    log_info "Installing Nginx..."
    apt install -y nginx
    systemctl enable nginx
fi

# Configure firewall for Nginx
log_info "Configuring firewall..."
ufw allow 'Nginx Full' || log_warning "Failed to configure UFW - may need manual setup"

# Create app directory
APP_DIR="/var/www/${APP_NAME}"
log_info "Setting up app directory: ${APP_DIR}"
mkdir -p "$APP_DIR"

# Copy application files (Git-based deployment - files are already pulled)
log_info "Application files are already updated via Git pull..."

# Navigate to app directory
cd "$APP_DIR"

# Install dependencies
log_info "Installing Node.js dependencies..."
npm ci --production=false

# Build the application
log_info "Building the application..."
npm run build

# Stop existing PM2 process if running
log_info "Stopping existing PM2 processes..."
pm2 stop "$APP_NAME" --silent || log_warning "No existing PM2 process to stop"
pm2 delete "$APP_NAME" --silent || log_warning "No existing PM2 process to delete"

# Start application with PM2
log_info "Starting application with PM2..."
pm2 start ecosystem.config.js

# Configure PM2 to start on boot
log_info "Configuring PM2 to start on boot..."
pm2 startup
pm2 save

# Configure Nginx
log_info "Configuring Nginx reverse proxy..."

# Create symlink for the app config
rm -f /etc/nginx/sites-enabled/default  # Remove default nginx config
cp "$APP_DIR/nginx/app.conf" /etc/nginx/sites-available/app.conf
ln -sf /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/

# Test Nginx configuration
log_info "Testing Nginx configuration..."
nginx -t || log_error "Nginx configuration test failed"

# Restart Nginx
log_info "Restarting Nginx..."
systemctl restart nginx

# Test that the application is responding
log_info "Testing application health..."
sleep 5
if curl -f http://localhost/health >/dev/null 2>&1; then
    log_success "Application health check passed"
else
    log_warning "Application health check failed - may take longer to start"
fi

# Deploy Docker services
log_info "🐳 Deploying Docker services..."
if [ -f "backend/docker/deploy-vps-docker.sh" ]; then
    chmod +x backend/docker/deploy-vps-docker.sh
    ./backend/docker/deploy-vps-docker.sh
else
    log_warning "Docker deployment script not found - skipping Docker deployment"
fi

# Display status
log_info "📊 Deployment Status:"
pm2 list
pm2 monit | head -20

log_success "🎉 Deployment completed!"
log_info ""
log_info "🌐 Applications accessible at:"
log_info "   • Frontend: http://${VPS_IP}"
log_info "   • Frontend Health: http://${VPS_IP}/health"
log_info "   • API Gateway: http://${VPS_IP}:3000"
log_info "   • Auth Service: http://${VPS_IP}:3001"
log_info "   • Ghost CMS: http://${VPS_IP}:2368"
log_info ""
log_info "📋 Management commands:"
log_info "   • Frontend logs: pm2 logs"
log_info "   • Restart frontend: pm2 restart ${APP_NAME}"
log_info "   • Monitor frontend: pm2 monit"
log_info "   • Nginx status: systemctl status nginx"
log_info "   • Docker status: docker ps"
log_info "   • Docker logs: docker logs <service-name>"
log_info "   • Stop Docker: docker compose -f backend/docker/docker-compose.minimal.yml down"
log_info ""
log_info "🔧 Configuration files:"
log_info "   • PM2 config: ${APP_DIR}/ecosystem.config.js"
log_info "   • Nginx config: /etc/nginx/sites-available/app.conf"
log_info "   • Docker compose: ${APP_DIR}/backend/docker/docker-compose.minimal.yml"
