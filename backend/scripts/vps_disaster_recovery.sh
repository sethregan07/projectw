#!/bin/bash
#
# VPS Disaster Recovery Script
# 
# This script automates the process of cloning and recovering VPS instances
# across multiple providers for disaster recovery purposes.
#
# Features:
# - Cross-provider compatibility (Hetzner, DigitalOcean, Linode, Vultr)
# - Automated provisioning of new instances
# - Configuration synchronization
# - Data restoration from backups
# - Health verification
# - DNS updates
#
# Usage: ./vps_disaster_recovery.sh [options]
#
# Options:
#   --source-provider    Source VPS provider (hetzner|digitalocean|linode|vultr)
#   --source-region      Source region
#   --source-instance    Source instance ID or name
#   --target-provider    Target VPS provider (hetzner|digitalocean|linode|vultr)
#   --target-region      Target region
#   --backup-location    Location of backup files (optional, default: auto-detect)
#   --services           Comma-separated list of services to recover (default: all)
#   --dns-provider       DNS provider for updating records (cloudflare|route53|manual)
#   --verify             Perform verification after recovery (default: true)
#   --help               Show this help message

set -e

# Default values
SOURCE_PROVIDER=""
SOURCE_REGION=""
SOURCE_INSTANCE=""
TARGET_PROVIDER=""
TARGET_REGION=""
BACKUP_LOCATION="auto"
SERVICES="all"
DNS_PROVIDER="manual"
VERIFY=true
API_KEYS_FILE="$HOME/.vps_api_keys.enc"
LOG_FILE="/var/log/vps_recovery_$(date +%Y%m%d_%H%M%S).log"
TEMP_DIR=$(mktemp -d)

# Function to display script usage
function show_usage() {
    grep "^# " "$0" | cut -c 3- | sed -n '/^Usage:/,/^$/p'
    exit 1
}

# Function to log messages
function log() {
    local level=$1
    local message=$2
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [$level] $message" | tee -a "$LOG_FILE"
}

# Function to check required tools
function check_requirements() {
    local tools=("curl" "jq" "ssh" "scp" "rsync" "openssl" "dig")
    local missing=()
    
    for tool in "${tools[@]}"; do
        if ! command -v "$tool" &> /dev/null; then
            missing+=("$tool")
        fi
    done
    
    if [ ${#missing[@]} -ne 0 ]; then
        log "ERROR" "Missing required tools: ${missing[*]}"
        log "ERROR" "Please install these tools and try again."
        exit 1
    fi
    
    # Check for provider-specific CLI tools
    case "$SOURCE_PROVIDER" in
        hetzner)
            if ! command -v hcloud &> /dev/null; then
                log "ERROR" "Hetzner Cloud CLI (hcloud) is required but not installed."
                exit 1
            fi
            ;;
        digitalocean)
            if ! command -v doctl &> /dev/null; then
                log "ERROR" "DigitalOcean CLI (doctl) is required but not installed."
                exit 1
            fi
            ;;
        linode)
            if ! command -v linode-cli &> /dev/null; then
                log "ERROR" "Linode CLI (linode-cli) is required but not installed."
                exit 1
            fi
            ;;
        vultr)
            if ! command -v vultr &> /dev/null; then
                log "ERROR" "Vultr CLI (vultr) is required but not installed."
                exit 1
            fi
            ;;
    esac
    
    case "$TARGET_PROVIDER" in
        hetzner)
            if ! command -v hcloud &> /dev/null; then
                log "ERROR" "Hetzner Cloud CLI (hcloud) is required but not installed."
                exit 1
            fi
            ;;
        digitalocean)
            if ! command -v doctl &> /dev/null; then
                log "ERROR" "DigitalOcean CLI (doctl) is required but not installed."
                exit 1
            fi
            ;;
        linode)
            if ! command -v linode-cli &> /dev/null; then
                log "ERROR" "Linode CLI (linode-cli) is required but not installed."
                exit 1
            fi
            ;;
        vultr)
            if ! command -v vultr &> /dev/null; then
                log "ERROR" "Vultr CLI (vultr) is required but not installed."
                exit 1
            fi
            ;;
    esac
}

# Function to load API keys
function load_api_keys() {
    if [ ! -f "$API_KEYS_FILE" ]; then
        log "ERROR" "API keys file not found: $API_KEYS_FILE"
        log "INFO" "Create this file with your encrypted API keys."
        exit 1
    fi
    
    # Decrypt API keys file
    log "INFO" "Decrypting API keys..."
    if ! KEYS=$(openssl enc -aes-256-cbc -d -in "$API_KEYS_FILE" -pass pass:"$ENCRYPTION_PASSWORD"); then
        log "ERROR" "Failed to decrypt API keys file. Check your encryption password."
        exit 1
    fi
    
    # Export keys as environment variables
    eval "$KEYS"
    
    # Verify required keys are present
    case "$SOURCE_PROVIDER" in
        hetzner)
            if [ -z "$HCLOUD_TOKEN" ]; then
                log "ERROR" "HCLOUD_TOKEN not found in API keys file."
                exit 1
            fi
            ;;
        digitalocean)
            if [ -z "$DIGITALOCEAN_TOKEN" ]; then
                log "ERROR" "DIGITALOCEAN_TOKEN not found in API keys file."
                exit 1
            fi
            ;;
        linode)
            if [ -z "$LINODE_TOKEN" ]; then
                log "ERROR" "LINODE_TOKEN not found in API keys file."
                exit 1
            fi
            ;;
        vultr)
            if [ -z "$VULTR_API_KEY" ]; then
                log "ERROR" "VULTR_API_KEY not found in API keys file."
                exit 1
            fi
            ;;
    esac
    
    case "$TARGET_PROVIDER" in
        hetzner)
            if [ -z "$HCLOUD_TOKEN" ]; then
                log "ERROR" "HCLOUD_TOKEN not found in API keys file."
                exit 1
            fi
            ;;
        digitalocean)
            if [ -z "$DIGITALOCEAN_TOKEN" ]; then
                log "ERROR" "DIGITALOCEAN_TOKEN not found in API keys file."
                exit 1
            fi
            ;;
        linode)
            if [ -z "$LINODE_TOKEN" ]; then
                log "ERROR" "LINODE_TOKEN not found in API keys file."
                exit 1
            fi
            ;;
        vultr)
            if [ -z "$VULTR_API_KEY" ]; then
                log "ERROR" "VULTR_API_KEY not found in API keys file."
                exit 1
            fi
            ;;
    esac
    
    # DNS provider API key
    case "$DNS_PROVIDER" in
        cloudflare)
            if [ -z "$CLOUDFLARE_API_KEY" ] || [ -z "$CLOUDFLARE_EMAIL" ]; then
                log "ERROR" "CLOUDFLARE_API_KEY or CLOUDFLARE_EMAIL not found in API keys file."
                exit 1
            fi
            ;;
        route53)
            if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
                log "ERROR" "AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY not found in API keys file."
                exit 1
            fi
            ;;
    esac
}

# Function to get source instance details
function get_source_instance_details() {
    log "INFO" "Getting source instance details from $SOURCE_PROVIDER..."
    
    case "$SOURCE_PROVIDER" in
        hetzner)
            SOURCE_DETAILS=$(hcloud server describe "$SOURCE_INSTANCE" --output json)
            SOURCE_IP=$(echo "$SOURCE_DETAILS" | jq -r '.public_net.ipv4.ip')
            SOURCE_IMAGE=$(echo "$SOURCE_DETAILS" | jq -r '.image.name')
            SOURCE_TYPE=$(echo "$SOURCE_DETAILS" | jq -r '.server_type.name')
            ;;
        digitalocean)
            SOURCE_DETAILS=$(doctl compute droplet get "$SOURCE_INSTANCE" --output json)
            SOURCE_IP=$(echo "$SOURCE_DETAILS" | jq -r '.[0].networks.v4[] | select(.type=="public") | .ip_address')
            SOURCE_IMAGE=$(echo "$SOURCE_DETAILS" | jq -r '.[0].image.slug')
            SOURCE_TYPE=$(echo "$SOURCE_DETAILS" | jq -r '.[0].size_slug')
            ;;
        linode)
            SOURCE_DETAILS=$(linode-cli linodes view "$SOURCE_INSTANCE" --json)
            SOURCE_IP=$(echo "$SOURCE_DETAILS" | jq -r '.[0].ipv4[0]')
            SOURCE_IMAGE=$(echo "$SOURCE_DETAILS" | jq -r '.[0].image')
            SOURCE_TYPE=$(echo "$SOURCE_DETAILS" | jq -r '.[0].type')
            ;;
        vultr)
            SOURCE_DETAILS=$(vultr instance get "$SOURCE_INSTANCE" --full)
            SOURCE_IP=$(echo "$SOURCE_DETAILS" | jq -r '.main_ip')
            SOURCE_IMAGE=$(echo "$SOURCE_DETAILS" | jq -r '.os')
            SOURCE_TYPE=$(echo "$SOURCE_DETAILS" | jq -r '.plan')
            ;;
        *)
            log "ERROR" "Unsupported source provider: $SOURCE_PROVIDER"
            exit 1
            ;;
    esac
    
    log "INFO" "Source instance details:"
    log "INFO" "  IP: $SOURCE_IP"
    log "INFO" "  Image: $SOURCE_IMAGE"
    log "INFO" "  Type: $SOURCE_TYPE"
}

# Function to create target instance
function create_target_instance() {
    log "INFO" "Creating target instance on $TARGET_PROVIDER in $TARGET_REGION..."
    
    # Generate a unique name for the target instance
    TARGET_INSTANCE="recovery-$(date +%Y%m%d-%H%M%S)"
    
    case "$TARGET_PROVIDER" in
        hetzner)
            # Find equivalent instance type
            case "$SOURCE_PROVIDER" in
                hetzner)
                    TARGET_TYPE="$SOURCE_TYPE"
                    ;;
                digitalocean)
                    # Map DigitalOcean sizes to Hetzner types
                    case "$SOURCE_TYPE" in
                        s-1vcpu-1gb) TARGET_TYPE="cx11" ;;
                        s-1vcpu-2gb) TARGET_TYPE="cx21" ;;
                        s-2vcpu-2gb) TARGET_TYPE="cx21" ;;
                        s-2vcpu-4gb) TARGET_TYPE="cx31" ;;
                        s-4vcpu-8gb) TARGET_TYPE="cx41" ;;
                        *) TARGET_TYPE="cx31" ;;  # Default fallback
                    esac
                    ;;
                linode)
                    # Map Linode types to Hetzner types
                    case "$SOURCE_TYPE" in
                        g6-nanode-1) TARGET_TYPE="cx11" ;;
                        g6-standard-1) TARGET_TYPE="cx21" ;;
                        g6-standard-2) TARGET_TYPE="cx31" ;;
                        g6-standard-4) TARGET_TYPE="cx41" ;;
                        *) TARGET_TYPE="cx31" ;;  # Default fallback
                    esac
                    ;;
                vultr)
                    # Map Vultr plans to Hetzner types
                    case "$SOURCE_TYPE" in
                        vc2-1c-1gb) TARGET_TYPE="cx11" ;;
                        vc2-1c-2gb) TARGET_TYPE="cx21" ;;
                        vc2-2c-4gb) TARGET_TYPE="cx31" ;;
                        vc2-4c-8gb) TARGET_TYPE="cx41" ;;
                        *) TARGET_TYPE="cx31" ;;  # Default fallback
                    esac
                    ;;
            esac
            
            # Create the server
            RESULT=$(hcloud server create \
                --name "$TARGET_INSTANCE" \
                --type "$TARGET_TYPE" \
                --image ubuntu-20.04 \
                --ssh-key recovery \
                --location "$TARGET_REGION" \
                --output json)
            
            TARGET_IP=$(echo "$RESULT" | jq -r '.server.public_net.ipv4.ip')
            ;;
            
        digitalocean)
            # Find equivalent instance type
            case "$SOURCE_PROVIDER" in
                hetzner)
                    # Map Hetzner types to DigitalOcean sizes
                    case "$SOURCE_TYPE" in
                        cx11) TARGET_TYPE="s-1vcpu-1gb" ;;
                        cx21) TARGET_TYPE="s-1vcpu-2gb" ;;
                        cx31) TARGET_TYPE="s-2vcpu-4gb" ;;
                        cx41) TARGET_TYPE="s-4vcpu-8gb" ;;
                        *) TARGET_TYPE="s-2vcpu-4gb" ;;  # Default fallback
                    esac
                    ;;
                digitalocean)
                    TARGET_TYPE="$SOURCE_TYPE"
                    ;;
                linode)
                    # Map Linode types to DigitalOcean sizes
                    case "$SOURCE_TYPE" in
                        g6-nanode-1) TARGET_TYPE="s-1vcpu-1gb" ;;
                        g6-standard-1) TARGET_TYPE="s-1vcpu-2gb" ;;
                        g6-standard-2) TARGET_TYPE="s-2vcpu-4gb" ;;
                        g6-standard-4) TARGET_TYPE="s-4vcpu-8gb" ;;
                        *) TARGET_TYPE="s-2vcpu-4gb" ;;  # Default fallback
                    esac
                    ;;
                vultr)
                    # Map Vultr plans to DigitalOcean sizes
                    case "$SOURCE_TYPE" in
                        vc2-1c-1gb) TARGET_TYPE="s-1vcpu-1gb" ;;
                        vc2-1c-2gb) TARGET_TYPE="s-1vcpu-2gb" ;;
                        vc2-2c-4gb) TARGET_TYPE="s-2vcpu-4gb" ;;
                        vc2-4c-8gb) TARGET_TYPE="s-4vcpu-8gb" ;;
                        *) TARGET_TYPE="s-2vcpu-4gb" ;;  # Default fallback
                    esac
                    ;;
            esac
            
            # Create the droplet
            RESULT=$(doctl compute droplet create \
                "$TARGET_INSTANCE" \
                --region "$TARGET_REGION" \
                --image ubuntu-20-04-x64 \
                --size "$TARGET_TYPE" \
                --ssh-keys recovery \
                --output json)
            
            TARGET_IP=$(echo "$RESULT" | jq -r '.[0].networks.v4[] | select(.type=="public") | .ip_address')
            ;;
            
        linode)
            # Find equivalent instance type
            case "$SOURCE_PROVIDER" in
                hetzner)
                    # Map Hetzner types to Linode types
                    case "$SOURCE_TYPE" in
                        cx11) TARGET_TYPE="g6-nanode-1" ;;
                        cx21) TARGET_TYPE="g6-standard-1" ;;
                        cx31) TARGET_TYPE="g6-standard-2" ;;
                        cx41) TARGET_TYPE="g6-standard-4" ;;
                        *) TARGET_TYPE="g6-standard-2" ;;  # Default fallback
                    esac
                    ;;
                digitalocean)
                    # Map DigitalOcean sizes to Linode types
                    case "$SOURCE_TYPE" in
                        s-1vcpu-1gb) TARGET_TYPE="g6-nanode-1" ;;
                        s-1vcpu-2gb) TARGET_TYPE="g6-standard-1" ;;
                        s-2vcpu-2gb) TARGET_TYPE="g6-standard-1" ;;
                        s-2vcpu-4gb) TARGET_TYPE="g6-standard-2" ;;
                        s-4vcpu-8gb) TARGET_TYPE="g6-standard-4" ;;
                        *) TARGET_TYPE="g6-standard-2" ;;  # Default fallback
                    esac
                    ;;
                linode)
                    TARGET_TYPE="$SOURCE_TYPE"
                    ;;
                vultr)
                    # Map Vultr plans to Linode types
                    case "$SOURCE_TYPE" in
                        vc2-1c-1gb) TARGET_TYPE="g6-nanode-1" ;;
                        vc2-1c-2gb) TARGET_TYPE="g6-standard-1" ;;
                        vc2-2c-4gb) TARGET_TYPE="g6-standard-2" ;;
                        vc2-4c-8gb) TARGET_TYPE="g6-standard-4" ;;
                        *) TARGET_TYPE="g6-standard-2" ;;  # Default fallback
                    esac
                    ;;
            esac
            
            # Create the Linode
            RESULT=$(linode-cli linodes create \
                --type "$TARGET_TYPE" \
                --region "$TARGET_REGION" \
                --image linode/ubuntu20.04 \
                --label "$TARGET_INSTANCE" \
                --authorized_keys "$(cat ~/.ssh/recovery.pub)" \
                --json)
            
            TARGET_IP=$(echo "$RESULT" | jq -r '.[0].ipv4[0]')
            ;;
            
        vultr)
            # Find equivalent instance type
            case "$SOURCE_PROVIDER" in
                hetzner)
                    # Map Hetzner types to Vultr plans
                    case "$SOURCE_TYPE" in
                        cx11) TARGET_TYPE="vc2-1c-1gb" ;;
                        cx21) TARGET_TYPE="vc2-1c-2gb" ;;
                        cx31) TARGET_TYPE="vc2-2c-4gb" ;;
                        cx41) TARGET_TYPE="vc2-4c-8gb" ;;
                        *) TARGET_TYPE="vc2-2c-4gb" ;;  # Default fallback
                    esac
                    ;;
                digitalocean)
                    # Map DigitalOcean sizes to Vultr plans
                    case "$SOURCE_TYPE" in
                        s-1vcpu-1gb) TARGET_TYPE="vc2-1c-1gb" ;;
                        s-1vcpu-2gb) TARGET_TYPE="vc2-1c-2gb" ;;
                        s-2vcpu-2gb) TARGET_TYPE="vc2-2c-4gb" ;;
                        s-2vcpu-4gb) TARGET_TYPE="vc2-2c-4gb" ;;
                        s-4vcpu-8gb) TARGET_TYPE="vc2-4c-8gb" ;;
                        *) TARGET_TYPE="vc2-2c-4gb" ;;  # Default fallback
                    esac
                    ;;
                linode)
                    # Map Linode types to Vultr plans
                    case "$SOURCE_TYPE" in
                        g6-nanode-1) TARGET_TYPE="vc2-1c-1gb" ;;
                        g6-standard-1) TARGET_TYPE="vc2-1c-2gb" ;;
                        g6-standard-2) TARGET_TYPE="vc2-2c-4gb" ;;
                        g6-standard-4) TARGET_TYPE="vc2-4c-8gb" ;;
                        *) TARGET_TYPE="vc2-2c-4gb" ;;  # Default fallback
                    esac
                    ;;
                vultr)
                    TARGET_TYPE="$SOURCE_TYPE"
                    ;;
            esac
            
            # Create the instance
            RESULT=$(vultr instance create \
                --region="$TARGET_REGION" \
                --plan="$TARGET_TYPE" \
                --os="Ubuntu 20.04 x64" \
                --label="$TARGET_INSTANCE" \
                --sshkey="recovery" \
                --output=json)
            
            TARGET_IP=$(echo "$RESULT" | jq -r '.instance.main_ip')
            ;;
            
        *)
            log "ERROR" "Unsupported target provider: $TARGET_PROVIDER"
            exit 1
            ;;
    esac
    
    log "INFO" "Target instance created:"
    log "INFO" "  Name: $TARGET_INSTANCE"
    log "INFO" "  IP: $TARGET_IP"
    log "INFO" "  Type: $TARGET_TYPE"
    
    # Wait for SSH to become available
    log "INFO" "Waiting for SSH to become available on target instance..."
    for i in {1..30}; do
        if ssh -o StrictHostKeyChecking=no -o ConnectTimeout=5 -i ~/.ssh/recovery root@"$TARGET_IP" echo "SSH is up" &> /dev/null; then
            log "INFO" "SSH is now available on target instance."
            break
        fi
        
        if [ $i -eq 30 ]; then
            log "ERROR" "Timed out waiting for SSH to become available."
            exit 1
        fi
        
        log "INFO" "Still waiting for SSH... (attempt $i/30)"
        sleep 10
    done
}

# Function to install Docker and Docker Compose on target
function install_docker() {
    log "INFO" "Installing Docker and Docker Compose on target instance..."
    
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$TARGET_IP" << 'EOF'
    # Update package lists
    apt-get update
    
    # Install prerequisites
    apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    
    # Add Docker's official GPG key
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
    
    # Add Docker repository
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    
    # Install Docker
    apt-get update
    apt-get install -y docker-ce docker-ce-cli containerd.io
    
    # Install Docker Compose
    curl -L "https://github.com/docker/compose/releases/download/v2.20.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    
    # Verify installations
    docker --version
    docker-compose --version
    
    # Create docker network
    docker network create microservices-network
EOF
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Failed to install Docker on target instance."
        exit 1
    fi
    
    log "INFO" "Docker and Docker Compose installed successfully."
}

# Function to transfer configuration files
function transfer_config_files() {
    log "INFO" "Transferring configuration files to target instance..."
    
    # Create directory structure on target
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$TARGET_IP" "mkdir -p /root/microservices"
    
    # Transfer configuration files
    scp -o StrictHostKeyChecking=no -i ~/.ssh/recovery -r \
        root@"$SOURCE_IP":/root/microservices/docker-compose.yml \
        root@"$SOURCE_IP":/root/microservices/.env \
        root@"$TARGET_IP":/root/microservices/
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Failed to transfer configuration files."
        exit 1
    fi
    
    log "INFO" "Configuration files transferred successfully."
}

# Function to backup and transfer database data
function backup_and_transfer_database() {
    log "INFO" "Backing up and transferring database data..."
    
    # Create backup directory on source
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$SOURCE_IP" << 'EOF'
    mkdir -p /tmp/db_backup
    cd /root/microservices
    
    # Stop services that might be using the database
    docker-compose stop api-gateway auth-service ghost-service mautic-service
    
    # Backup PostgreSQL databases
    docker-compose exec -T database-service pg_dumpall -c -U postgres > /tmp/db_backup/all_databases.sql
    
    # Restart services
    docker-compose start api-gateway auth-service ghost-service mautic-service
    
    # Compress backup
    tar -czf /tmp/db_backup.tar.gz -C /tmp db_backup
EOF
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Failed to create database backup on source instance."
        exit 1
    fi
    
    # Transfer backup to target
    scp -o StrictHostKeyChecking=no -i ~/.ssh/recovery \
        root@"$SOURCE_IP":/tmp/db_backup.tar.gz \
        root@"$TARGET_IP":/tmp/
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Failed to transfer database backup to target instance."
        exit 1
    fi
    
    # Restore backup on target
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$TARGET_IP" << 'EOF'
    mkdir -p /tmp/db_backup
    tar -xzf /tmp/db_backup.tar.gz -C /tmp
    
    # We'll restore this later after starting the database container
EOF
    
    log "INFO" "Database backup and transfer completed successfully."
}

# Function to backup and transfer service data
function backup_and_transfer_service_data() {
    log "INFO" "Backing up and transferring service data..."
    
    # Create backup directory on source
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$SOURCE_IP" << 'EOF'
    mkdir -p /tmp/service_backup
    
    # Backup Ghost content
    docker cp $(docker-compose ps -q ghost-service):/var/lib/ghost/content /tmp/service_backup/ghost_content
    
    # Backup Mautic data
    docker cp $(docker-compose ps -q mautic-service):/var/www/html /tmp/service_backup/mautic_data
    
    # Compress backup
    tar -czf /tmp/service_backup.tar.gz -C /tmp service_backup
EOF
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Failed to create service data backup on source instance."
        exit 1
    fi
    
    # Transfer backup to target
    scp -o StrictHostKeyChecking=no -i ~/.ssh/recovery \
        root@"$SOURCE_IP":/tmp/service_backup.tar.gz \
        root@"$TARGET_IP":/tmp/
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Failed to transfer service data backup to target instance."
        exit 1
    fi
    
    # Extract backup on target
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$TARGET_IP" << 'EOF'
    mkdir -p /tmp/service_backup
    tar -xzf /tmp/service_backup.tar.gz -C /tmp
    
    # We'll restore this later after starting the services
EOF
    
    log "INFO" "Service data backup and transfer completed successfully."
}

# Function to start services on target
function start_services() {
    log "INFO" "Starting services on target instance..."
    
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$TARGET_IP" << 'EOF'
    cd /root/microservices
    
    # Start database service first
    docker-compose up -d database-service
    
    # Wait for database to be ready
    echo "Waiting for database to be ready..."
    sleep 30
    
    # Restore database
    cat /tmp/db_backup/all_databases.sql | docker-compose exec -T database-service psql -U postgres
    
    # Start remaining services
    docker-compose up -d
    
    # Restore Ghost content
    docker cp /tmp/service_backup/ghost_content/. $(docker-compose ps -q ghost-service):/var/lib/ghost/content
    
    # Restore Mautic data
    docker cp /tmp/service_backup/mautic_data/. $(docker-compose ps -q mautic-service):/var/www/html
    
    # Restart services to apply restored data
    docker-compose restart ghost-service mautic-service
EOF
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Failed to start services on target instance."
        exit 1
    fi
    
    log "INFO" "Services started successfully on target instance."
}

# Function to verify services
function verify_services() {
    log "INFO" "Verifying services on target instance..."
    
    ssh -o StrictHostKeyChecking=no -i ~/.ssh/recovery root@"$TARGET_IP" << 'EOF'
    cd /root/microservices
    
    # Check if all containers are running
    CONTAINERS=$(docker-compose ps -q | wc -l)
    if [ "$CONTAINERS" -lt 5 ]; then
        echo "ERROR: Not all containers are running."
        docker-compose ps
        exit 1
    fi
    
    # Check API Gateway health
    if ! curl -s http://localhost:3000/health | grep -q "ok"; then
        echo "ERROR: API Gateway health check failed."
        exit 1
    fi
    
    # Check Auth Service health
    if ! curl -s http://localhost:3001/health | grep -q "ok"; then
        echo "ERROR: Auth Service health check failed."
        exit 1
    fi
    
    # Check Ghost CMS
    if ! curl -s http://localhost:2368/ghost/api/v3/admin/site/ | grep -q "site"; then
        echo "ERROR: Ghost CMS health check failed."
        exit 1
    fi
    
    # Check Mautic
    if ! curl -s http://localhost:8000/ | grep -q "Mautic"; then
        echo "ERROR: Mautic health check failed."
        exit 1
    fi
    
    echo "All services verified successfully."
EOF
    
    if [ $? -ne 0 ]; then
        log "ERROR" "Service verification failed."
        exit 1
    fi
    
    log "INFO" "All services verified successfully on target instance."
}

# Function to update DNS records
function update_dns() {
    log "INFO" "Updating DNS records to point to new instance..."
    
    case "$DNS_PROVIDER" in
        cloudflare)
            # Update DNS records using Cloudflare API
            log "INFO" "Updating DNS records using Cloudflare API..."
            
            # Get zone ID
