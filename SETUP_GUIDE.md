# Privacy-Focused Microservices Setup Guide

## Prerequisites

### Required Software
1. Rust (latest stable version)
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. Docker & Docker Compose
   - macOS/Windows: Docker Desktop
   - Linux: 
     ```bash
     # Install Docker
     curl -fsSL https://get.docker.com -o get-docker.sh
     sudo sh get-docker.sh

     # Install Docker Compose
     sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
     sudo chmod +x /usr/local/bin/docker-compose
     ```

3. Additional Dependencies
   ```bash
   # Rust dependencies
   rustup component add rustfmt clippy
   
   # Cryptography libraries
   sudo apt-get update
   sudo apt-get install -y libssl-dev pkg-config
   ```

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/privacy-microservices.git
cd privacy-microservices
```

### 2. Rust Project Initialization
```bash
# Create Rust workspace
mkdir -p src/bin
touch Cargo.toml
```

### 3. Cargo.toml Configuration
```toml
[workspace]
members = [
    "blockchain",
    "identity",
    "network",
]

[workspace.dependencies]
# Cryptography
ed25519-dalek = "2.0"
x25519-dalek = "2.0"
aes-gcm = "0.10"
sha3 = "0.10"

# Networking
tokio = { version = "1", features = ["full"] }
hyper = "0.14"

# Serialization
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

# Utilities
rand = "0.8"
```

### 4. Build Rust Components
```bash
# Build all components
cargo build --release

# Run tests
cargo test
```

### 5. Docker Composition
```bash
# Build Docker images
docker-compose -f backend/microservices/docker-compose.yml build

# Start services
docker-compose -f backend/microservices/docker-compose.yml up -d
```

### 6. VPS Disaster Recovery Script Setup
```bash
# Make script executable
chmod +x backend/scripts/vps_disaster_recovery.sh

# Generate encryption key
gpg --gen-key
```

## Configuration & Security

### Environment Variables
Create a `.env` file with:
```
# Encryption and Security
ENCRYPTION_KEY=your_secure_random_key
JWT_SECRET=another_secure_random_key

# Database Credentials
POSTGRES_USER=secureuser
POSTGRES_PASSWORD=very_strong_password

# Network Configuration
ALLOWED_PEERS=peer1_public_key,peer2_public_key
```

### Key Generation
```bash
# Generate cryptographic keys
cargo run --bin key_generator
```

## Running Components

### Start Blockchain Node
```bash
cargo run --bin privacy_node
```

### Start Identity Service
```bash
cargo run --bin decentralized_identity
```

### Start Encrypted Communication
```bash
cargo run --bin encrypted_communication
```

## Monitoring & Logs
```bash
# View Docker logs
docker-compose logs -f

# Monitor system resources
docker stats
```

## Backup & Recovery
```bash
# Create backup
./backend/scripts/vps_disaster_recovery.sh backup /path/to/backup

# Clone VPS
./backend/scripts/vps_disaster_recovery.sh clone source_host target_host
```

## Security Recommendations
1. Use a hardware security module (HSM)
2. Regularly rotate encryption keys
3. Keep all systems updated
4. Use VPN for additional network security
5. Implement multi-factor authentication

## Troubleshooting
- Check Docker logs for service-specific issues
- Verify network configurations
- Ensure all dependencies are installed
- Check firewall and port configurations

## Performance Tuning
- Adjust Docker resource limits in `docker-compose.yml`
- Monitor system resources
- Use caching mechanisms
- Optimize Rust compilation flags