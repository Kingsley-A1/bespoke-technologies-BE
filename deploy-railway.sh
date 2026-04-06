#!/bin/bash
# ============================================================
# King Tech Foundation — Railway Deploy Script
# Run this after: railway login
# ============================================================

set -e

echo ">>> King Tech Foundation Backend — Railway Deployment"
echo ""

# 1. Init / link Railway project
echo "[1/4] Initialising Railway project..."
railway init --name king-tech-foundation-backend

# 2. Set environment variables
echo "[2/4] Setting environment variables..."
railway variables set PORT=3001
railway variables set NODE_ENV=production
railway variables set FRONTEND_URL=https://king-tech-foundation-frontend.vercel.app

# 3. Deploy
echo "[3/4] Deploying to Railway..."
railway up

# 4. Get URL
echo "[4/4] Deployment complete. Your Railway URL:"
railway domain

echo ""
echo ">>> Next: add the Railway URL to Vercel as NEXT_PUBLIC_API_URL"
echo "    cd ../king-tech-foundation-frontend"
echo '    echo "https://your-app.railway.app" | vercel env add NEXT_PUBLIC_API_URL production'
echo "    vercel --prod"
