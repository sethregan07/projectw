#!/bin/bash

set -e
set -u

# Function to create databases
function create_user_and_database() {
    local database=$1
    echo "Creating user and database '$database'"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        CREATE DATABASE $database;
        GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
}

# Create multiple databases from the environment variable
if [ -n "$POSTGRES_MULTIPLE_DATABASES" ]; then
    echo "Multiple database creation requested: $POSTGRES_MULTIPLE_DATABASES"
    for db in $(echo $POSTGRES_MULTIPLE_DATABASES | tr ',' ' '); do
        create_user_and_database $db
    done
    echo "Multiple databases created"
fi

# Setup replication for disaster recovery
echo "Setting up replication for disaster recovery"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    ALTER SYSTEM SET wal_level = replica;
    ALTER SYSTEM SET max_wal_senders = 10;
    ALTER SYSTEM SET max_replication_slots = 10;
    ALTER SYSTEM SET archive_mode = on;
    ALTER SYSTEM SET archive_command = 'test ! -f /var/lib/postgresql/archive/%f && cp %p /var/lib/postgresql/archive/%f';
EOSQL

# Create replication user
echo "Creating replication user"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE ROLE replicator WITH REPLICATION LOGIN PASSWORD 'replicator_password';
EOSQL

# Configure pg_hba.conf to allow replication
echo "Configuring pg_hba.conf for replication"
cat >> "$PGDATA/pg_hba.conf" <<EOF
# Allow replication connections
host    replication     replicator      0.0.0.0/0               md5
host    replication     replicator      ::/0                    md5
EOF

echo "Database setup completed successfully"