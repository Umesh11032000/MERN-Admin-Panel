# Backend API - Questionnaire System

A robust RESTful API for the Questionnaire System built with Node.js, Express.js, and MongoDB. Provides secure authentication, survey management, and data analytics endpoints.

## ✨ Features

### 🔐 Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access**: Admin and user permission levels
- **Password Hashing**: Secure password storage with bcrypt
- **CORS Support**: Cross-origin resource sharing enabled
- **Request Validation**: Input validation and sanitization

### 📊 Survey Management
- **Questionnaire CRUD**: Create, read, update, delete surveys
- **Question Types**: Multiple choice, text, rating scales
- **Response Collection**: Store and manage survey responses
- **Analytics**: Response analysis and insights

### 👥 User Management
- **User Registration**: Secure account creation
- **Profile Management**: Update user information
- **Role Management**: Admin and user roles
- **User Analytics**: Track user activity and engagement

### 🚀 Performance & Reliability
- **MongoDB Integration**: Scalable NoSQL database
- **Error Handling**: Comprehensive error management
- **Rate Limiting**: API request throttling
- **Logging**: Request and error logging

## 🛠️ Tech Stack

### Core Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers

### Development Tools
- **ESLint** - Code linting
- **Nodemon** - Development server with auto-restart
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
backend/
├── controllers/          # Route controllers
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── questionnaire.controller.js
│   ├── question.controller.js
│   ├── response.controller.js
│   └── option.controller.js
├── models/               # MongoDB models
│   ├── user.model.js
│   ├── questionnaire.model.js
│   ├── question.model.js
│   ├── user_response.model.js
│   └── option.model.js
├── routes/               # API routes
│   ├── auth.routes.js
│   ├── user.routes.js
│   ├── questionnaire.routes.js
│   ├── question.routes.js
│   ├── response.routes.js
│   └── option.routes.js
├── middleware/           # Custom middleware
│   └── auth.middleware.js
├── config/               # Configuration files
│   └── env.js
├── database/             # Database configuration
│   └── mongodb.js
├── seeders/              # Database seeders
│   └── admin-seeder.js
├── app.js                # Express app configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Create a `.env.development.local` file:
   ```env
   PORT=5000
   NODE_ENV=development
   DB_URL=mongodb://localhost:27017/questionnaire-system
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRATION=1d
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Server will be running at:**
   [http://localhost:5000](http://localhost:5000)

### Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seed` - Run database seeders

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment mode | development |
| `DB_URL` | MongoDB connection string | - |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRATION` | JWT token expiration | 1d |

## 🚨 Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

### Common Error Codes
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## 📈 Performance

### Optimization Features
- **Database Indexing**: Optimized queries with proper indexes
- **Connection Pooling**: Efficient database connections
- **Request Validation**: Input sanitization and validation
- **Error Logging**: Comprehensive error tracking

### Monitoring
- **Request Logging**: Track API usage and performance
- **Error Tracking**: Monitor and alert on errors
- **Database Monitoring**: Query performance analysis

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Add proper error handling for new endpoints
3. Include input validation for all routes
4. Add appropriate authentication middleware
5. Update API documentation for new endpoints
6. Test thoroughly before submitting

## 📄 License

This project is licensed under the MIT License.

---

**Built with Node.js and Express for robust API development**
