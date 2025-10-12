#!/bin/bash

set -e

echo "Starting VPS deployment setup..."

# Update system
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install required packages
echo "Installing required packages..."
sudo apt install -y curl wget git ufw fail2ban unattended-upgrades

# Install Docker
echo "Installing Docker..."
curl -fsSL https://get.docker.com | sh
sudo systemctl enable docker
sudo systemctl start docker

# Install Docker Compose
echo "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create swap file if needed (for low RAM VPS)
if [ ! -f /swapfile ]; then
    echo "Creating swap file..."
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
fi

# Configure firewall
echo "Configuring firewall..."
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload

# Enable automatic security updates
echo "Enabling automatic security updates..."
sudo dpkg-reconfigure --frontend noninteractive unattended-upgrades

# Configure Docker to start on boot
sudo systemctl enable docker

# Create app directory
sudo mkdir -p /opt/new-platform
cd /opt/new-platform

# This script assumes you have already SCP'd the project files to /opt/new-platform
# If using git, you could clone here instead
# git clone https://github.com/youruser/yourrepo.git .

echo "Building and starting services..."
cd backend/microservices

# Create .env file if needed
if [ ! -f .env ]; then
    echo "JWT_SECRET=$(openssl rand -base64 32)" > .env
    echo "POSTGRES_PASSWORD=$(openssl rand -base64 32)" >> .env
fi

# Build and start services
echo "Building Docker images..."
sudo docker-compose build --no-cache

echo "Starting services..."
sudo docker-compose up -d

# Wait for services to be healthy
echo "Waiting for services to start..."
sleep 60

# Check if services are running
echo "Checking service status..."
sudo docker-compose ps

echo "Deployment completed successfully!"
echo "Your application should be accessible at http://your-vps-ip"
echo ""
echo "Service URLs:"
echo "- Frontend: http://your-vps-ip"
echo "- API Gateway: http://your-vps-ip:3000"
echo "- Monitoring: http://your-vps-ip:9090"
echo "- Logs: http://your-vps-ip:5601"
echo ""
echo "Don't forget to update your domain DNS to point to this VPS IP."
