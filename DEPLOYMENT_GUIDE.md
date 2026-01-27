# Complete Deployment Guide

This guide covers multiple deployment options for the Travel Buddy full-stack application.

## 🚀 Quick Deploy Options

### Option 1: Docker Compose (Recommended for Development)

```bash
# Clone the repository
git clone <your-repo-url>
cd travel-buddy

# Set environment variables
cp server/.env.example server/.env
# Edit server/.env with your configuration

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
# MongoDB: localhost:27017
```

### Option 2: Manual Setup

#### Backend Setup
```bash
cd server

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Start MongoDB (if local)
mongod

# Seed database
npm run seed

# Start backend
npm run dev  # Development
npm start    # Production
```

#### Frontend Setup
```bash
# In root directory
python -m http.server 3000
# OR
npx serve . -p 3000
```

## 🌐 Production Deployment

### Heroku Deployment

#### Backend (Heroku)
```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create app
heroku create travel-buddy-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-super-secret-key
heroku config:set MONGODB_URI=your-mongodb-atlas-uri
heroku config:set OPENWEATHER_API_KEY=your-api-key

# Deploy
cd server
git init
git add .
git commit -m "Initial commit"
heroku git:remote -a travel-buddy-api
git push heroku main

# Seed database
heroku run npm run seed
```

#### Frontend (Netlify)
```bash
# Update API_BASE_URL in script.js
const API_BASE_URL = 'https://travel-buddy-api.herokuapp.com/api';

# Deploy to Netlify
# 1. Connect GitHub repo to Netlify
# 2. Set build command: (none)
# 3. Set publish directory: /
# 4. Deploy
```

### Railway Deployment

#### Backend
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway add --database mongodb
railway deploy

# Set environment variables in Railway dashboard
```

### DigitalOcean App Platform

#### Create app.yaml
```yaml
name: travel-buddy
services:
- name: backend
  source_dir: /server
  github:
    repo: your-username/travel-buddy
    branch: main
  run_command: npm start
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: NODE_ENV
    value: production
  - key: JWT_SECRET
    value: your-secret-key
    type: SECRET
  - key: MONGODB_URI
    value: your-mongodb-uri
    type: SECRET

- name: frontend
  source_dir: /
  github:
    repo: your-username/travel-buddy
    branch: main
  build_command: echo "No build needed"
  run_command: npx serve . -p 8080
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs

databases:
- name: travel-buddy-db
  engine: MONGODB
  version: "6"
```

### AWS Deployment

#### Backend (Elastic Beanstalk)
```bash
# Install EB CLI
pip install awsebcli

# Initialize
cd server
eb init travel-buddy-api

# Create environment
eb create production

# Set environment variables
eb setenv NODE_ENV=production JWT_SECRET=your-secret MONGODB_URI=your-uri

# Deploy
eb deploy
```

#### Frontend (S3 + CloudFront)
```bash
# Update API_BASE_URL in script.js
# Upload files to S3 bucket
# Configure CloudFront distribution
# Set up custom domain (optional)
```

## 🗄️ Database Options

### MongoDB Atlas (Recommended)
```bash
# 1. Create account at mongodb.com/atlas
# 2. Create cluster
# 3. Create database user
# 4. Whitelist IP addresses
# 5. Get connection string
# 6. Update MONGODB_URI in environment
```

### Local MongoDB
```bash
# Install MongoDB
# macOS: brew install mongodb-community
# Ubuntu: apt-get install mongodb
# Windows: Download from mongodb.com

# Start MongoDB
mongod

# Use in .env
MONGODB_URI=mongodb://localhost:27017/travel-buddy
```

### Docker MongoDB
```bash
# Run MongoDB container
docker run -d \
  --name travel-buddy-mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  mongo:6.0

# Use in .env
MONGODB_URI=mongodb://admin:password@localhost:27017/travel-buddy?authSource=admin
```

## 🔧 Environment Configuration

### Required Environment Variables

#### Backend (.env)
```bash
# Database
MONGODB_URI=mongodb://localhost:27017/travel-buddy

# Authentication
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters

# Server
PORT=3001
NODE_ENV=production

# CORS
FRONTEND_URL=https://your-frontend-domain.com

# External APIs (Optional)
OPENWEATHER_API_KEY=your-openweather-api-key

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Frontend
```javascript
// Update in script.js
const API_BASE_URL = 'https://your-backend-domain.com/api';
```

## 🔒 Security Checklist

### Production Security
- [ ] Use strong JWT secret (32+ characters)
- [ ] Enable HTTPS for both frontend and backend
- [ ] Set secure CORS origins
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Set up proper database authentication
- [ ] Use security headers (already configured)
- [ ] Regular security updates

### MongoDB Security
- [ ] Enable authentication
- [ ] Use strong passwords
- [ ] Whitelist specific IP addresses
- [ ] Enable SSL/TLS
- [ ] Regular backups

## 📊 Monitoring & Logging

### Application Monitoring
```bash
# Add to package.json
npm install --save express-winston winston

# Configure logging in server.js
# Set up error tracking (Sentry, Bugsnag)
# Monitor performance (New Relic, DataDog)
```

### Health Checks
```bash
# Backend health check
curl https://your-api-domain.com/api/health

# Frontend health check
curl https://your-frontend-domain.com/health
```

## 🔄 CI/CD Pipeline

### GitHub Actions (Included)
- Automated testing on push/PR
- Docker image building
- Deployment to production

### Manual Deployment Script
```bash
#!/bin/bash
# deploy.sh

echo "Deploying Travel Buddy..."

# Pull latest code
git pull origin main

# Backend deployment
cd server
npm install --production
pm2 restart travel-buddy-api

# Frontend deployment
cd ..
# Copy files to web server directory
# Or trigger CDN invalidation

echo "Deployment complete!"
```

## 🧪 Testing

### Run Tests
```bash
cd server

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch
```

### Load Testing
```bash
# Install artillery
npm install -g artillery

# Create load test config
# Run load tests against API endpoints
artillery run load-test.yml
```

## 🚨 Troubleshooting

### Common Issues

#### Backend won't start
- Check MongoDB connection
- Verify environment variables
- Check port availability
- Review error logs

#### Frontend can't connect to API
- Verify API_BASE_URL
- Check CORS configuration
- Confirm backend is running
- Check network/firewall settings

#### Database connection issues
- Verify MongoDB URI format
- Check database credentials
- Confirm network access
- Test connection manually

### Debug Commands
```bash
# Check backend logs
heroku logs --tail -a your-app-name

# Test API endpoints
curl -X GET https://your-api.com/api/health

# Check database connection
mongosh "your-mongodb-uri"
```

## 📈 Scaling Considerations

### Horizontal Scaling
- Load balancer for multiple backend instances
- Database read replicas
- CDN for static assets
- Caching layer (Redis)

### Performance Optimization
- Database indexing
- API response caching
- Image optimization
- Code splitting (if adding frameworks)

This deployment guide covers most common scenarios. Choose the option that best fits your needs and infrastructure preferences.