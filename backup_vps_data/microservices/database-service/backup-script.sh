#!/bin/bash

# Database backup script for microservices
# This script creates daily backups of all databases and manages retention

set -e

# Configuration
BACKUP_DIR="/backup"
POSTGRES_HOST="database-service"
POSTGRES_USER="backup_user"
POSTGRES_PASSWORD="backup_password"
DATABASES="auth_db ghost_db mautic_db analytics_db"
RETENTION_DAYS=7
DATE=$(date +%Y-%m-%d_%H-%M-%S)
BACKUP_PATH="${BACKUP_DIR}/${DATE}"

# Create backup directory
mkdir -p "${BACKUP_PATH}"

echo "Starting database backup at $(date)"

# Backup each database
for DB in $DATABASES; do
    echo "Backing up database: ${DB}"
    
    # Create backup with compression
    pg_dump -h "${POSTGRES_HOST}" -U "${POSTGRES_USER}" -d "${DB}" -F c -Z 9 -f "${BACKUP_PATH}/${DB}.backup"
    
    # Verify backup
    if [ -f "${BACKUP_PATH}/${DB}.backup" ]; then
        echo "✅ Backup of ${DB} completed successfully"
    else
        echo "❌ Backup of ${DB} failed"
        exit 1
    fi
done

# Create a checksum file for integrity verification
echo "Creating checksums for backup verification"
cd "${BACKUP_PATH}"
sha256sum *.backup > checksums.sha256

# Create a metadata file with backup information
cat > "${BACKUP_PATH}/metadata.json" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "hostname": "$(hostname)",
  "databases": [$(echo $DATABASES | sed 's/ /","/g' | sed 's/^/"/' | sed 's/$/"/')],
  "postgres_version": "$(psql -V | cut -d ' ' -f 3)"
}
EOF

# Compress the entire backup directory
echo "Compressing backup"
cd "${BACKUP_DIR}"
tar -czf "${DATE}.tar.gz" "${DATE}"

# Remove the uncompressed backup directory
rm -rf "${BACKUP_PATH}"

# Cleanup old backups
echo "Cleaning up backups older than ${RETENTION_DAYS} days"
find "${BACKUP_DIR}" -name "*.tar.gz" -type f -mtime +${RETENTION_DAYS} -delete

# Create a symlink to the latest backup
ln -sf "${BACKUP_DIR}/${DATE}.tar.gz" "${BACKUP_DIR}/latest.tar.gz"

echo "Backup completed at $(date)"

# Replicate backup to secondary storage (if configured)
if [ -n "${SECONDARY_BACKUP_DIR:-}" ]; then
    echo "Replicating backup to secondary storage"
    cp "${BACKUP_DIR}/${DATE}.tar.gz" "${SECONDARY_BACKUP_DIR}/"
    cp "${BACKUP_DIR}/latest.tar.gz" "${SECONDARY_BACKUP_DIR}/"
fi

# Send notification (if configured)
if [ -n "${NOTIFICATION_URL:-}" ]; then
    echo "Sending backup notification"
    curl -s -X POST "${NOTIFICATION_URL}" \
        -H "Content-Type: application/json" \
        -d "{\"status\":\"success\",\"timestamp\":\"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\",\"backup_file\":\"${DATE}.tar.gz\",\"size\":\"$(du -h "${BACKUP_DIR}/${DATE}.tar.gz" | cut -f1)\"}"
fi

echo "Backup process completed successfully"