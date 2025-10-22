# Vercel Deployment Guide

## 🚀 Quick Deployment Steps

### 1. **Prepare Your Repository**
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: CPH Acoustics website ready for deployment"

# Push to GitHub/GitLab/Bitbucket
git remote add origin https://github.com/your-username/cph-acoustics-website.git
git push -u origin main
```

### 2. **Deploy to Vercel**

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name: cph-acoustics-website
# - Directory: ./
# - Override settings? No
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### 3. **Environment Variables**
Add these in Vercel Dashboard > Settings > Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://www.cph-acoustics.com
```

### 4. **Custom Domain Setup**
1. In Vercel Dashboard > Domains
2. Add your domain: `www.cph-acoustics.com`
3. Follow DNS configuration instructions
4. Update `vercel.json` redirects if needed

## 📋 Pre-Deployment Checklist

- ✅ **Build Test**: `npm run build` passes successfully
- ✅ **TypeScript**: No type errors
- ✅ **ESLint**: No linting errors
- ✅ **Favicon**: All favicon files present
- ✅ **SEO**: robots.txt and sitemap.xml created
- ✅ **Security**: Security headers configured
- ✅ **Performance**: Image optimization enabled
- ✅ **PWA**: Web app manifest configured

## 🔧 Configuration Files

### `vercel.json`
- Framework detection
- Security headers
- Caching rules
- Redirects

### `next.config.js`
- Image optimization
- Security headers
- Performance settings
- TypeScript/ESLint config

### `package.json`
- Updated metadata
- Build scripts
- Dependencies

## 🌐 Post-Deployment

### 1. **Test Your Site**
- Visit your Vercel URL
- Test all pages and functionality
- Check mobile responsiveness
- Verify favicon appears

### 2. **SEO Setup**
- Submit sitemap to Google Search Console
- Verify robots.txt is accessible
- Test OpenGraph tags

### 3. **Analytics (Optional)**
Add Google Analytics or other tracking:
```bash
# Add to environment variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4. **Performance Monitoring**
- Use Vercel Analytics
- Monitor Core Web Vitals
- Set up uptime monitoring

## 🚨 Troubleshooting

### Build Failures
```bash
# Check Node.js version (requires >=20.9.0)
node -v

# Clear cache and rebuild
rm -rf .next
npm run build
```

### Domain Issues
- Check DNS propagation
- Verify SSL certificate
- Test redirects

### Performance Issues
- Optimize images
- Check bundle size
- Enable compression

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **CPH Acoustics**: info@cph-acoustics.com

---

**Ready to deploy!** 🎉
Your CPH Acoustics website is production-ready with all optimizations in place.
