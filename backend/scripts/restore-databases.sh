#!/bin/bash
# Database restoration script for ProjectW

set -e

echo "🗄️  Starting database restoration..."

# Wait for database service to be ready
echo "Waiting for database service..."
timeout=300
counter=0
while ! docker exec database-service pg_isready -U postgres -h localhost >/dev/null 2>&1; do
    if [ $counter -ge $timeout ]; then
        echo "Database service not ready after $timeout seconds"
        exit 1
    fi
    counter=$((counter + 5))
    echo "Waiting... ($counter/$timeout seconds)"
    sleep 5
done

echo "Database service is ready!"

# Create databases
echo "Creating databases..."
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS auth_db;" || true
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS ghost_db;" || true
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS mautic_db;" || true
docker exec database-service psql -U postgres -c "CREATE DATABASE IF NOT EXISTS analytics_db;" || true

# Restore auth database if backup exists
if [ -f "backend/microservices/auth-service/backups/auth_db_backup_*.sql.gz" ]; then
    echo "Restoring auth database..."
    BACKUP_FILE=$(ls -t backend/microservices/auth-service/backups/auth_db_backup_*.sql.gz | head -1)
    echo "Using backup: $BACKUP_FILE"
    gunzip -c "$BACKUP_FILE" | docker exec -i database-service psql -U postgres -d auth_db
    echo "✅ Auth database restored"
else
    echo "No auth database backup found, initializing fresh..."
    # Initialize auth database schema
    docker cp backend/microservices/auth-service/init-db.sql database-service:/tmp/init-db.sql
    docker exec database-service psql -U postgres -d auth_db -f /tmp/init-db.sql

    # Add test users
    docker cp backend/microservices/auth-service/init-user.sql database-service:/tmp/init-user.sql
    docker exec database-service psql -U postgres -d auth_db -f /tmp/init-user.sql
    echo "✅ Auth database initialized with test data"
fi

# Restore other databases if backups exist
for db in ghost_db mautic_db analytics_db; do
    if ls backend/microservices/auth-service/backups/${db}_backup_*.sql.gz 1> /dev/null 2>&1; then
        echo "Restoring $db..."
        BACKUP_FILE=$(ls -t backend/microservices/auth-service/backups/${db}_backup_*.sql.gz | head -1)
        echo "Using backup: $BACKUP_FILE"
        gunzip -c "$BACKUP_FILE" | docker exec -i database-service psql -U postgres -d $db
        echo "✅ $db restored"
    else
        echo "No backup found for $db, skipping..."
    fi
done

echo "🗄️  Database restoration completed!"