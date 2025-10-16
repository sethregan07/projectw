#!/bin/bash

# PostgreSQL VPS Setup Script
# This script sets up a dedicated PostgreSQL server for multi-VPS deployment
# Run this on your separate database VPS as root/sudo user

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DB_ROOT_PASSWORD="secure_root_password_$(openssl rand -hex 8)"
AUTH_USER_PASSWORD="auth_pass_$(openssl rand -hex 8)"
GHOST_USER_PASSWORD="ghost_pass_$(openssl rand -hex 8)"
MAUTIC_USER_PASSWORD="mautic_pass_$(openssl rand -hex 8)"

echo -e "${GREEN}🔧 Setting up PostgreSQL VPS...${NC}"

# Update system
apt update && apt upgrade -y

# Install PostgreSQL
apt install -y postgresql postgresql-contrib postgresql-server-dev-all

# Stop PostgreSQL to configure
systemctl stop postgresql

# Configure PostgreSQL for remote access
cp /etc/postgresql/15/main/postgresql.conf /etc/postgresql/15/main/postgresql.conf.backup

# Allow remote connections
sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/" /etc/postgresql/15/main/postgresql.conf

# Configure logging
echo "log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '" >> /etc/postgresql/15/main/postgresql.conf
echo "log_statement = 'ddl'" >> /etc/postgresql/15/main/postgresql.conf

# Configure pg_hba.conf for remote access
cat >> /etc/postgresql/15/main/pg_hba.conf << EOF
# Allow local connections
local   all             postgres                                peer
local   all             all                                     md5

# Allow remote connections from app servers (CHANGE IP RANGES)
host    all             all             10.0.0.0/8              md5
host    all             all             172.16.0.0/12           md5
host    all             all             192.168.0.0/16          md5

# SSL connections (recommended for production)
hostssl all             all             0.0.0.0/0               md5
EOF

# Start PostgreSQL
systemctl start postgresql
systemctl enable postgresql

# Secure root user
sudo -u postgres psql -c "ALTER USER postgres PASSWORD '$DB_ROOT_PASSWORD';"

# Create databases
echo -e "${YELLOW}📊 Creating databases...${NC}"
sudo -u postgres psql << EOF
-- Create databases
CREATE DATABASE auth;
CREATE DATABASE ghost_db;
CREATE DATABASE mautic_db;
CREATE DATABASE analytics_db;

-- Switch to databases and create roles/users
\c auth;
CREATE SCHEMA IF NOT EXISTS auth;
ALTER DATABASE auth SET search_path TO auth, public;

\c ghost_db;
CREATE SCHEMA IF NOT EXISTS ghost;
ALTER DATABASE ghost_db SET search_path TO ghost, public;

\c mautic_db;
CREATE SCHEMA IF NOT EXISTS mautic;
ALTER DATABASE mautic_db SET search_path TO mautic, public;

\c analytics_db;
CREATE SCHEMA IF NOT EXISTS analytics;
ALTER DATABASE analytics_db SET search_path TO analytics, public;

-- Create service users
CREATE USER auth_user WITH ENCRYPTED PASSWORD '$AUTH_USER_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE auth TO auth_user;
GRANT ALL ON SCHEMA auth TO auth_user;

CREATE USER ghost_user WITH ENCRYPTED PASSWORD '$GHOST_USER_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE ghost_db TO ghost_user;
GRANT ALL ON SCHEMA ghost TO ghost_user;

CREATE USER mautic_user WITH ENCRYPTED PASSWORD '$MAUTIC_USER_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE mautic_db TO mautic_user;
GRANT ALL ON SCHEMA mautic TO mautic_user;

-- Create admin user for backups
CREATE USER db_admin WITH ENCRYPTED PASSWORD 'admin_pass_$(openssl rand -hex 8)' SUPERUSER;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO db_admin;

-- Grant privileges to all users on public schema
ALTER DEFAULT PRIVILEGES IN SCHEMA auth GRANT ALL PRIVILEGES ON TABLES TO auth_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA ghost GRANT ALL PRIVILEGES ON TABLES TO ghost_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA mautic GRANT ALL PRIVILEGES ON TABLES TO mautic_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA analytics GRANT ALL PRIVILEGES ON TABLES TO db_admin;

-- Create extensions for performance and features
\c auth
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";

\c ghost_db
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c mautic_db
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c analytics_db
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
CREATE EXTENSION IF NOT EXISTS "pg_buffercache";
EOF

# Configure firewall
ufw allow ssh
ufw allow 5432/tcp
ufw --force enable

# Install backup tools
apt install -y pgbackrest pg-activity htop iotop

# Create backup directories
mkdir -p /var/lib/postgresql/backups/{full,incremental}
chown postgres:postgres /var/lib/postgresql/backups -R

# Configure automatic backups (daily at 2 AM)
cat > /etc/cron.d/postgres-backup << EOF
0 2 * * * postgres /usr/bin/pg_dumpall -U postgres > /var/lib/postgresql/backups/full/\$(date +\%Y\%m\%d\%H\%M\%S)-full.sql
30 2 * * * postgres find /var/lib/postgresql/backups/full -name "*.sql" -mtime +7 -delete >/dev/null 2>&1
EOF

# Create database initialization script
cat > /var/lib/postgresql/init-databases.sql << 'EOF'
-- Auth database schema
\c auth
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  wallet_address VARCHAR(255) UNIQUE,
  auth_provider VARCHAR(50) DEFAULT 'jwt',
  provider_id VARCHAR(255),
  verified_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS refresh_tokens (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS login_attempts (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  ip_address VARCHAR(45),
  success BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Analytics database schema
\c analytics_db
CREATE TABLE IF NOT EXISTS page_views (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  session_id VARCHAR(255) NOT NULL,
  page_url VARCHAR(255) NOT NULL,
  referrer_url VARCHAR(255),
  user_agent TEXT,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_events (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  session_id VARCHAR(255) NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  event_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON auth.users(email);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON auth.refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_login_attempts_email ON auth.login_attempts(email);
CREATE INDEX IF NOT EXISTS idx_page_views_user_id ON analytics_db.page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_user_events_event_type ON analytics_db.user_events(event_type);
EOF

# Set permissions on init script
chown postgres:postgres /var/lib/postgresql/init-databases.sql

# Save credentials for later use
cat > ~/.postgres_credentials << EOF
# Database VPS Credentials - Save securely!
VPS_IP: $(curl -s http://ipinfo.io/ip)
DB_HOST: $(curl -s http://ipinfo.io/ip)

ROOT_USER: postgres
ROOT_PASSWORD: $DB_ROOT_PASSWORD

AUTH_USER: auth_user
AUTH_PASSWORD: $AUTH_USER_PASSWORD

GHOST_USER: ghost_user
GHOST_PASSWORD: $GHOST_USER_PASSWORD

MAUTIC_USER: mautic_user
MAUTIC_PASSWORD: $MAUTIC_USER_PASSWORD

ADMIN_USER: db_admin
ADMIN_PASSWORD: admin_pass_$(openssl rand -hex 8)

# Use these in your application's environment variables
EOF

chmod 600 ~/.postgres_credentials

echo -e "${GREEN}✅ PostgreSQL VPS setup complete!${NC}"
echo -e "${YELLOW}🔒 Credentials saved to ~/.postgres_credentials${NC}"
echo -e "${YELLOW}📄 Database initialization script: /var/lib/postgresql/init-databases.sql${NC}"
echo ""
echo "Next steps:"
echo "1. Copy credentials to your app VPS environment variables"
echo "2. Update firewall rules to only allow your app server IPs"
echo "3. Test connection from app VPS"
echo "4. Run database schema initialization: psql -U postgres -f /var/lib/postgresql/init-databases.sql"

# Run the initialization script
sudo -u postgres psql -f /var/lib/postgresql/init-databases.sql

echo -e "${GREEN}🎉 Setup complete! Database is ready for production use.${NC}"
