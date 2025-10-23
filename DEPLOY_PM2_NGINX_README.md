# PM2 + Nginx Deployment Guide

This guide explains how to deploy your Next.js application using PM2 for process management and Nginx as a reverse proxy, all running on the same IP address.

## 🚀 Quick Deployment

1. **Update the VPS IP** in `deploy-pm2-nginx.sh`:
   ```bash
   VPS_IP="YOUR_ACTUAL_VPS_IP"
   ```

2. **Run the deployment** from your local machine:
   ```bash
   ./deploy-to-vps.sh
   ```

## 📋 What This Setup Does

### PM2 Configuration
- **Process Management**: Runs 2 instances of your Next.js app for load balancing
- **Auto-restart**: Automatically restarts on crashes
- **Memory limits**: Restarts if memory usage exceeds 1GB
- **Cluster mode**: Better performance with multiple CPU cores
- **Boot persistence**: PM2 starts automatically on server reboot

### Nginx Configuration
- **Reverse Proxy**: Forwards requests from port 80 to your PM2 app on port 5000
- **Security Headers**: Adds security headers to protect against common attacks
- **Gzip Compression**: Compresses responses for faster loading
- **Static File Caching**: Caches static assets for 1 year
- **Health Check**: `/health` endpoint for monitoring

## 🏗️ Architecture

```
Internet → Nginx (Port 80) → PM2 (Port 5000) → Next.js App (2 instances)
```

## 📁 File Structure

```
your-project/
├── ecosystem.config.js          # PM2 configuration
├── nginx/
│   └── app.conf                 # Nginx configuration
├── deploy-pm2-nginx.sh          # Deployment script
└── deploy-to-vps.sh             # Local deployment script
```

## 🛠️ Manual Deployment (Alternative)

If you prefer manual deployment:

1. **SSH into your VPS**:
   ```bash
   ssh root@YOUR_VPS_IP
   ```

2. **Run the deployment script**:
   ```bash
   export VPS_IP=YOUR_VPS_IP
   ./deploy-pm2-nginx.sh
   ```

## 📊 Monitoring

### Check Application Status
```bash
# PM2 status
pm2 list
pm2 monit

# Nginx status
systemctl status nginx

# Check if app is responding
curl http://localhost/health
```

### View Logs
```bash
# PM2 logs
pm2 logs

# Nginx logs
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

## 🔧 Management Commands

### Restart Application
```bash
pm2 restart nextjs-app
```

### Stop Application
```bash
pm2 stop nextjs-app
pm2 delete nextjs-app
```

### Restart Nginx
```bash
systemctl restart nginx
```

### Update Application
```bash
# Navigate to app directory
cd /var/www/nextjs-app

# Pull latest changes (if using git)
git pull

# Or manually update files, then:
npm run build
pm2 restart nextjs-app
```

## 🔒 Security Considerations

- Nginx adds security headers automatically
- The app runs on port 80 (needs root, handled by PM2)
- Consider adding SSL/HTTPS with Let's Encrypt:
  ```bash
  apt install certbot python3-certbot-nginx
  certbot --nginx -d yourdomain.com
  ```

## ❗ Troubleshooting

### Common Issues

1. **Port 80 already in use**:
   ```bash
   sudo netstat -tlnp | grep :80
   # Kill process or reconfigure
   ```

2. **PM2 not starting**:
   ```bash
   pm2 logs nextjs-app --lines 50
   # Check for Node.js errors
   ```

3. **Nginx configuration errors**:
   ```bash
   nginx -t
   # Check syntax errors
   ```

4. **Application not accessible**:
   ```bash
   curl http://localhost:5000
   # Test PM2 directly
   ```

### Health Check Endpoint

Your Nginx config includes a `/health` endpoint that returns "healthy" if Nginx is working. Use it to monitor:

```bash
# On server
curl http://localhost/health

# From outside
curl http://YOUR_VPS_IP/health
```

## 🔄 Updating the Deployment

When you update the deployment scripts:

1. Test locally first
2. Update the scripts in your repository
3. Commit and push changes
4. Run deployment:
   ```bash
   ./deploy-to-vps.sh
   ```

## 📈 Performance Optimization

- PM2 runs 2 instances by default (adjust in ecosystem.config.js)
- Nginx handles static file caching
- Consider adding Redis for session management if needed
- Monitor memory usage with `pm2 monit`

## 🌐 Multiple Domains (Future)

To support multiple domains on the same IP, update Nginx config:

```nginx
server {
    listen 80;
    server_name domain1.com;
    # Proxy to app1
    location / {
        proxy_pass http://localhost:5000;
        # ...
    }
}

server {
    listen 80;
    server_name domain2.com;
    # Proxy to app2
    location / {
        proxy_pass http://localhost:5001;
        # ...
    }
}
