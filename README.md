# INKA Assignment - CentralMusic Guitar Store

A responsive single-page React application built with TypeScript, Vite, and Tailwind CSS for a guitar e-commerce website.

## 🎸 Project Overview

This project showcases a modern, fully responsive guitar store landing page featuring:
- Hero section with compelling imagery
- Promotional banner for guitar lessons
- Product catalog with MockAPI integration
- Mobile-first responsive design

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **MockAPI.io** - Product data backend

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎯 Features

### Implemented Sections
- ✅ **Header**: Responsive navigation with mobile menu
- ✅ **Hero Section**: Full-width background with call-to-action
- ✅ **Promo Section**: Free guitar lessons promotional banner
- ✅ **New Products**: Dynamic product grid with MockAPI integration

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### MockAPI Setup
The app fetches product data from MockAPI. To configure:

1. See `MOCKAPI_SETUP.md` for detailed instructions
2. Update the API endpoint in `src/components/NewProducts.tsx`
3. Current endpoint: `https://68e17c6e8943bf6bb3c450ba.mockapi.io/products`

### Fallback Data
If MockAPI is unavailable, the app uses local fallback data with guitar images stored in the `images/` directory.

## 📁 Project Structure

```
INKA_Assignment/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with mobile menu
│   │   ├── Hero.tsx         # Hero section with background
│   │   ├── PromoSection.tsx # Promotional banner
│   │   └── NewProducts.tsx  # Product catalog
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── images/                  # Product and hero images
└── public/                  # Static assets
```

## 🎨 Design Features

- Clean, modern UI with Tailwind CSS
- Smooth hover animations and transitions
- Accessible mobile navigation
- Optimized image loading
- Professional color scheme

## 📱 Responsive Design

All components are fully responsive with:
- Mobile-optimized layouts
- Touch-friendly interactive elements
- Adaptive typography and spacing
- Hamburger menu for mobile navigation

## 🙏 Assignment Details

**Submitted by**: Siddharth Paliwal  
**Repository**: [SiddharthPaliwal01/inka_assignment](https://github.com/SiddharthPaliwal01/inka_assignment)  
**Timeline**: 1-1.5 days

---

Built with ❤️ using React + TypeScript + Vite
