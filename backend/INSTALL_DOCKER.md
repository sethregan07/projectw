# Installing Docker Desktop on macOS

## System Requirements
- macOS version 11.0 or newer (Big Sur or newer)
- At least 4GB of RAM
- VirtualBox not running (will conflict with Docker's hypervisor)

## Installation Steps

1. Download Docker Desktop
   - Visit https://www.docker.com/products/docker-desktop
   - Click "Download for Mac"
   - Choose the correct chip version:
     * For Apple Silicon (M1/M2): Download "Apple Chip" version
     * For Intel: Download "Intel Chip" version

2. Install Docker Desktop
   - Open the downloaded .dmg file
   - Drag Docker.app to your Applications folder
   - Double-click Docker.app in Applications to start Docker Desktop

3. First-Time Setup
   - Docker icon will appear in the menu bar (top-right)
   - Wait for "Docker Desktop is running" message
   - Accept the terms and conditions if prompted

4. Verify Installation
   Open Terminal and run:
   ```bash
   docker --version
   docker compose version
   ```

5. Start Our Services
   ```bash
   cd backend
   cp .env.example .env
   docker compose up -d
   ```

6. Test Endpoints
   ```bash
   # Wait about 30 seconds for services to start
   curl -I http://localhost:2368
   curl -I http://localhost:8080
   ```

## Troubleshooting

If services don't start:
1. Check Docker Desktop is running (menu bar icon should be active)
2. Open Docker Desktop dashboard to see container status
3. View logs in Terminal:
   ```bash
   cd backend
   docker compose logs
   ```

If ports are in use:
1. Check if other services are using ports 2368 or 8080
2. Stop conflicting services or modify ports in docker-compose.yml

## Uninstalling Docker Desktop
If needed:
1. Open Docker Desktop
2. Click on the gear icon (Preferences)
3. Click "Uninstall" at the bottom
4. Follow the uninstallation prompts

## Additional Resources
- Docker Desktop Manual: https://docs.docker.com/desktop/mac/
- Docker Compose Guide: https://docs.docker.com/compose/
- Docker Desktop Troubleshooting: https://docs.docker.com/desktop/mac/troubleshoot/