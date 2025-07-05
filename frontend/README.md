# Frontend - Questionnaire System

A modern, responsive frontend application for the Questionnaire System built with React 19, TypeScript, and Tailwind CSS. Features a beautiful landing page, admin dashboard, and survey management interface.

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with perfect desktop experience
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Smooth Animations**: Engaging micro-interactions and entrance animations
- **Component-Based**: Modular, reusable UI components with shadcn/ui

### 🚀 Performance & Developer Experience
- **Vite Build Tool**: Lightning-fast development and build times
- **TypeScript**: Full type safety and better developer experience
- **ESLint**: Code quality and consistency
- **Hot Reload**: Instant feedback during development

### 📱 Landing Page
- **Hero Section**: Compelling headline with animated background shapes
- **Features Grid**: Showcase of platform capabilities with animated icons
- **How It Works**: 3-step process visualization
- **Testimonials**: Customer success stories with ratings
- **Call-to-Action**: Multiple conversion points
- **Sticky Navigation**: Always-accessible menu

### 🔐 Authentication
- **Login/Register**: Clean, accessible forms
- **JWT Integration**: Secure session management
- **Protected Routes**: Role-based access control
- **Form Validation**: Real-time error handling

### 📊 Admin Dashboard
- **User Management**: CRUD operations for user accounts
- **Questionnaire Builder**: Create and manage surveys
- **Data Tables**: Sortable, filterable data with pagination
- **Analytics**: Response visualization and insights

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Consistent icon set
- **Custom Animations** - CSS animations and transitions
- **Responsive Design** - Mobile-first approach

### State Management & Data
- **Redux Toolkit** - Predictable state management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hook Form** - Form state management

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Vite** - Development server and build tool

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/          # Layout components
│   │   └── datatable/       # Data table components
│   ├── features/            # Feature-based organization
│   │   ├── landing/         # Landing page components
│   │   │   ├── components/  # Landing page specific components
│   │   │   └── page.tsx     # Main landing page
│   │   ├── admin/           # Admin dashboard features
│   │   │   ├── home/        # Dashboard home
│   │   │   ├── user/        # User management
│   │   │   └── questionnaire/ # Survey management
│   │   └── auth/            # Authentication features
│   ├── store/               # Redux store configuration
│   │   ├── slices/          # Redux slices by feature
│   │   └── index.ts         # Store configuration
│   ├── api/                 # API configuration
│   ├── types/               # TypeScript type definitions
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── routers/             # Routing configuration
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🎨 Styling & Theming

### Tailwind CSS
- **Utility-first approach** for rapid development
- **Custom color palette** with semantic naming
- **Responsive breakpoints** for all screen sizes
- **Dark mode support** with automatic switching

### shadcn/ui Components
- **Accessible by default** with ARIA attributes
- **Customizable themes** with CSS variables
- **Consistent design** across all components
- **TypeScript support** for all components

### Custom Animations
- **CSS keyframes** for smooth transitions
- **Staggered animations** for list items
- **Hover effects** for interactive elements
- **Reduced motion support** for accessibility

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api/v1
```

### TypeScript Configuration
- **Strict mode** enabled for better type safety
- **Path aliases** configured for clean imports
- **ESLint integration** for code quality

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach
- **Touch-friendly** interface elements
- **Optimized navigation** for mobile devices
- **Fast loading** on slower connections
- **Accessible** design patterns

## 🎯 Key Components

### Landing Page Components
- `Header` - Sticky navigation with mobile menu
- `Hero` - Compelling headline with animated background
- `Features` - Grid of platform capabilities
- `HowItWorks` - 3-step process visualization
- `Testimonials` - Customer success stories
- `CallToAction` - Conversion-focused section
- `Footer` - Comprehensive site navigation

### Admin Components
- `DataTable` - Sortable, filterable data display
- `UserManagement` - CRUD operations for users
- `QuestionnaireBuilder` - Survey creation interface
- `Analytics` - Data visualization and insights

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Use TypeScript for all new components
3. Add proper type definitions
4. Ensure responsive design works on all devices
5. Test dark/light mode compatibility
6. Run ESLint before committing

## 📄 License

This project is licensed under the MIT License.

---

**Built with modern web technologies for the best user experience**
