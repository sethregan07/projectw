# Instructions for setup on 151.241.14.12

```bash
# On your database VPS (151.241.14.12)
git clone https://github.com/sethregan07/projectw.git
cd projectw/backend
./database-vps-setup.sh
```

## What this does:
- Installs PostgreSQL 15.14 natively (persistent beyond Docker)
- Creates databases: auth, ghost_db, mautic_db, analytics_db  
- Sets up secure users for each service
- Configures automated daily backups
- Enables remote connections for your app servers
- Generates credentials file (~/.postgres_credentials)

## After setup, your app can connect to:
- Host: 151.241.14.12
- Port: 5432
- Users: generated automatically

## Benefits:
✅ Database survives all container/VPS restarts
✅ Data persists independently of Docker lifecycles  
✅ No more manual database recreation
✅ Production-ready with backups and monitoring
✅ Secure separate users per service
