#!/bin/bash

# Database Backup and Restore Script for Auth Service
# This script handles automated backup and restore of the auth database

set -e

# Configuration
BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/auth_db_backup_${TIMESTAMP}.sql"
CONTAINER_NAME="auth-database"
DB_NAME="auth_db"
DB_USER="postgres"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Function to log messages
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}" >&2
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

# Function to backup database
backup_db() {
    log "Starting database backup..."

    if ! docker ps | grep -q "$CONTAINER_NAME"; then
        error "Database container '$CONTAINER_NAME' is not running"
        exit 1
    fi

    log "Creating backup: $BACKUP_FILE"
    docker exec "$CONTAINER_NAME" pg_dump -U "$DB_USER" -d "$DB_NAME" > "$BACKUP_FILE"

    if [ $? -eq 0 ]; then
        log "Backup completed successfully: $BACKUP_FILE"
        log "Backup size: $(du -h "$BACKUP_FILE" | cut -f1)"

        # Compress the backup
        gzip "$BACKUP_FILE"
        log "Backup compressed: ${BACKUP_FILE}.gz"

        # Clean up old backups (keep last 10)
        log "Cleaning up old backups..."
        ls -t "${BACKUP_DIR}"/auth_db_backup_*.sql.gz | tail -n +11 | xargs -r rm -f

        log "Backup process completed"
    else
        error "Backup failed"
        exit 1
    fi
}

# Function to restore database
restore_db() {
    local backup_file="$1"

    if [ -z "$backup_file" ]; then
        error "Please provide a backup file to restore"
        echo "Usage: $0 restore <backup_file.sql.gz>"
        exit 1
    fi

    if [ ! -f "$backup_file" ]; then
        error "Backup file '$backup_file' does not exist"
        exit 1
    fi

    log "Starting database restore from: $backup_file"

    if ! docker ps | grep -q "$CONTAINER_NAME"; then
        error "Database container '$CONTAINER_NAME' is not running"
        exit 1
    fi

    # Decompress if needed
    if [[ "$backup_file" == *.gz ]]; then
        log "Decompressing backup file..."
        gunzip -c "$backup_file" > "${backup_file%.gz}"
        backup_file="${backup_file%.gz}"
    fi

    warn "This will overwrite the current database. Are you sure? (y/N)"
    read -r confirm
    if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
        log "Restore cancelled"
        exit 0
    fi

    log "Restoring database..."
    docker exec -i "$CONTAINER_NAME" psql -U "$DB_USER" -d "$DB_NAME" < "$backup_file"

    if [ $? -eq 0 ]; then
        log "Database restore completed successfully"
    else
        error "Database restore failed"
        exit 1
    fi

    # Clean up decompressed file if we created it
    if [[ "$backup_file" == *.sql && -f "${backup_file}.gz" ]]; then
        rm -f "$backup_file"
    fi
}

# Function to list available backups
list_backups() {
    log "Available backups:"
    if [ -d "$BACKUP_DIR" ]; then
        ls -lh "$BACKUP_DIR"/auth_db_backup_*.sql.gz 2>/dev/null || echo "No backups found"
    else
        echo "Backup directory does not exist"
    fi
}

# Function to show usage
usage() {
    echo "Database Backup and Restore Script for Auth Service"
    echo ""
    echo "Usage: $0 <command> [options]"
    echo ""
    echo "Commands:"
    echo "  backup          Create a new database backup"
    echo "  restore <file>  Restore database from backup file"
    echo "  list            List available backup files"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 backup"
    echo "  $0 restore ./backups/auth_db_backup_20231017_143022.sql.gz"
    echo "  $0 list"
}

# Main script logic
case "${1:-help}" in
    backup)
        backup_db
        ;;
    restore)
        restore_db "$2"
        ;;
    list)
        list_backups
        ;;
    help|--help|-h)
        usage
        ;;
    *)
        error "Unknown command: $1"
        echo ""
        usage
        exit 1
        ;;
esac