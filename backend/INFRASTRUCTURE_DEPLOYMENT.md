# Infrastructure Deployment Guide

## Overview
This guide covers the deployment of a privacy-focused microservices architecture with comprehensive monitoring, logging, and identity management capabilities.

## Deployment Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   API Gateway   │    │  Auth Service   │    │   Database      │
│   (Port 3000)   │◄──►│  (Port 3001)   │◄──►│   (Postgres)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Ghost CMS      │    │   Mautic        │    │  Monitoring     │
│ (Port 2368)     │    │   Marketing     │    │  (Prometheus)   │
└─────────────────┘    │ (Port 8000)     │    │  (Port 9090)    │
                       └─────────────────┘    └─────────────────┘
                                │                       │
                                ▼                       ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │    Logging      │    │    Grafana      │
                       │   (ELK Stack)   │    │   Dashboard     │
                       │ (Ports 5601,   │    │  (Port 3002)    │
                       │       9200)    │    │                 │
                       └─────────────────┘    └─────────────────┘
```

## Quick Start

### 1. Prerequisites
```bash
# Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. Environment Setup
```bash
# Create environment file
cp .env.example .env

# Edit with your secure values
nano .env
```

### 3. Deploy Core Services
```bash
# Start all microservices
cd backend/microservices
docker compose up -d

# Check service health
../docker/log-health-check.sh
```

### 4. Deploy Monitoring Stack
```bash
# Start Grafana
cd ../docker
docker compose -f docker-compose.grafana.yml up -d

# Access Grafana at http://localhost:3002 (admin/admin)
```

## Service Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:80 | Next.js Application |
| API Gateway | http://localhost:3000 | Service Entry Point |
| Auth Service | http://localhost:3001 | Authentication API |
| Ghost CMS | http://localhost:2368 | Content Management |
| Mautic Marketing | http://localhost:8000 | Marketing Automation |
| Grafana | http://localhost:3002 | Monitoring Dashboard |
| Prometheus | http://localhost:9090 | Metrics Collection |
| Elasticsearch | http://localhost:9200 | Log Storage |
| Kibana | http://localhost:5601 | Log Visualization |
| Jaeger | http://localhost:16686 | Distributed Tracing |

## Health Monitoring

### Automated Health Checks
```bash
# Run comprehensive health check
./backend/docker/log-health-check.sh

# View health check logs
tail -f /var/log/microservices-health.log
```

### Manual Service Checks
```bash
# Check all containers
docker ps --filter "network=microservices-network"

# Check logs for specific service
docker logs auth-service --tail 50
```

## Monitoring Dashboards

### Grafana Setup
1. Access Grafana at http://localhost:3002
2. Login with: admin / admin
3. Navigate to "Microservices Architecture Overview" dashboard

### Key Metrics to Monitor
- Service health status
- API Gateway request rates
- Database connection pools
- Container resource usage
- Authentication attempts
- Error rates and logs

## Configuration Files

### Core Configuration
- `prometheus.yml` - Prometheus metrics collection
- `logstash.conf` - Log processing pipeline
- `docker-compose.yml` - Main service definitions

### Monitoring Configuration
- `grafana/provisioning/datasources/prometheus.yml` - Data source config
- `grafana/dashboards/microservices-overview.json` - Dashboard definition

## Security Considerations

### Network Security
- Services isolated in `microservices-network`
- No external database access
- Encrypted secrets via environment variables

### Authentication
- JWT-based authentication service
- Web3 identity integration planned
- OAuth2 fallback capability

### Monitoring Security
- Grafana secured with admin credentials
- Prometheus metrics protected
- Log data encrypted at rest

## Troubleshooting

### Common Issues

**Services Not Starting**
```bash
# Check Docker logs
docker compose logs

# Validate environment variables
docker compose config
```

**Health Check Failures**
```bash
# Run detailed health check
./backend/docker/log-health-check.sh

# Check specific service logs
docker logs <service-name> --since 1h
```

**Database Connection Issues**
```bash
# Test database connectivity
docker exec database-service pg_isready -U postgres

# Check database logs
docker logs database-service
```

## Performance Tuning

### Resource Limits
```yaml
# Add to service definitions in docker-compose.yml
deploy:
  resources:
    limits:
      cpus: '1.0'
      memory: 1G
    reservations:
      cpus: '0.5'
      memory: 512M
```

### Scaling Services
```bash
# Scale specific service
docker compose up -d --scale auth-service=3

# Check resource usage
docker stats
```

## Backup and Recovery

### Database Backup
```bash
# Create database backup
docker exec database-service pg_dumpall -U postgres > backup.sql

# Restore from backup
docker exec -i database-service psql -U postgres < backup.sql
```

### Configuration Backup
```bash
# Backup volumes
docker run --rm -v microservices_database-data:/data -v $(pwd):/backup alpine tar czf /backup/database-backup.tar.gz -C /data .
```

## Development Workflow

### Local Development
```bash
# Start services
docker compose up -d

# View logs
docker compose logs -f

# Make changes and rebuild
docker compose build --no-cache auth-service
docker compose up -d auth-service
```

### Testing Changes
```bash
# Run health checks
./backend/docker/log-health-check.sh

# Test specific endpoints
curl http://localhost:3000/health
curl http://localhost:3001/health
```

## Future Enhancements

### Identity Integration
- Web3 wallet authentication (MetaMask, WalletConnect)
- Decentralized identity verification
- Zero-knowledge proof authentication

### Enhanced Monitoring
- Alert manager configuration
- Loki log aggregation
- Distributed tracing with Jaeger

### Security Improvements
- Service mesh implementation (Istio/Linkerd)
- Secret management (Vault)
- Automated certificate management

## Support

For issues and support:
1. Check the health check script output
2. Review Docker container logs
3. Consult Grafana monitoring dashboards
4. Validate environment configuration

## Version Information
- Docker: 24.0+
- Docker Compose: 2.20+
- PostgreSQL: 15+
- Node.js: 18+
- Grafana: 10+
- Prometheus: 2.45+
