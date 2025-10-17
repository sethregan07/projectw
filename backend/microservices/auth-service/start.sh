#!/bin/bash

# Auth Service Automated Startup Script
# This script handles the complete setup and startup of the auth service

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="auth-service"
COMPOSE_FILE="docker-compose.yml"
BACKUP_DIR="./backups"

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

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info >/dev/null 2>&1; then
        error "Docker is not running. Please start Docker first."
        exit 1
    fi
}

# Function to check if required files exist
check_files() {
    local required_files=("docker-compose.yml" "init-db.sql" "init-user.sql")
    for file in "${required_files[@]}"; do
        if [ ! -f "$file" ]; then
            error "Required file '$file' not found"
            exit 1
        fi
    done
}

# Function to clean up existing containers (preserves data)
cleanup_containers() {
    info "Cleaning up existing containers (preserving data)..."

    # Stop and remove containers only (keep volumes)
    docker-compose down 2>/dev/null || true

    # Remove any orphaned containers
    docker container prune -f >/dev/null 2>&1 || true

    # Remove any existing auth-service containers by name
    docker rm -f auth-service auth-database 2>/dev/null || true

    # Also try to remove by pattern
    docker rm -f $(docker ps -aq --filter name=auth-service --filter name=auth-database 2>/dev/null) 2>/dev/null || true
}

# Function to start services
start_services() {
    info "Starting $PROJECT_NAME services..."

    # Start services
    if ! docker-compose up -d; then
        error "Failed to start services"
        exit 1
    fi

    info "Waiting for services to be healthy..."

    # Wait for database to be ready
    local max_attempts=30
    local attempt=1

    while [ $attempt -le $max_attempts ]; do
        if docker-compose exec -T database-service pg_isready -U postgres -d auth_db >/dev/null 2>&1; then
            log "Database is ready!"
            break
        fi

        info "Waiting for database... (attempt $attempt/$max_attempts)"
        sleep 2
        ((attempt++))
    done

    if [ $attempt -gt $max_attempts ]; then
        error "Database failed to start within expected time"
        docker-compose logs database-service
        exit 1
    fi

    # Wait for auth service to be ready
    attempt=1
    while [ $attempt -le $max_attempts ]; do
        if curl -s http://localhost:3001/health >/dev/null 2>&1; then
            log "Auth service is ready!"
            break
        fi

        info "Waiting for auth service... (attempt $attempt/$max_attempts)"
        sleep 2
        ((attempt++))
    done

    if [ $attempt -gt $max_attempts ]; then
        error "Auth service failed to start within expected time"
        docker-compose logs auth-service
        exit 1
    fi
}

# Function to verify services
verify_services() {
    info "Verifying services..."

    # Test database connection
    if ! docker-compose exec -T database-service psql -U postgres -d auth_db -c "SELECT COUNT(*) FROM users;" >/dev/null 2>&1; then
        error "Database verification failed"
        exit 1
    fi

    # Test auth service health
    if ! curl -s http://localhost:3001/health | grep -q '"status":"ok"'; then
        error "Auth service health check failed"
        exit 1
    fi

    # Test login functionality with test user (only if test users exist)
    local user_count
    user_count=$(docker-compose exec -T database-service psql -U postgres -d auth_db -t -c "SELECT COUNT(*) FROM users WHERE email LIKE '%@example.com';" 2>/dev/null | tr -d ' ')

    if [ "$user_count" -gt 0 ] 2>/dev/null; then
        local login_response
        login_response=$(curl -s -X POST http://localhost:3001/api/auth/login \
            -H "Content-Type: application/json" \
            -d '{"email":"test@example.com","password":"test123"}')

        if ! echo "$login_response" | grep -q '"message":"Login successful"'; then
            warn "Test login failed - this may be normal if test users were modified"
            info "Response: $login_response"
        else
            log "Test login successful"
        fi
    else
        info "No test users found - skipping login test"
    fi

    # Verify user data persistence
    local total_users
    total_users=$(docker-compose exec -T database-service psql -U postgres -d auth_db -t -c "SELECT COUNT(*) FROM users;" 2>/dev/null | tr -d ' ')
    info "Database contains $total_users registered users"

    log "All services verified successfully!"
}

# Function to show service status
show_status() {
    info "Service Status:"
    echo ""
    docker-compose ps
    echo ""

    # Get actual user count
    local total_users
    total_users=$(docker-compose exec -T database-service psql -U postgres -d auth_db -t -c "SELECT COUNT(*) FROM users;" 2>/dev/null | tr -d ' ')

    info "Database Status:"
    echo "  Total registered users: $total_users"

    # Show test users if they exist
    local test_count
    test_count=$(docker-compose exec -T database-service psql -U postgres -d auth_db -t -c "SELECT COUNT(*) FROM users WHERE email LIKE '%@example.com';" 2>/dev/null | tr -d ' ')

    if [ "$test_count" -gt 0 ]; then
        echo ""
        info "Available test users:"
        echo "  Email: test@example.com     Password: test123"
        echo "  Email: test2@example.com    Password: test123"
        echo "  Email: alena@example.com    Password: test123"
    fi

    echo ""
    info "Service URLs:"
    echo "  Health Check: http://localhost:3001/health"
    echo "  Auth Methods: http://localhost:3001/api/auth/methods"
    echo "  Register:     POST http://localhost:3001/api/auth/register"
    echo "  Login:        POST http://localhost:3001/api/auth/login"
    echo ""
    info "Management Commands:"
    echo "  View logs:        docker-compose logs -f"
    echo "  Stop services:    docker-compose down"
    echo "  Backup data:      ./backup-restore.sh backup"
    echo "  Reset (safe):     ./start.sh reset"
    echo "  Restart:          ./start.sh restart"
    echo ""
    info "⚠️  Data Protection: All user registrations are automatically preserved!"
}

# Function to restart services
restart_services() {
    info "Restarting services..."
    docker-compose restart
    sleep 5
    verify_services
}

# Main script logic
case "${1:-start}" in
    start)
        log "Starting $PROJECT_NAME setup..."

        check_docker
        check_files
        cleanup_containers
        start_services
        verify_services
        show_status

        log "$PROJECT_NAME setup completed successfully!"
        ;;
    restart)
        restart_services
        show_status
        ;;
    stop)
        info "Stopping services..."
        docker-compose down
        log "Services stopped"
        ;;
    status)
        show_status
        ;;
    cleanup)
        warn "This will remove all containers AND volumes (permanent data loss). Are you sure? (y/N)"
        read -r confirm
        if [[ "$confirm" =~ ^[Yy]$ ]]; then
            docker-compose down -v --remove-orphans
            docker volume rm $(docker volume ls -q | grep auth) 2>/dev/null || true
            log "Complete cleanup completed (data destroyed)"
        else
            log "Cleanup cancelled"
        fi
        ;;
    reset)
        warn "This will reset containers but keep your data. Are you sure? (y/N)"
        read -r confirm
        if [[ "$confirm" =~ ^[Yy]$ ]]; then
            cleanup_containers
            log "Containers reset (data preserved)"
        else
            log "Reset cancelled"
        fi
        ;;
    *)
        echo "Auth Service Management Script"
        echo ""
        echo "Usage: $0 <command>"
        echo ""
        echo "Commands:"
        echo "  start     Start all services (default) - preserves data"
        echo "  restart   Restart running services"
        echo "  stop      Stop all services"
        echo "  status    Show service status"
        echo "  reset     Reset containers but keep data"
        echo "  cleanup   Remove all containers AND volumes (DESTROYS DATA)"
        echo ""
        echo "Examples:"
        echo "  $0              # Start services (keeps existing data)"
        echo "  $0 reset        # Reset containers, preserve data"
        echo "  $0 cleanup      # Complete wipe (destroys all data)"
        echo "  $0 status       # Show status"
        ;;
esac