# Microservices Setup

## Quick Start
1. Navigate to microservices directory
```bash
cd backend/microservices
```

2. Build services
```bash
docker-compose build
```

3. Start services
```bash
docker-compose up -d
```

## Key Services
- Ghost CMS: http://localhost:2369
- Mautic: http://localhost:8080
- API Gateway: http://localhost:3001
- Auth Service: http://localhost:4001
- Jaeger UI (Tracing): http://localhost:16686
- Kibana (Logging): http://localhost:5601
- Prometheus (Monitoring): http://localhost:9090

## Troubleshooting
- Check service logs: 
  ```bash
  docker-compose logs [service-name]
  ```
- Restart specific service:
  ```bash
  docker-compose restart [service-name]
  ```
- Stop all services:
  ```bash
  docker-compose down
  ```

## Common Issues
- Ensure Docker is running
- Check network connectivity
- Verify environment variables
