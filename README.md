# Travel Buddy - Full-Stack Travel Planner

A friendly, full-stack travel planner that creates personalized itineraries like a friend would - now with user accounts, trip saving, and real-time data!

## 🌟 Features

### Frontend Features
- **Friendly tone** - No corporate speak, just helpful travel advice like a friend would give
- **Smart planning** - 2-3 activities per day max, includes rest time and realistic pacing
- **Budget-aware** - Focuses on affordable local experiences, street food, and free attractions
- **Interest-based** - Tailors suggestions based on what you mention (museums, food, nightlife, etc.)
- **Travel style options** - Choose between relaxed, active, or spontaneous planning styles
- **Responsive design** - Works perfectly on desktop, tablet, and mobile

### Backend Features
- **User Authentication** - Secure JWT-based login and registration
- **Trip Management** - Save, edit, and delete your travel plans
- **Real-time Weather** - Get current weather data for destinations
- **Public Trip Sharing** - Share your itineraries and discover others' trips
- **Advanced Search** - Find destinations and filter by interests
- **RESTful API** - Clean, documented API endpoints

## 🏗️ Architecture

```
travel-buddy/
├── Frontend (Static Files)
│   ├── index.html          # Main application
│   ├── demo.html           # Demo page
│   ├── style.css           # Styling and responsive design
│   └── script.js           # Frontend logic + API integration
│
└── server/                 # Backend API
    ├── server.js           # Express server setup
    ├── models/             # MongoDB schemas
    ├── routes/             # API endpoints
    ├── middleware/         # Authentication & validation
    ├── services/           # Business logic
    └── scripts/            # Database utilities
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud)
- Git

### 1. Clone and Install
```bash
git clone <repository-url>
cd travel-buddy

# Install backend dependencies
cd server
npm install

### 2. Database Setup
```bash
# Start MongoDB (if running locally)
mongod

# Seed the database with sample destinations
npm run seed
```

### 3. Start the Backend
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

### 4. Start the Frontend
```bash
# Go back to root directory
cd ..

# Option 1: Simple HTTP server
python -m http.server 3000

# Option 2: Using Node.js
npx serve . -p 3000

# Option 3: Live reload for development
npx live-server --port=3000
```

### Trips
- `POST /api/trips` - Create new trip itinerary
- `GET /api/trips/my-trips` - Get user's saved trips
- `GET /api/trips/:id` - Get specific trip
- `PUT /api/trips/:id` - Update trip
- `DELETE /api/trips/:id` - Delete trip
- `GET /api/trips/public/explore` - Browse public trips
- `POST /api/trips/:id/like` - Like/unlike a trip

### Destinations
- `GET /api/destinations` - List all destinations
- `GET /api/destinations/:name` - Get destination details
- `GET /api/destinations/search/:query` - Search destinations
- `GET /api/destinations/popular/list` - Get popular destinations

### Weather
- `GET /api/weather/:city` - Get weather data and travel advice

## 🗺️ Supported Destinations

The backend includes detailed data for **13+ cities**:
- **Europe**: Paris, London, Rome, Barcelona, Amsterdam, Berlin, Prague, Lisbon, Budapest
- **Asia**: Tokyo, Bangkok, Istanbul
- **North America**: New York

For other destinations, it provides intelligent fallback planning with local tips.

## 👤 User Experience

### For Anonymous Users
- Full itinerary generation without account
- Local form data persistence
- Friendly prompts to create account for saving trips

### For Registered Users
- Automatic trip saving
- Access to trip history
- Ability to share trips publicly
- Personalized recommendations based on preferences
- Weather integration

## 🛠️ Development

### Adding New Destinations
1. Add destination data to `server/scripts/seedDatabase.js`
2. Run `npm run seed` to update database
3. Destination automatically available via API

### Database Schema
- **Users**: Authentication, preferences, saved trips
- **Trips**: Complete itineraries with user association
- **Destinations**: Detailed destination data with attractions, food, tips

### Testing
```bash
cd server
npm test
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/DigitalOcean)
```bash
# Set environment variables on your platform
# Deploy backend to your preferred service
# Update FRONTEND_URL in production
```

### Frontend Deployment (Netlify/Vercel)
```bash
# Update API_BASE_URL in script.js to your backend URL
# Deploy static files to your preferred service
```

### Full-Stack Deployment
The backend can serve static files in production:
```bash
NODE_ENV=production npm start
# Serves frontend from root directory
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting on API endpoints
- CORS protection
- Input validation and sanitization
- Security headers with Helmet.js

## 🎯 Philosophy

This planner is designed for **students and regular travelers**, not luxury tourism. It suggests:

- ✅ Free or affordable attractions
- ✅ Local food spots over fancy restaurants  
- ✅ Public transport and walking
- ✅ Realistic pacing with rest time
- ✅ Authentic local experiences
- ✅ Practical, honest advice

The language is casual and supportive - like getting advice from a friend who's been there before, not a travel agency trying to sell you something.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Areas for Contribution
- Add more destination data
- Improve itinerary generation algorithms
- Add new API integrations (flights, hotels)
- Enhance mobile experience
- Add more languages


