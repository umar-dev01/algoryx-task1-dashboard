# Algoryx Admin Dashboard

A modern, responsive React-based admin dashboard built for Algoryx Technologies internship Task 1. This professional SaaS-style dashboard provides real-time business metrics visualization, order management, notification handling, and user profile management with seamless theme switching and responsive design.

![Algoryx Dashboard](https://via.placeholder.com/1200x600/7C3AED/FFFFFF?text=Algoryx+Admin+Dashboard)

## 🚀 Live Demo

**[View Live Dashboard](#)** _(Link will be added after Vercel deployment)_

## ✨ Features

### Core Functionality

- **📊 Dashboard Statistics Cards** - Real-time business metrics with trend indicators
  - Total Revenue with currency formatting
  - Active Users count
  - Total Orders tracking
  - Conversion Rate percentage
  - Pending Tickets counter

- **📈 Revenue Chart** - Interactive line chart showing revenue trends over time with theme-aware styling

- **📋 Orders Management Table** - Comprehensive order tracking with:
  - Column sorting (ascending/descending)
  - Live search filtering by customer, order ID, or status
  - Pagination (5 orders per page)
  - Color-coded status badges (Completed, Pending, Processing, Cancelled)
  - Responsive horizontal scrolling on mobile

- **🔔 Notification System** - Real-time notifications with:
  - Bell icon with unread count badge
  - Dropdown panel with 6 notification types
  - Mark individual notifications as read
  - "Mark all as read" functionality
  - Relative timestamps ("5 min ago", "2 hours ago")
  - Smooth animations

- **🎨 Theme System** - Dark/Light mode with:
  - One-click theme toggle
  - System preference detection on first load
  - LocalStorage persistence
  - Smooth color transitions

- **👤 User Profile Card** - Displays user information with avatar/initials fallback

- **📱 Responsive Design** - Fully functional on:
  - Mobile devices (320px+)
  - Tablets
  - Desktops
  - Large screens

### UI/UX Enhancements

- **Responsive Sidebar** - Collapsible on desktop, drawer overlay on mobile
- **Top Navigation** - Fixed header with search bar and quick actions
- **Smooth Animations** - Framer Motion powered transitions and entrance effects
- **Accessibility** - Keyboard navigation, ARIA labels, proper color contrast
- **Loading States** - Smooth transitions and feedback

## 🛠️ Technology Stack

### Core Technologies

- **React 18** - UI library with functional components and hooks
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **Tailwind CSS** - Utility-first CSS framework for styling

### UI Libraries

- **Framer Motion** - Animation library for smooth transitions
- **lucide-react** - Beautiful, consistent icon library
- **Recharts** - Composable charting library for data visualization

### Development Tools

- **Git & GitHub** - Version control and repository hosting
- **Vercel** - Deployment platform
- **npm** - Package manager

## 📦 Installation & Setup

### Prerequisites

- **Node.js** - Version 16.0 or higher
- **npm** - Version 7.0 or higher

### Step-by-Step Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/algoryx-task1-dashboard.git
   cd algoryx-task1-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
algoryx-task1-dashboard/
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── MobileDrawer.jsx
│   │   │   ├── TopNavigation.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Avatar.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Input.jsx
│   │   └── dashboard/          # Dashboard-specific components
│   │       ├── StatCard.jsx
│   │       ├── OrdersTable.jsx
│   │       ├── NotificationPanel.jsx
│   │       ├── ProfileCard.jsx
│   │       ├── RevenueChart.jsx
│   │       └── ThemeToggle.jsx
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTheme.js
│   │   ├── useSidebar.js
│   │   ├── useNotifications.js
│   │   ├── useLocalStorage.js
│   │   └── useClickOutside.js
│   ├── data/                   # Mock data files
│   │   ├── stats.js
│   │   ├── orders.js
│   │   ├── notifications.js
│   │   ├── user.js
│   │   └── chartData.js
│   ├── utils/                  # Utility functions
│   │   ├── formatters.js       # Date, currency formatters
│   │   ├── helpers.js          # Helper functions
│   │   └── constants.js        # App constants
│   ├── pages/                  # Page components
│   │   └── Dashboard.jsx
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles (Tailwind)
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
├── package.json
└── README.md
```

## 🎨 Brand Colors

The dashboard uses Algoryx's brand colors:

- **Primary (Violet)**: `#7C3AED` - Main buttons and accents
- **Accent (Blue)**: `#2563EB` - Secondary accents
- **Light Mode**:
  - Page Background: `#FFFFFF`
  - Card Background: `#F5F0FF` (Light lavender)
  - Border: `#E9D5FF`
- **Dark Mode**:
  - Page Background: `#0B0B14`
  - Card Background: `#151522`
  - Border: `rgba(124, 58, 237, 0.2)`

## 🎯 Learning Outcomes

This project demonstrates mastery of:

1. **Component Architecture** - Building scalable, reusable React components with single responsibility principle
2. **State Management with React Hooks** - Using useState, useEffect, useMemo, and custom hooks effectively
3. **Responsive UI Design** - Creating layouts that work seamlessly across all device sizes
4. **Reusable Design Patterns** - Developing flexible UI components that can be used throughout the application
5. **Scalable Frontend Practices** - Organizing code, managing state, and structuring projects for growth
6. **Modern CSS with Tailwind** - Utility-first CSS for rapid development and consistent styling
7. **Animation & UX** - Smooth transitions and micro-interactions for delightful user experience
8. **Accessibility** - Building inclusive interfaces with keyboard navigation and screen reader support

## 🚀 Deployment

This project is deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Your Own

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Vite and configure build settings
4. Deploy!

## 📸 Screenshots

### Desktop View

![Desktop Dashboard](./screenshots/desktop-view.png)

### Mobile View

![Mobile Dashboard](./screenshots/mobile-view.png)

### Dark Mode

![Dark Mode](./screenshots/dark-mode.png)

## 🤝 Contributing

This is an internship project for Algoryx Technologies. For any questions or suggestions, please reach out.

## 👨‍💻 Author

**Alex Thompson**

- Role: Frontend Developer Intern
- Company: Algoryx Technologies
- Email: alex.thompson@algoryx.in

## 📄 License

This project is part of Algoryx Technologies internship program.

## 🙏 Acknowledgments

- Algoryx Technologies for the opportunity
- React and Vite teams for amazing tools
- Tailwind CSS for the utility-first approach
- Lucide for beautiful icons

---

**Built with ❤️ as part of Algoryx Technologies Internship Task 1**
