#!/bin/bash
# 🚀 ONE-CLICK LOCAL → VPS DEPLOYMENT SCRIPT

set -e

echo "🚀 STARTING LOCAL → VPS DEPLOYMENT..."
echo "Timestamp: $(date)"
echo ""

# Step 1: Git operations locally
echo "1️⃣ Committing local changes..."
git add . 2>/dev/null || true
if git diff --cached --quiet && git diff --quiet; then
    echo "   No changes to commit"
else
    git commit -m "Deploy: Auto-commit before deployment $(date)" || true
fi

echo "   Pushing to GitHub..."
git push origin main

echo "✅ Local git operations completed"
echo ""

# Step 2: Sync to VPS
echo "2️⃣ Syncing to VPS..."
APP_DIR="/var/www/nextjs-app"
rsync -avz --quiet --delete --exclude='.git' --exclude='.next' --exclude='node_modules' . root@102.215.228.161:"${APP_DIR}/" || {
    echo "   rsync failed, using alternative sync method..."
    # Alternative: tar + scp fallback
    tar czf /tmp/new-platform-local.tar.gz --exclude='.git' --exclude='.next' --exclude='node_modules' .
    scp /tmp/new-platform-local.tar.gz root@102.215.228.161:/tmp/
    ssh root@102.215.228.161 "mkdir -p ${APP_DIR} && cd /tmp && tar xzf new-platform-local.tar.gz && cp -r * ${APP_DIR}/ && rm new-platform-local.tar.gz"
}

echo "✅ Code transfer completed"
echo ""

# Step 3: Trigger VPS deployment
echo "3️⃣ Triggering VPS deployment..."
echo "   Deploying with PM2 + Nginx..."
ssh root@102.215.228.161 "cd ${APP_DIR} && export VPS_IP=102.215.228.161 && ./deploy-pm2-nginx.sh" || {
    echo "❌ VPS deployment failed"
    echo "Attempting manual restart..."
    ssh root@102.215.228.161 "cd ${APP_DIR} && npm run build && pm2 restart nextjs-app && systemctl restart nginx"
    exit 1
}

echo "✅ Deployment completed successfully"
echo ""

echo "🎉 DEPLOYMENT SUMMARY:"
echo "🌐 App URL: http://102.215.228.161/"
echo "👨‍💻 Check status: ssh root@102.215.228.161 'pm2 list'"
echo "📊 Monitor: pm2 monit"
echo "⏰ Total time: ~30-45 seconds"
