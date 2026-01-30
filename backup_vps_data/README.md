# VPS Disaster Recovery Backup

This backup contains critical data from the VPS at 102.215.228.243 for disaster recovery purposes.

## Backup Date
November 9, 2025

## Contents

### Database Backup
- `postgres_backup.sql` - Complete PostgreSQL database dump including all users, databases, and data
- Contains: auth_db, ghost_db, mautic_db, analytics_db with all tables and data

### Configuration Files
- `microservices/` - Complete backend microservices configuration
  - Docker Compose files
  - Database initialization scripts
  - Service configurations
  - Environment settings

## Restoration Instructions

### 1. Database Restoration
```bash
# Restore PostgreSQL databases
psql -U postgres < postgres_backup.sql
```

### 2. Backend Services
```bash
# Navigate to backend directory
cd backend

# Start all services
docker compose -f microservices/docker-compose.yml up -d

# Check service status
docker compose -f microservices/docker-compose.yml ps
```

### 3. API Testing
```bash
# Test auth service health
curl http://localhost:3001/health

# Test registration
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"test123"}' \
  http://localhost:3001/api/auth/register
```

## Critical Data Included

- **User Accounts**: All registered users with authentication data
- **Database Schema**: Complete table structures and relationships
- **Service Configurations**: All microservice settings and environment variables
- **Docker Configurations**: Container setup and networking

## Security Notes

- Database contains hashed passwords (bcrypt)
- JWT secrets and API keys are included
- SSH keys and certificates are NOT included (security)

## Contact

If restoration is needed, contact the system administrator with this backup package.
