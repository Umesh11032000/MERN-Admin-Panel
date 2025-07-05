# Questionnaire System

A modern, full-stack questionnaire and survey management platform built with React, Node.js, and MongoDB. Create, distribute, and analyze surveys with an intuitive interface and powerful analytics.

## ✨ Features

### 🎯 Core Functionality
- **Survey Creation**: Drag-and-drop interface for building professional questionnaires
- **Response Collection**: Multiple distribution methods (email, link, embed)
- **Real-time Analytics**: Live insights and data visualization
- **User Management**: Role-based access control and team collaboration

### 🎨 Modern Design
- **Responsive UI**: Beautiful, mobile-first design with Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Component-Based**: Modular, reusable UI components

### 🔐 Security & Performance
- **JWT Authentication**: Secure user sessions
- **Role-Based Access**: Admin and user permissions
- **Data Encryption**: Enterprise-grade security
- **High Performance**: Optimized for speed and scalability

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **RESTful API** design
- **CORS** enabled

### Development Tools
- **Vite** for fast development
- **ESLint** for code quality
- **TypeScript** for type safety

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd inventory-management
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.development.local` file in the `backend` directory:
   ```env
   PORT=5000
   NODE_ENV=development
   DB_URL=mongodb://localhost:27017/questionnaire-system
   JWT_SECRET=your-secret-key
   JWT_EXPIRATION=1d
   ```

4. **Start the development servers:**
   ```bash
   # From root directory
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
inventory-management/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── features/        # Feature-based components
│   │   │   ├── landing/     # Landing page components
│   │   │   ├── admin/       # Admin dashboard
│   │   │   └── auth/        # Authentication
│   │   ├── store/           # Redux store and slices
│   │   ├── api/             # API configuration
│   │   └── types/           # TypeScript type definitions
│   └── public/              # Static assets
├── backend/                  # Node.js backend API
│   ├── controllers/         # Route controllers
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   └── config/              # Configuration files
└── README.md               # This file
```

## 🎯 Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend in development mode

### Frontend (`cd frontend`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend (`cd backend`)
- `npm run dev` - Start development server
- `npm start` - Start production server

## 🌟 Key Features

### Landing Page
- **Modern Design**: Beautiful, animated landing page
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Engaging user experience
- **Clear CTAs**: Easy navigation to sign up/login

### Admin Dashboard
- **User Management**: Create, edit, and manage users
- **Questionnaire Builder**: Create and manage surveys
- **Analytics**: View response data and insights
- **Role Management**: Admin and user permissions

### Survey System
- **Multiple Question Types**: Text, multiple choice, rating scales
- **Response Collection**: Real-time data gathering
- **Export Options**: Download results in various formats
- **Analytics Dashboard**: Visualize survey responses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

**Built with ❤️ using modern web technologies**