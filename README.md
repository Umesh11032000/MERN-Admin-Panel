# MERN Stack Admin Panel

A full-featured admin panel built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for managing inventory and user permissions.

## Features

- 🔐 User authentication & authorization
- 📊 Dashboard with analytics
- 👥 User management
- 📦 Product/Inventory management
- 🏷️ Category management
- 📈 Sales & Order tracking
- 📱 Responsive design
- 🌙 Dark/Light mode

## Tech Stack

- **Frontend**: React.js, Redux Toolkit, Material-UI, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS Modules, Material-UI
- **Build Tools**: Webpack, Babel

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Umesh11032000/MERN-Admin-Panel.git
   cd MERN-Admin-Panel
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.development.local` file in the `backend` directory
   - Add your MongoDB connection string and JWT secret:
     ```
    PORT=5000
    NODE_ENV='development'
    DB_URL='mongodb://localhost:27017/inventory'

    JWT_SECRET='secret'
    JWT_EXPIRATION='1d'
     ```

4. Start the development servers:
   ```bash
   # From root directory
   # Start both frontend and backend
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Start both frontend and backend in development mode

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.