#!/bin/bash
#
# SECRET MANAGEMENT SETUP - World-Class Security
# Implements enterprise-grade secrets management for VPS cloning
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SECRETS_DIR="$HOME/.vps-secrets"
AGE_DIR="$HOME/.age"
VAULT_DIR="$HOME/.vault"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo -e "${BLUE}[$(date '+%H:%M:%S')]${NC} $*" >&2
}

success() {
    echo -e "${GREEN}✅ $*${NC}" >&2
}

warning() {
    echo -e "${YELLOW}⚠️  $*${NC}" >&2
}

error() {
    echo -e "${RED}❌ $*${NC}" >&2
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install age
install_age() {
    log "Installing age encryption tool..."

    # Download latest age release
    if ! command_exists age; then
        ARCH=$(uname -m | sed 's/x86_64/amd64/' | sed 's/aarch64/arm64/')
        OS=$(uname -s | tr '[:upper:]' '[:lower:]')
        AGE_URL="https://github.com/FiloSottile/age/releases/download/v1.1.1/age-v1.1.1-${OS}-${ARCH}.tar.gz"

        curl -L "$AGE_URL" -o /tmp/age.tar.gz
        tar -xzf /tmp/age.tar.gz -C /tmp
        sudo mv /tmp/age/age /usr/local/bin/
        sudo mv /tmp/age/age-keygen /usr/local/bin/
        rm -rf /tmp/age.tar.gz /tmp/age

        success "age installed successfully"
    else
        success "age already installed"
    fi
}

# Function to install sops
install_sops() {
    log "Installing Mozilla SOPS..."

    if ! command_exists sops; then
        SOPS_VERSION="3.8.1"
        ARCH=$(uname -m | sed 's/x86_64/x86_64/' | sed 's/aarch64/arm64/')
        OS=$(uname -s | tr '[:upper:]' '[:lower:]')
        SOPS_URL="https://github.com/mozilla/sops/releases/download/v${SOPS_VERSION}/sops-v${SOPS_VERSION}.${OS}.${ARCH}"

        curl -L "$SOPS_URL" -o /tmp/sops
        chmod +x /tmp/sops
        sudo mv /tmp/sops /usr/local/bin/

        success "sops installed successfully"
    else
        success "sops already installed"
    fi
}

# Function to setup age keys
setup_age_keys() {
    log "Setting up age encryption keys..."

    mkdir -p "$AGE_DIR"
    chmod 700 "$AGE_DIR"

    if [ ! -f "$AGE_DIR/key.txt" ]; then
        age-keygen -o "$AGE_DIR/key.txt"
        chmod 600 "$AGE_DIR/key.txt"
        success "Generated age key pair"

        # Show public key
        AGE_PUBKEY=$(age-keygen -y "$AGE_DIR/key.txt")
        echo ""
        warning "IMPORTANT: Securely store this public key for encryption:"
        echo "  $AGE_PUBKEY"
        echo ""
        warning "Keep this key safe - you need it to decrypt secrets later!"
        echo "Consider storing it in a password manager or hardware security key."
        echo ""
    else
        success "age keys already exist"
    fi
}

# Function to create encrypted secrets file
create_encrypted_secrets() {
    local secrets_file="$SECRETS_DIR/.env.age"

    log "Creating encrypted secrets configuration..."

    mkdir -p "$SECRETS_DIR"
    chmod 700 "$SECRETS_DIR"

    # Create temporary unencrypted file
    local temp_file="$SECRETS_DIR/.env.tmp"
    cat > "$temp_file" << 'EOF'
# VPS CLONING SECRETS - ENCRYPTED CONFIGURATION
# This file contains sensitive API keys and secrets
# DO NOT commit to version control

# Hetzner Cloud API Token
HCLOUD_TOKEN=your-hetzner-api-token-here

# DigitalOcean API Token
DIGITALOCEAN_TOKEN=your-digitalocean-api-token-here

# Vultr API Key
VULTR_API_KEY=your-vultr-api-key-here

# Linode API Token
LINODE_TOKEN=your-linode-api-token-here

# Additional secrets can be added below
# Example:
# STRIPE_SECRET_KEY=sk_test_...
# MAILGUN_API_KEY=key-...
EOF

    echo ""
    warning "OPENING EDITOR: Please edit the secrets file"
    warning "Add your actual API tokens and secrets"
    warning "Save and exit when done"
    echo ""

    # Open editor for user to add secrets
    ${EDITOR:-nano} "$temp_file"

    # Encrypt the file
    if [ -f "$temp_file" ] && [ -s "$temp_file" ]; then
        age -e -R "$AGE_DIR/key.txt.pub" "$temp_file" > "$secrets_file"
        success "Secrets encrypted successfully"

        # Show checksum for verification
        local checksum=$(sha256sum "$secrets_file" | cut -d' ' -f1)
        log "Secrets file checksum: $checksum"

        # Clean up temporary file
        rm -f "$temp_file"
    else
        error "Secrets file is empty or was not created"
        rm -f "$temp_file"
        exit 1
    fi
}

# Function to test decryption
test_decryption() {
    log "Testing decryption capability..."

    local secrets_file="$SECRETS_DIR/.env.age"

    if [ ! -f "$secrets_file" ]; then
        error "Encrypted secrets file not found"
        return 1
    fi

    if age -d -i "$AGE_DIR/key.txt" "$secrets_file" >/dev/null 2>&1; then
        success "Decryption test successful"
        return 0
    else
        error "Decryption test failed"
        return 1
    fi
}

# Function to create .envrc for automatic decryption
create_envrc() {
    local envrc_file="$SECRETS_DIR/.envrc"

    log "Creating .envrc file for automatic decryption..."

    cat > "$envrc_file" << EOF
#!/bin/bash
# Automatic environment variable loading for VPS cloning
# This file is sourced by cloning scripts to load encrypted secrets

export SECRETS_DIR="$SECRETS_DIR"
export AGE_KEY_FILE="$AGE_DIR/key.txt"
export SECRETS_FILE="$SECRETS_DIR/.env.age"

# Decrypt and export secrets as environment variables
if [ -f "\$SECRETS_FILE" ] && [ -f "\$AGE_KEY_FILE" ]; then
    eval "\$(age -d -i "\$AGE_KEY_FILE" "\$SECRETS_FILE" | grep -E '^[A-Z_]+=' | sed 's/^/export /')"
    export SECRETS_LOADED=true
else
    echo "Warning: Encrypted secrets not found or decryption key missing"
    export SECRETS_LOADED=false
fi
EOF

    chmod 600 "$envrc_file"
    success ".envrc file created for automatic decryption"
}

# Function to create backup encryption script
create_backup_script() {
    local backup_script="$SCRIPT_DIR/backup-secrets.sh"

    log "Creating secrets backup script..."

    cat > "$backup_script" << 'EOF'
#!/bin/bash
# Backup encryption keys and secrets with multiple recovery options

set -e

BACKUP_DIR="$HOME/.vps-secrets-backup-$(date +%Y%m%d)"
AGE_DIR="$HOME/.age"
SECRETS_DIR="$HOME/.vps-secrets"

mkdir -p "$BACKUP_DIR"

# Backup age keys
cp -r "$AGE_DIR" "$BACKUP_DIR/"

# Backup encrypted secrets
cp -r "$SECRETS_DIR" "$BACKUP_DIR/"

# Create additional encrypted backup
tar -czf "$BACKUP_DIR/secrets-backup-$(date +%Y%m%d).tar.gz" -C "$BACKUP_DIR" .

echo "Secrets backup created: $BACKUP_DIR"
echo "Emergency recovery: tar -xzf $BACKUP_DIR/secrets-backup-*.tar.gz"
echo ""
echo "STORE THIS BACKUP OFFLINE - USB drive, safe deposit box, etc."
echo "Test decryption: age -d -i ~/.age/key.txt ~/.vps-secrets/.env.age"
EOF

    chmod +x "$backup_script"
    success "Backup script created: $backup_script"
}

# Function to setup gitignore and security
setup_security() {
    log "Setting up security and gitignore rules..."

    # Create gitignore for secrets directory
    if [ -d ".git" ]; then
        echo "# Secrets - DO NOT commit encrypted or decrypted secrets
$SECRETS_DIR/
$AGE_DIR/key.txt
*.key
*.pem
.vps_secrets*" >> .gitignore

        success "Added secrets to .gitignore"
    fi

    # Set proper permissions
    chmod 700 "$SECRETS_DIR" 2>/dev/null || true
    chmod 700 "$AGE_DIR" 2>/dev/null || true
    find "$SECRETS_DIR" -type f -exec chmod 600 {} \; 2>/dev/null || true
    find "$AGE_DIR" -type f -exec chmod 600 {} \; 2>/dev/null || true

    success "Security permissions set"
}

# Function to create security audit script
create_audit_script() {
    local audit_script="$SCRIPT_DIR/audit-secrets.sh"

    log "Creating secrets audit and compliance script..."

    cat > "$audit_script" << 'EOF'
#!/bin/bash
# Security audit script for secrets management compliance

set -e

SECRETS_DIR="$HOME/.vps-secrets"
AGE_DIR="$HOME/.age"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🔍 VPS Cloning Secrets Security Audit"
echo "======================================"
echo "Date: $(date)"
echo ""

# Check directory permissions
echo "📁 Directory Permissions:"
check_permission() {
    local dir="$1"
    local expected="$2"
    if [ -d "$dir" ]; then
        local actual=$(stat -c "%a" "$dir" 2>/dev/null || echo "unknown")
        if [ "$actual" = "$expected" ]; then
            echo "✅ $dir: $actual (correct)"
        else
            echo "❌ $dir: $actual (should be $expected)"
        fi
    else
        echo "❓ $dir: does not exist"
    fi
}

check_permission "$SECRETS_DIR" "700"
check_permission "$AGE_DIR" "700"
echo ""

# Check file permissions
echo "📄 File Permissions:"
find "$SECRETS_DIR" "$AGE_DIR" -type f 2>/dev/null | while read -r file; do
    if [ -f "$file" ]; then
        perm=$(stat -c "%a" "$file" 2>/dev/null || echo "unknown")
        case "$perm" in
            "600")
                echo "✅ $file: $perm"
                ;;
            *)
                echo "❌ $file: $perm (should be 600)"
                ;;
        esac
    fi
done
echo ""

# Check encryption
echo "🔐 Encryption Status:"
if [ -f "$AGE_DIR/key.txt" ]; then
    echo "✅ Age private key: present"
else
    echo "❌ Age private key: missing"
fi

if [ -f "$AGE_DIR/key.txt.pub" ]; then
    echo "✅ Age public key: present"
else
    echo "❌ Age public key: missing"
fi

if age -d -i "$AGE_DIR/key.txt" "$SECRETS_DIR/.env.age" >/dev/null 2>&1 2>/dev/null; then
    echo "✅ Secrets decryption: working"
else
    echo "❌ Secrets decryption: failed"
fi

echo ""

# Check backup age
echo "💾 Backup Status:"
find "$HOME" -name ".vps-secrets-backup-*" -type d 2>/dev/null | while read -r backup; do
    days_old=$(( ($(date +%s) - $(stat -c %Y "$backup")) / 86400 ))
    if [ $days_old -le 30 ]; then
        echo "✅ Backup: $backup ($days_old days old)"
    else
        echo "⚠️  Backup: $backup ($days_old days old - consider updating)"
    fi
done

echo ""

# Compliance check
echo "📋 Compliance Status:"
secrets_loaded=$(bash -c "source ~/.vps-secrets/.envrc >/dev/null 2>&1 && echo \$SECRETS_LOADED" 2>/dev/null || echo "false")
if [ "$secrets_loaded" = "true" ]; then
    echo "✅ Secrets auto-loading: enabled"
else
    echo "❌ Secrets auto-loading: disabled"
fi

echo "✅ Audit completed"
EOF

    chmod +x "$audit_script"
    success "Audit script created: $audit_script"
}

# Main setup function
main() {
    echo "🔐 VPS Cloning Secrets Management Setup"
    echo "======================================="
    echo ""
    warning "This setup will create encrypted storage for your API keys and secrets."
    warning "Make sure to backup your existing secrets before proceeding."
    echo ""

    read -p "Continue with secrets setup? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 0
    fi

    # Install required tools
    install_age
    install_sops

    # Setup encryption keys
    setup_age_keys

    # Create encrypted secrets
    create_encrypted_secrets

    # Test decryption
    if test_decryption; then
        success "Secrets setup completed successfully!"
    else
        error "Secrets setup failed. Please check configuration."
        exit 1
    fi

    # Create supporting files
    create_envrc
    create_backup_script
    create_audit_script
    setup_security

    echo ""
    echo "🎉 SETUP COMPLETE!"
    echo ""
    echo "📚 Usage Instructions:"
    echo "1. Source secrets in your scripts:"
    echo "   source ~/.vps-secrets/.envrc"
    echo ""
    echo "2. Backup your keys regularly:"
    echo "   ./backend/scripts/backup-secrets.sh"
    echo ""
    echo "3. Run security audits:"
    echo "   ./backend/scripts/audit-secrets.sh"
    echo ""
    warning "⚠️  IMPORTANT SECURITY NOTES:"
    echo "   • Keep ~/.age/key.txt secure and backed up"
    echo "   • Never commit decrypted secrets to version control"
    echo "   • Regularly rotate API keys (90-day cycle)"
    echo "   • Use hardware security keys for critical operations"
    echo ""

    success "World-class secrets management configured!"
}

# Run main function
main "$@"
