# Auth Service

A comprehensive authentication microservice built with Node.js, Express, and PostgreSQL.

## Features

- **JWT Authentication**: Secure token-based authentication with refresh tokens
- **User Registration/Login**: Traditional email/password authentication
- **Web3 Authentication**: MetaMask and crypto wallet integration
- **OAuth Integration**: Google and GitHub OAuth support
- **Password Security**: bcrypt hashing with salt rounds
- **Database Persistence**: PostgreSQL with automatic schema initialization
- **Health Monitoring**: Built-in health checks and monitoring
- **Backup/Restore**: Automated database backup and restore capabilities

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for development)
- PostgreSQL 15+ (handled by Docker)

### 🚀 Fully Automated Setup (Recommended)

1. **One-command setup** (handles everything automatically):
   ```bash
   cd backend/microservices/auth-service
   ./start.sh
   ```

   This script will:
   - ✅ Check Docker availability
   - ✅ Clean up any existing containers
   - ✅ Start database and auth services
   - ✅ Wait for services to be healthy
   - ✅ Verify functionality with test login
   - ✅ Show service status and test credentials

2. **Manual setup** (if needed):
   ```bash
   cd backend/microservices/auth-service
   docker-compose up -d
   ```

### 🧪 Test the Service

**Test users are pre-created:**
- Email: `test@example.com`     Password: `test123`
- Email: `test2@example.com`    Password: `test123`
- Email: `alena@example.com`    Password: `test123`

**Test login:**
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

**Test registration:**
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"New User","email":"new@example.com","password":"password123"}'
```

### Manual Setup (Development)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start PostgreSQL** (via Docker):
   ```bash
   docker run -d --name postgres-auth \
     -e POSTGRES_DB=auth_db \
     -e POSTGRES_USER=postgres \
     -e POSTGRES_PASSWORD=postgres \
     -p 5432:5432 \
     postgres:15-alpine
   ```

3. **Run the service**:
   ```bash
   npm start
   ```

## Database Management

### Automatic Initialization

The database schema is automatically created when the container starts for the first time using `init-db.sql`. This ensures:

- Tables are created consistently across deployments
- Indexes are set up for optimal performance
- No manual database setup required

### Backup and Restore

Use the provided backup script for data management:

```bash
# Create a backup
./backup-restore.sh backup

# List available backups
./backup-restore.sh list

# Restore from backup
./backup-restore.sh restore ./backups/auth_db_backup_20231017_143022.sql.gz
```

### Data Persistence

- **Production**: Data is stored in Docker volumes (`auth-db-data`)
- **Development**: Use the backup script to preserve data between deployments
- **Migration**: Copy the volume or use backup/restore when moving to new servers

## API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

### User Management

- `GET /api/users/profile` - Get user profile (authenticated)
- `PUT /api/users/profile` - Update user profile (authenticated)
- `POST /api/users/change-password` - Change password (authenticated)

### Web3 Authentication

- `POST /api/auth/web3/connect` - Generate Web3 challenge
- `POST /api/auth/web3/authenticate` - Authenticate with Web3 signature

### OAuth

- `GET /api/auth/google` - Google OAuth login
- `GET /api/auth/github` - GitHub OAuth login

### Utilities

- `GET /api/auth/methods` - List available auth methods
- `GET /health` - Service health check

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` | Service port |
| `DB_HOST` | `database-service` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_NAME` | `auth_db` | Database name |
| `DB_USER` | `postgres` | Database user |
| `DB_PASSWORD` | `postgres` | Database password |
| `JWT_SECRET` | Random | JWT signing secret |
| `JWT_EXPIRY` | `24h` | JWT token expiry |
| `GOOGLE_CLIENT_ID` | - | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | - | Google OAuth client secret |
| `GITHUB_CLIENT_ID` | - | GitHub OAuth client ID |
| `GITHUB_CLIENT_SECRET` | - | GitHub OAuth client secret |

## Deployment

### Production Deployment

1. **Set environment variables** in your deployment environment
2. **Use external Docker network** (already configured)
3. **Mount persistent volumes** for data retention
4. **Configure reverse proxy** (nginx example provided)

### Multi-Server Deployment

When deploying to multiple servers:

1. **Backup data** from the current server:
   ```bash
   ./backup-restore.sh backup
   ```

2. **Transfer backup** to the new server

3. **Deploy service** on new server (fully automated):
   ```bash
   ./start.sh
   ```

4. **Restore data** (if needed):
   ```bash
   ./backup-restore.sh restore <backup-file>
   ```

### Service Management

Use the automated management script:

```bash
# Start services
./start.sh

# Restart services
./start.sh restart

# Stop services
./start.sh stop

# Check status
./start.sh status

# Complete cleanup (removes containers and volumes)
./start.sh cleanup
```

### Docker Compose Override

For production, create a `docker-compose.override.yml`:

```yaml
version: '3.8'
services:
  auth-service:
    environment:
      - JWT_SECRET=your-super-secret-key-here
      - GOOGLE_CLIENT_ID=your-google-client-id
      - GITHUB_CLIENT_ID=your-github-client-id
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M
```

## Monitoring

- **Health Check**: `GET /health` returns service status
- **Logs**: All logs are written to `./logs/` directory
- **Database**: Monitor connection pool and query performance

## Security

- Passwords hashed with bcrypt (10 salt rounds)
- JWT tokens with configurable expiry
- CORS protection with specific origins
- Rate limiting (implement in reverse proxy)
- SQL injection prevention with parameterized queries

## Troubleshooting

### Service Won't Start

1. Check if port 3001 is available
2. Verify database container is running
3. Check logs: `docker logs auth-service`

### Database Connection Issues

1. Ensure PostgreSQL container is healthy
2. Check network connectivity between containers
3. Verify environment variables

### Data Loss Prevention

- Always backup before deployments
- Use persistent Docker volumes
- Test restore procedures regularly

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Use meaningful commit messages