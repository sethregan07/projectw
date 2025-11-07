# VPS Docker Deployment Guide

## Overview
This guide shows how to deploy Docker services to your VPS without hanging your local machine.

## Problem Solved
- **Local machine hanging**: Heavy Docker services (Elasticsearch, Prometheus) consume too many resources
- **VPS connectivity issues**: SSH timeouts prevent remote deployment
- **Resource constraints**: Need lightweight configuration for VPS

## Solution: Minimal Docker Configuration

### What's Included
- **API Gateway** (Port 3000): Entry point for all services
- **Auth Service** (Port 3001): User authentication
- **PostgreSQL Database** (Port 5432): Data storage
- **Ghost CMS** (Port 2368): Content management

### What's Excluded (to prevent hanging)
- ❌ Elasticsearch (resource intensive)
- ❌ Kibana (requires Elasticsearch)
- ❌ Prometheus (memory intensive)
- ❌ Filebeat (logging service)

## Quick Deployment

### Step 1: Sync Code to VPS
```bash
# From your local machine
./deploy-to-vps.sh
```

### Step 2: Deploy Everything (Frontend + Backend)
```bash
# Runs on VPS automatically
# Deploys Next.js app + Docker services
```

### Step 3: Access Your Services
```
Frontend:     http://102.215.228.243/
API Gateway:  http://102.215.228.243:3000
Auth Service: http://102.215.228.243:3001
Ghost CMS:    http://102.215.228.243:2368
Database:     102.215.228.243:5432
```

## Manual Deployment (If Needed)

### Deploy Only Docker Services
```bash
# On your VPS
cd /var/www/nextjs-app/backend
./docker/deploy-vps-docker.sh
```

### Check Service Status
```bash
# On your VPS
docker ps
docker logs api-gateway
docker logs auth-service
```

### Stop Services
```bash
# On your VPS
cd /var/www/nextjs-app/backend
docker compose -f docker/docker-compose.minimal.yml down
```

## Resource Limits Applied

Each service has limits to prevent VPS hanging:

```yaml
deploy:
  resources:
    limits:
      memory: 256M-512M  # Reduced from 1G+
      cpus: '0.5'        # Half CPU core
```

## Troubleshooting

### Services Not Starting
```bash
# Check logs
docker logs api-gateway
docker logs auth-service

# Check resource usage
docker stats

# Restart specific service
docker restart api-gateway
```

### Port Conflicts
```bash
# Check what's using ports
netstat -tulpn | grep :3000
netstat -tulpn | grep :3001

# Stop conflicting services
sudo systemctl stop apache2  # Example
```

### Database Connection Issues
```bash
# Test database connection
docker exec -it database-service psql -U postgres -d auth

# Check database logs
docker logs database-service
```

## Adding More Services Later

When VPS has more resources, you can:

1. **Add monitoring**:
   ```bash
   docker compose -f docker/docker-compose.light.yml up -d monitoring-service
   ```

2. **Add logging**:
   ```bash
   docker compose -f docker/docker-compose.light.yml up -d elasticsearch-lite kibana-lite
   ```

3. **Scale services**:
   ```bash
   docker compose -f docker/docker-compose.minimal.yml up -d --scale auth-service=2
   ```

## Security Notes

- Services run in isolated Docker networks
- Database only accessible internally (not exposed externally)
- Consider adding SSL certificates for production
- Regular security updates: `apt update && apt upgrade`

## Performance Monitoring

```bash
# Monitor Docker resources
docker stats

# View logs
docker compose -f docker/docker-compose.minimal.yml logs -f

# Check service health
curl http://localhost:3000/health
curl http://localhost:3001/health
```

## Emergency Stop

If something goes wrong:
```bash
# Stop all services
docker compose -f docker/docker-compose.minimal.yml down

# Remove everything
docker system prune -a --volumes
```

## Files Created

- `docker-compose.minimal.yml` - Lightweight configuration
- `deploy-vps-docker.sh` - Automated deployment script
- Updated `deploy-pm2-nginx.sh` - Includes Docker deployment

This setup ensures your VPS runs smoothly without the hanging issues you experienced locally.
