# Backend API - MERN Admin Panel

This is the backend server for the MERN Stack Admin Panel, built with Node.js, Express.js, and MongoDB.

## Features

- RESTful API design
- JWT Authentication & Authorization
- MongoDB with Mongoose ODM
- Error handling middleware
- Request validation
- Rate limiting
- CORS enabled
- Environment configuration

## API Endpoints

### Authentication

- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user

### Users

- `GET /api/v1/users` - Get all users (admin only)
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user (admin only)

### Products

- `GET /api/v1/products` - Get all products
- `GET /api/v1/products/:id` - Get product by ID
- `POST /api/v1/products` - Create new product (admin only)
- `PUT /api/v1/products/:id` - Update product (admin only)
- `DELETE /api/v1/products/:id` - Delete product (admin only)

### Categories

- `GET /api/v1/categories` - Get all categories
- `POST /api/v1/categories` - Create category (admin only)
- `DELETE /api/v1/categories/:id` - Delete category (admin only)

## Environment Variables

Set up environment variables:

- Create a `.env.development.local` file in the `backend` directory
- Add your MongoDB connection string and JWT secret:

  ```
  PORT=5000
  NODE_ENV='development'
  DB_URL='mongodb://localhost:27017/inventory'
  JWT_SECRET='secret'
  JWT_EXPIRATION='1d'
  ```

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   # Development
   npm run dev
   ```
