# Deployment Guide

Travel Buddy is a static web application that can be deployed anywhere. Here are several easy deployment options:

## 🚀 Quick Deploy Options

### Netlify (Recommended)
1. Fork/clone this repository
2. Connect your GitHub account to [Netlify](https://netlify.com)
3. Click "New site from Git" and select your repository
4. Deploy settings are already configured in `netlify.toml`
5. Your site will be live in minutes!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Your site is deployed!

### GitHub Pages
1. Fork this repository
2. Go to Settings > Pages in your GitHub repo
3. Select "Deploy from a branch" and choose `main`
4. Your site will be available at `https://yourusername.github.io/travel-buddy`

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 🛠️ Local Development

### Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### With Live Reload
```bash
npm install
npm run dev
```

## 📁 File Structure for Deployment

All files in the root directory should be deployed:
```
travel-buddy/
├── index.html          # Main app
├── demo.html           # Demo page
├── style.css           # Styles
├── script.js           # Logic
├── package.json        # Metadata
├── netlify.toml        # Netlify config
└── README.md           # Documentation
```

## 🔧 Configuration

### Custom Domain
- Most hosting providers support custom domains
- Update the `homepage` field in `package.json`
- Configure DNS records as per your hosting provider

### Analytics (Optional)
Add Google Analytics or similar by inserting tracking code in `index.html`:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌍 CDN and Performance

For better global performance:
- Enable CDN on your hosting provider
- Consider using Cloudflare for additional optimization
- The app is already optimized for fast loading

## 🔒 Security Headers

Security headers are configured in `netlify.toml`. For other hosts, configure:
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 📱 PWA (Future Enhancement)

To make this a Progressive Web App:
1. Add a `manifest.json` file
2. Implement a service worker
3. Add offline functionality
4. Enable "Add to Home Screen"

## 🐛 Troubleshooting

**Site not loading?**
- Check that all files are in the root directory
- Ensure `index.html` is the main file
- Verify no build step is required (this is a static site)

**Styling issues?**
- Confirm `style.css` is in the same directory as `index.html`
- Check browser console for 404 errors

**JavaScript not working?**
- Verify `script.js` is loading correctly
- Check browser console for errors
- Ensure modern browser support (ES6+)