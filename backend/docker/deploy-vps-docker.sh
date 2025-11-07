#!/bin/bash
# 🚀 VPS Docker Deployment Script (No Local Machine Hanging)

set -e

echo "🚀 STARTING VPS DOCKER DEPLOYMENT..."
echo "Timestamp: $(date)"
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Step 1: Install Docker if not present
echo "1️⃣ Checking Docker installation..."
if command_exists docker; then
    echo "   ✅ Docker is already installed: $(docker --version)"
else
    echo "   Installing Docker..."

    # Update package list
    apt-get update

    # Install prerequisites
    apt-get install -y ca-certificates curl gnupg

    # Add Docker's official GPG key
    install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    chmod a+r /etc/apt/keyrings/docker.gpg

    # Add Docker repository
    echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Install Docker
    apt-get update
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

    # Start and enable Docker
    systemctl start docker
    systemctl enable docker

    echo "   ✅ Docker installed successfully: $(docker --version)"
fi

echo ""

# Step 2: Navigate to backend directory
echo "2️⃣ Setting up backend directory..."
cd /var/www/nextjs-app/backend 2>/dev/null || {
    echo "   Backend directory not found. Please ensure code is synced first."
    echo "   Run: ./deploy-to-vps.sh"
    exit 1
}

echo "   Current directory: $(pwd)"
echo ""

# Step 3: Stop any existing containers
echo "3️⃣ Cleaning up existing containers..."
docker compose -f docker/docker-compose.minimal.yml down 2>/dev/null || true
docker compose -f docker/docker-compose.light.yml down 2>/dev/null || true
docker system prune -f

echo "   ✅ Cleanup completed"
echo ""

# Step 4: Start minimal services
echo "4️⃣ Starting Docker services (minimal configuration)..."
echo "   This will start: API Gateway, Auth Service, Database, Ghost CMS"
echo "   Resource limits applied to prevent hanging"
echo ""

docker compose -f docker/docker-compose.minimal.yml up -d

echo ""
echo "   ⏳ Waiting for services to start (30 seconds)..."
sleep 30

echo ""

# Step 5: Check service status
echo "5️⃣ Checking service status..."
echo "   Container Status:"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "   Health Checks:"
echo "   API Gateway (3000): $(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health 2>/dev/null || echo "Not ready")"
echo "   Auth Service (3001): $(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/health 2>/dev/null || echo "Not ready")"
echo "   Ghost CMS (2368): $(curl -s -I http://localhost:2368 2>/dev/null | head -1 | cut -d' ' -f2 || echo "Not ready")"

echo ""

# Step 6: Configure firewall (optional)
echo "6️⃣ Firewall configuration..."
if command_exists ufw; then
    echo "   Opening required ports..."
    ufw allow 3000/tcp comment "API Gateway" 2>/dev/null || true
    ufw allow 3001/tcp comment "Auth Service" 2>/dev/null || true
    ufw allow 2368/tcp comment "Ghost CMS" 2>/dev/null || true
    ufw allow 5432/tcp comment "PostgreSQL" 2>/dev/null || true
    echo "   ✅ Firewall configured"
else
    echo "   ⚠️  UFW not found - configure firewall manually if needed"
fi

echo ""

# Step 7: Show access information
echo "🎉 DEPLOYMENT SUMMARY:"
echo "🌐 Services accessible at:"
echo "   • API Gateway: http://102.215.228.243:3000"
echo "   • Auth Service: http://102.215.228.243:3001"
echo "   • Ghost CMS: http://102.215.228.243:2368"
echo "   • Database: 102.215.228.243:5432"
echo ""
echo "📊 Monitor services:"
echo "   docker ps                    # View running containers"
echo "   docker logs api-gateway      # View API Gateway logs"
echo "   docker logs auth-service     # View Auth Service logs"
echo "   docker stats                 # View resource usage"
echo ""
echo "🛑 Emergency stop:"
echo "   docker compose -f docker/docker-compose.minimal.yml down"
echo ""
echo "✅ VPS Docker deployment completed successfully!"
echo "⏰ Total time: ~2-3 minutes"
