# Deployment Guide

This guide covers different deployment options for MindCare Campus.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

1. **Connect to GitHub**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository

2. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `env.example`

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### 2. Netlify

1. **Build Command**
   ```bash
   npm run build
   ```

2. **Publish Directory**
   ```
   dist
   ```

3. **Environment Variables**
   - Add all variables from `env.example` in Netlify dashboard

### 3. Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Setup

### Required Environment Variables

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Optional Environment Variables

```env
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_APP_ENV=production
VITE_APP_NAME=MindCare Campus
VITE_APP_VERSION=1.0.0
```

## 🏗️ Build Process

### Local Build
```bash
npm run build
```

### Production Build
```bash
NODE_ENV=production npm run build
```

### Build Output
- **Directory**: `dist/`
- **Entry Point**: `dist/index.html`
- **Assets**: `dist/assets/`

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use platform-specific secret management
- Rotate API keys regularly

### Firebase Security Rules
```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Content Security Policy
Add to your hosting configuration:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';
```

## 📊 Performance Optimization

### Build Optimizations
- Code splitting enabled
- Tree shaking for unused code
- Minification and compression
- Asset optimization

### Runtime Optimizations
- Lazy loading for routes
- Image optimization
- Caching strategies
- CDN integration

## 🔍 Monitoring

### Analytics
- Firebase Analytics (if configured)
- Vercel Analytics (if using Vercel)
- Custom event tracking

### Error Tracking
- Console error monitoring
- User feedback collection
- Performance monitoring

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Environment Variables Not Working**
   - Ensure variables start with `VITE_`
   - Check deployment platform configuration
   - Verify variable names match exactly

3. **Firebase Connection Issues**
   - Verify API keys are correct
   - Check Firebase project configuration
   - Ensure proper security rules

4. **Routing Issues**
   - Configure SPA routing in hosting platform
   - Check for 404 redirects to index.html

## 📱 Mobile Deployment

### PWA Configuration
- Service worker for offline functionality
- App manifest for installability
- Responsive design for all devices

### App Store Deployment
- Use Capacitor or similar tool
- Follow platform guidelines
- Test on real devices

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

## 📈 Scaling Considerations

### Database
- Use Firebase Firestore for scalability
- Implement proper indexing
- Consider data archiving strategies

### CDN
- Use CloudFlare or similar
- Enable caching for static assets
- Optimize images and fonts

### Monitoring
- Set up alerts for errors
- Monitor performance metrics
- Track user engagement

---

For more specific deployment questions, please refer to the platform documentation or open an issue.
