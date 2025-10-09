# Ghost CMS and Mautic Integration

This setup provides a containerized environment running Ghost CMS and Mautic for marketing purposes, with proper authentication and data management.

## Prerequisites

Before starting, ensure you have:
1. Docker Engine installed (version 20.10.0 or higher)
   - Install from https://docs.docker.com/engine/install/
2. Docker Compose installed (version 2.0.0 or higher)
   - Usually comes with Docker Desktop
   - Standalone install: https://docs.docker.com/compose/install/

## Quick Start

1. First, verify Docker is running:
   ```bash
   docker --version
   docker compose version
   ```

2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

3. Update the `.env` file with your specific configuration:
   - Set secure passwords for databases
   - Configure email settings (SMTP)
   - Set admin credentials
   - Update secret keys

4. Start the services:
   ```bash
   docker compose up -d
   ```

5. Wait for services to initialize (this may take a few minutes)

6. Verify services are running:
   ```bash
   docker compose ps
   ```

7. Access the services:
   - Ghost CMS Admin: http://localhost:2368/ghost
   - Ghost CMS Site: http://localhost:2368
   - Mautic Admin: http://localhost:8080

## Troubleshooting

If you can't access the services:

1. Check if containers are running:
   ```bash
   docker compose ps
   ```

2. Check container logs:
   ```bash
   docker compose logs ghost
   docker compose logs mautic
   ```

3. Common issues:
   - Docker not running: Start Docker Desktop or Docker daemon
   - Port conflicts: Ensure ports 2368 and 8080 are not in use
   - Database connection: Check database credentials in .env
   - Permission issues: Check volume permissions

4. To restart services:
   ```bash
   docker compose down
   docker compose up -d
   ```

## Services

### Ghost CMS (Port 2368)
- Admin interface: http://localhost:2368/ghost
- Public site: http://localhost:2368
- Content API enabled
- MySQL database for persistence
- Configured email service

### Mautic (Port 8080)
- Admin interface: http://localhost:8080
- Full marketing automation platform
- MySQL database for persistence
- API enabled with basic auth
- Configured email service

## Data Persistence

All data is persisted using Docker volumes:
- `ghost_data`: Ghost content
- `ghost_db_data`: Ghost database
- `mautic_data`: Mautic files
- `mautic_db_data`: Mautic database

## Network Configuration

- `ghost_network`: Internal network for Ghost and its database
- `mautic_network`: Internal network for Mautic and its database
- `frontend_network`: Bridge network for external access

## Security Notes

- All sensitive information is stored in environment variables
- Internal services are isolated in their own networks
- Database services are not exposed to the host
- Regular backups recommended for all volumes

## Maintenance

To update the services:
```bash
docker compose pull
docker compose up -d
```

To view logs:
```bash
docker compose logs -f
```

To stop all services:
```bash
docker compose down
```

## First-Time Setup

After services are running:

1. Ghost CMS:
   - Visit http://localhost:2368/ghost
   - Follow the setup wizard
   - Create your admin account

2. Mautic:
   - Visit http://localhost:8080
   - Login with credentials from .env file
   - Complete initial configuration