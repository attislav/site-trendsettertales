# 🚀 Deployment Guide

This guide covers deploying your generated site to Vercel, Coolify, or other hosting platforms.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] WordPress site running with WPGraphQL plugin installed
- [ ] WordPress Application Password generated
- [ ] CORS headers configured in WordPress
- [ ] All environment variables ready
- [ ] Site images added to `public/images/` (or plan to add later)
- [ ] Site configuration customized in `config/site.config.ts`
- [ ] Legal pages reviewed and updated (Privacy, Terms, Disclaimer)
- [ ] Test site locally with `npm run dev`

---

## 🎯 Vercel Deployment (Recommended)

Vercel is the easiest and most popular option for Next.js sites.

### Method 1: Via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Set Environment Variables**
   In Vercel dashboard → Settings → Environment Variables:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yoursite.com
   NEXT_PUBLIC_SITE_NAME="Your Site Name"
   NEXT_PUBLIC_WORDPRESS_API_URL=https://wp.yoursite.com/graphql
   WP_APPLICATION_PASSWORD=xxxx-xxxx-xxxx-xxxx
   WP_USERNAME=admin
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables (interactive)
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_WORDPRESS_API_URL
vercel env add WP_APPLICATION_PASSWORD

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)
4. Wait for SSL certificate to provision (automatic)

---

## 🐳 Coolify Deployment (Self-Hosted)

Coolify is a self-hosted alternative to Vercel/Netlify.

### Prerequisites
- Coolify instance running on your VPS
- Docker installed on your server
- Domain pointed to your server

### Deployment Steps

1. **Create New Application in Coolify**
   - Click "New Application"
   - Select "Docker Compose" or "Dockerfile"
   - Connect your Git repository

2. **Configure Build Settings**
   ```yaml
   # Dockerfile (if needed)
   FROM node:18-alpine AS base

   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   COPY . .
   RUN npm run build

   EXPOSE 3000
   CMD ["npm", "start"]
   ```

3. **Set Environment Variables**
   In Coolify → Application → Environment:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yoursite.com
   NEXT_PUBLIC_SITE_NAME="Your Site Name"
   NEXT_PUBLIC_WORDPRESS_API_URL=https://wp.yoursite.com/graphql
   WP_APPLICATION_PASSWORD=xxxx-xxxx-xxxx-xxxx
   WP_USERNAME=admin
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy"
   - Monitor build logs
   - Set up SSL certificate (Coolify auto-generates via Let's Encrypt)

---

## 🌐 Other Hosting Options

### Netlify

Similar to Vercel, great Next.js support:

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### Railway

1. Create new project
2. Connect GitHub repo
3. Add environment variables
4. Railway auto-detects Next.js
5. Deploy

### Traditional VPS (Ubuntu/Debian)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repository
git clone https://github.com/username/repo.git
cd repo

# Install dependencies
npm ci --production

# Build
npm run build

# Set up PM2 for process management
npm install -g pm2
pm2 start npm --name "my-blog" -- start
pm2 save
pm2 startup

# Set up Nginx reverse proxy
sudo nano /etc/nginx/sites-available/my-blog
```

Nginx config:
```nginx
server {
    server_name yoursite.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Post-Deployment Configuration

### 1. Update WordPress CORS

Ensure your WordPress allows requests from your deployed domain:

**wp-config.php:**
```php
// Allow your Next.js domain
header("Access-Control-Allow-Origin: https://yoursite.com");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
```

Or use a plugin like "WPGraphQL CORS".

### 2. Set Up Analytics

Add tracking IDs in your environment variables or `config/site.config.ts`:

```typescript
analytics: {
  googleAnalytics: "G-XXXXXXXXXX",
  googleAdsense: "ca-pub-XXXXXXXXXXXXXXXX",
  pinterestTag: "XXXXXXXXXXXXX",
}
```

### 3. Verify Pinterest Integration

- Install Pinterest browser extension
- Check if Pinterest Save button appears on images
- Verify correct image sizes (3:2 ratio)

### 4. Test SEO

- Run Lighthouse audit
- Check meta tags with [metatags.io](https://metatags.io)
- Verify structured data with [Schema Validator](https://validator.schema.org)
- Submit sitemap to Google Search Console

### 5. Performance Optimization

- Enable Vercel Edge Caching (automatic)
- Set up ISR (Incremental Static Regeneration) if needed
- Compress images (use WebP format)
- Monitor Core Web Vitals

---

## 🔄 Continuous Deployment

### Automatic Deployments (Vercel/Netlify)

Once connected to GitHub:
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Preview deployments

### Manual Deployments (Coolify/VPS)

Set up a webhook or cron job to pull latest changes:

```bash
# Simple deploy script (deploy.sh)
#!/bin/bash
cd /path/to/your/site
git pull origin main
npm ci
npm run build
pm2 restart my-blog
```

---

## 📊 Monitoring & Logging

### Vercel Analytics
- Automatically enabled
- View in Vercel Dashboard

### Coolify Logs
- View in Coolify Dashboard → Application → Logs

### Custom Logging
Add error tracking:
```bash
npm install @sentry/nextjs
```

---

## 🆘 Troubleshooting

### Build Fails

**Error:** `Cannot find module '@/config/site.config'`
- **Fix:** Ensure all imports use correct paths
- Check `tsconfig.json` paths configuration

**Error:** `GraphQL request failed`
- **Fix:** Verify WordPress URL is correct
- Check CORS headers
- Test GraphQL endpoint manually

### Images Not Loading

- Check `public/images/` directory exists
- Verify image paths in config
- Ensure images are committed to Git (or uploaded to server)

### Environment Variables Not Working

- Prefix public variables with `NEXT_PUBLIC_`
- Restart dev server after changing `.env.local`
- In Vercel/Coolify, redeploy after adding variables

---

## 🔒 Security Checklist

- [ ] Environment variables are secret (not in Git)
- [ ] WordPress Application Password is secure
- [ ] HTTPS enabled (SSL certificate)
- [ ] CORS configured correctly (not wildcard `*`)
- [ ] No sensitive data in client-side code
- [ ] Rate limiting on API routes (if any)
- [ ] Regular WordPress updates
- [ ] Strong WordPress admin password

---

## 📚 Additional Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Coolify Docs:** https://coolify.io/docs
- **WPGraphQL CORS:** https://www.wpgraphql.com/docs/authentication-and-authorization

---

## 🎉 Launch Checklist

Final checks before going live:

- [ ] Site loads correctly at deployed URL
- [ ] All pages render properly (test 5-10 URLs)
- [ ] WordPress content displays correctly
- [ ] Images load and Pinterest buttons work
- [ ] Mobile responsive (test on phone)
- [ ] SEO meta tags present (view page source)
- [ ] Analytics tracking code present
- [ ] Legal pages accessible
- [ ] Contact email works
- [ ] Search functionality works
- [ ] 404 page displays correctly

**Congratulations! Your site is live! 🚀**

---

**Version:** 1.0.0
**Last Updated:** 2025-01-16
