# Multi-VPS Production Deployment Guide
## Separate Database VPS Architecture

This guide explains how to deploy your microservices across multiple VPS instances with a dedicated database server for maximum data persistence and scalability.

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐
│   Application   │    │   Database      │
│   VPS(es)       │    │   VPS           │
├─────────────────┤    ├─────────────────┤
│ • Next.js App   │    │ • PostgreSQL    │
│ • API Gateway   │    │ • Data Volume   │
│ • Auth Service  │    │ • Backups       │
│ • Ghost Service │    │ • Monitoring    │
│ • Mautic Service│    └─────────────────┘
├─────────────────┤    Separate persistence
│ Docker + Nginx  │    Native PostgreSQL
└─────────────────┘
```

## 🚀 Quick Start

### 1. Provision Your VPS Instances

#### Database VPS (Recommended: 2-4GB RAM, SSD Storage)
- Ubuntu 20.04/22.04 LTS
- At least 50GB SSD storage
- Good network connectivity

#### Application VPS(s) (Recommended: 1-2GB RAM each)
- Ubuntu 20.04/22.04 LTS
- Can scale horizontally

### 2. Setup Database VPS

```bash
# SSH into your database VPS
ssh root@your-database-vps

# Clone your repository and run setup script
git clone https://github.com/yourusername/projectw.git
cd projectw/backend
./database-vps-setup.sh
```

The script will:
- ✅ Install PostgreSQL 15.14
- ✅ Configure remote access
- ✅ Create databases and users
- ✅ Setup automatic backups
- ✅ Configure firewall rules
- ✅ Generate secure credentials

**Save the generated credentials** displayed at the end of the script!

### 3. Deploy Application Services

```bash
# On your application VPS
git clone https://github.com/yourusername/projectw.git
cd projectw/backend

# Copy environment template
cp .env.prod.example .env

# Edit with your database VPS details
nano .env

# Deploy with external database
docker-compose -f docker-compose.prod.external-db.yml up -d
```

## ⚙️ Configuration Details

### Environment Variables Required

```bash
# Database connection (from database-vps-setup.sh output)
DB_HOST=database-vps-ip-or-domain
DB_USER=auth_user
DB_PASSWORD=generated-auth-password
DB_NAME=auth

# Service-specific users
GHOST_DB_USER=ghost_user
GHOST_DB_PASSWORD=generated-ghost-password
MAUTIC_DB_USER=mautic_user
MAUTIC_DB_PASSWORD=generated-mautic-password

# JWT (generate a secure 32+ char random string)
JWT_SECRET=your-super-secure-random-key-here
```

### Docker Compose Configuration

The `docker-compose.prod.external-db.yml` file:
- ❌ Removes the database service
- 🔗 Connects all services to external database
- 🔐 Uses environment variables for credentials
- 📊 Keeps application data volumes separate

## 🔒 Security Considerations

### Database VPS
- **Firewall**: Only allow PostgreSQL (5432) from application servers
- **SSL**: Enable PostgreSQL SSL encryption
- **Users**: Separate database users for each service
- **Backups**: Automated encrypted backups

### Application VPS
- **No root database access**: Only service-specific users
- **Network isolation**: Internal Docker networks
- **Regular updates**: Keep containers updated

## 📈 Scaling Strategy

### Horizontal Scaling (Multiple App VPS)
```
VPS 1 (App) ──┐
               ├── Load Balancer ── User Traffic
VPS 2 (App) ──┘
VPS 3 (DB)  ─,total_data───┘
```

1. **Add more application VPS**: Copy setup, change IP
2. **Configure load balancer**: Nginx upstream or cloud load balancer
3. **Database remains unchanged**: Same connection parameters

### Vertical Scaling
- **Application VPS**: Can be smaller instances (1-2GB RAM)
- **Database VPS**: Upgrade RAM/storage as data grows

## 🔍 Monitoring & Backup

### Database Monitoring
```bash
# On database VPS
pg_activity    # Real-time monitoring
htop           # System resources
pg_stat_statements extension enabled
```

### Application Monitoring
```bash
# Container logs
docker-compose logs -f

# Service healthchecks
curl http://localhost:3001/health
curl http://localhost:3000/health
```

### Backup Strategy
- **Daily automated backups** (configured in setup script)
- **7-day retention** by default
- **Encrypted backups** for cloud storage
- **Manual backups** before major updates

## 🚨 Troubleshooting

### Common Issues

#### Connection Refused
```bash
# Check database VPS firewall
ufw status
# Restart PostgreSQL
systemctl restart postgresql
# Test connection from app VPS
psql -h database-ip -U auth_user -d auth
```

#### Permission Denied
```bash
# Check database user privileges
sudo -u postgres psql -c "\du"
# Ensure correct user for each database
```

#### Schema Not Found
```bash
# Reinitialize database schema
cd /var/lib/postgresql
sudo -u postgres psql -f init-databases.sql
```

## 📋 Migration from Single VPS

If moving from Docker-contained database to separate VPS:

1. **Export data** from current setup
2. **Import data** into new database VPS
3. **Update connection strings**
4. **Deploy with external-db compose file**
5. **Test thoroughly before decommissioning old DB**

## 🔄 Emergency Recovery

### Database Server Down
1. **Start backup VPS** with PostgreSQL
2. **Restore latest backup**
3. **Update DNS/IP temporarily**
4. **Switch back when main DB is recovered**

### Application Server Issues
1. **Deploy code to new VPS**
2. **Update load balancer**
3. **Test, then remove failed instance**

## 📊 Performance Optimization

### PostgreSQL Tuning
- **Memory**: Configure shared_buffers based on RAM
- **Connections**: Set max_connections appropriately
- **Extensions**: pg_stat_statements enabled

### Application Tuning
- **Connection pooling**: Configure database connection pools
- **Caching**: Redis for session caching (if added later)
- **CDN**: Static assets served via CDN

---

## 📝 Maintenance Schedule

- **Daily**: Monitor logs and backups
- **Weekly**: Update packages and security patches
- **Monthly**: Performance review and optimization
- **Quarterly**: Security audit and compliance check

## 📞 Support

For deployment issues, check:
1. Container logs: `docker-compose logs`
2. Database logs: `/var/log/postgresql/`
3. Network connectivity: `ping` and `telnet`
4. Firewall rules: `ufw status`

This architecture provides **enterprise-grade data persistence** while maintaining **deployment flexibility** and **cost efficiency**.
