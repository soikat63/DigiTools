<div align="center">

<img src="https://img.shields.io/badge/⚡-DigiTools-7C3AED?style=for-the-badge&labelColor=1a1a2e&color=7C3AED" alt="DigiTools" height="50"/>

# DigiTools

### Premium Digital Tools Marketplace

<p>A modern, fully responsive digital tools marketplace where users can browse, add to cart, and purchase premium AI-powered digital products — all in one place.</p>

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge)](https://daisyui.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[🚀 Live Demo](#) &nbsp;·&nbsp; [🐛 Report Bug](#) &nbsp;·&nbsp; [✨ Request Feature](#)

</div>

---

## 📌 About The Project

**DigiTools** is a pixel-perfect digital tools marketplace built with **React.js** and **Tailwind CSS**. Users can explore 9 premium digital products across categories like AI writing, design, SEO, invoicing, and more. The app features a smooth cart system, live item count, toast notifications, and a fully responsive layout — from mobile to desktop.

> Built as an assignment project following a Figma design with pixel-perfect accuracy.

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|:---|:---:|:---|
| **React.js** | 19 | Component-based UI framework |
| **Tailwind CSS** | 3 | Utility-first CSS styling |
| **DaisyUI** | 4 | Pre-built Tailwind UI components |
| **React-Toastify** | 11 | Toast notifications |
| **Lucide React** | 0.383 | Icon library |
| **Vite** | 6 | Lightning-fast build tool |
| **JavaScript** | ES6+ | Core programming language |
| **JSON** | — | Local product data storage |

---

## ✨ Key Features

### 🛒 1. Smart Cart System
A fully functional cart where users can add products, remove individual items, and proceed to checkout. The **navbar badge updates in real-time** with the cart count. Checkout clears the entire cart instantly. Every action triggers a **React-Toastify** notification — add, remove, duplicate warning, and checkout success.

### 📦 2. Product & Cart Tab Toggle
A clean toggle UI lets users switch between the **Products** view and the **Cart** view without any page reload. The Cart button dynamically shows the live item count (e.g. `Cart (2)`), so users always know what's in their bag.

### 📱 3. Fully Responsive Design
The entire layout adapts seamlessly across **mobile, tablet, and desktop**. The navbar includes a **hamburger menu** on mobile with smooth open/close toggle. Product cards shift from 1-column on mobile to a 3-column grid on desktop, and the pricing section scales cleanly across all breakpoints.

---

## 🎯 Bonus Features

- ✅ **"Added to Cart" button state** — Buy Now button turns green with a checkmark after adding
- ✅ **Duplicate prevention** — Adding the same product twice shows a warning toast
- ✅ **Gradient pricing cards** — Pro card and all buttons use a custom `#4F39F6 → #9514FA` gradient
- ✅ **Pixel-perfect Figma match** — Every section matches the original Figma design

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/digitools.git

# 2. Go into the project folder
cd digitools

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build
```

---

## 📁 Project Structure

```
digitools/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky responsive navbar with hamburger
│   │   ├── Banner.jsx          # Hero banner section
│   │   ├── Stats.jsx           # Stats bar (50K+ users, 200+ tools)
│   │   ├── MainSection.jsx     # Products / Cart toggle section
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── Cart.jsx            # Cart with remove & checkout
│   │   ├── Steps.jsx           # Get started in 3 steps
│   │   ├── Pricing.jsx         # 3-tier pricing plans
│   │   ├── CTA.jsx             # Call-to-action section
│   │   └── Footer.jsx          # Dark footer with social icons
│   ├── data/
│   │   └── products.json       # 9 product entries (JSON)
│   ├── App.jsx                 # Root component + cart state
│   └── main.jsx                # Entry point
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 📸 Screenshots

| Section | Preview |
|:---|:---|
| 🏠 Hero Banner | Full-width hero with heading, description & CTA buttons |
| 📦 Products Grid | 3-column responsive card grid with tag badges |
| 🛒 Cart View | Item list with remove button, total & checkout |
| 💰 Pricing | 3-tier plans with gradient Pro card |
| 🦶 Footer | Dark footer with nav links & social icons |

---

## 👨‍💻 Author

<div align="center">

Made with ❤️ and lots of ☕

**DigiTools** © 2025 — All rights reserved.

</div>