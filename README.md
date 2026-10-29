<div align="center">

# Billing Dashboard

### High-Performance Monochromatic Billing and Operations Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?style=flat-square&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![TanStack Table](https://img.shields.io/badge/TanStack_Table-v8-FF4154?style=flat-square&logo=react-table&logoColor=white)](https://tanstack.com/table/v8)
[![Recharts](https://img.shields.io/badge/Recharts-2.10-22b5bf?style=flat-square)](https://recharts.org/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Production_Live-0070F3?style=flat-square&logo=vercel)](https://billing-dashboard-three.vercel.app)

<p align="center">
  A production-ready monochromatic billing, transaction tracking, and business operations dashboard built with Next.js 14 App Router, TypeScript, shadcn/ui primitives, and Tailwind CSS. Engineered with strict contrast ergonomics, localized currency tracking in Indian Rupee (INR), and accessible data interfaces.
</p>

<p align="center">
  <a href="https://billing-dashboard-three.vercel.app" target="_blank"><strong>Live Demo</strong></a> &bull;
  <a href="https://github.com/anupam-codespace/Monochromatic-UI-Dashboard" target="_blank"><strong>GitHub Repository</strong></a> &bull;
  <a href="#frontend-technical-specifications"><strong>Frontend Technicalities</strong></a> &bull;
  <a href="#interactive-modules-and-user-capabilities"><strong>User Interactions</strong></a> &bull;
  <a href="#how-to-use-the-application"><strong>How to Use</strong></a> &bull;
  <a href="#getting-started"><strong>Setup Guide</strong></a>
</p>

---

</div>

## Overview

Billing Dashboard delivers a streamlined, high-contrast operational console for engineering leads, finance controllers, and administrators. By eliminating distracting color noise in favor of an intentional monochromatic grayscale palette, the interface highlights critical financial metrics, client statuses, and transaction flows with maximum legibility.

The platform provides end-to-end frontend interfaces for tracking executive revenue metrics, inspecting monthly gross billing trends, administering verified client directories with automated avatar generation, reviewing multi-status order lifecycles, and managing regional tenant configurations.

---

## Frontend Technical Specifications

The application adheres to modern frontend engineering standards with an emphasis on type safety, modular component contracts, accessible interaction states, and predictable client-server rendering.

### 1. Framework and Layout Architecture
- **Next.js 14 App Router**: Implements nested server layouts (`layout.tsx`), root metadata injection, and client-side page transitions with route prefetching.
- **TypeScript 5 Strict Mode**: End-to-end typed interfaces across component props, table column definitions (`ColumnDef<Payment>`, `ColumnDef<Setting>`), metric cards (`CardProps`), and sales records (`SalesProps`).
- **Deterministic Hydration**: Server-rendered layouts paired with client boundary components (`"use client"`), eliminating hydration mismatches across server and client passes.

### 2. Data Table Subsystem
- **TanStack Table v8 Core**: Powers both the User Directory and Orders Management modules via headless table logic.
- **Custom Cell Renderers**: Declarative column definitions support dynamic badge coloring (semantic pill styling for `Pending`, `Processing`, and `Completed` states), rich cell compositions (avatar paired with customer identity), and localized monetary value rendering.
- **Decoupled Architecture**: Generic `DataTable<TData, TValue>` abstraction accepts arbitrary dataset shapes and column configurations, facilitating maintainability across diverse dashboard views.

### 3. Data Visualization Subsystem
- **Recharts Integration**: Implements responsive bar graphs wrapped inside `ResponsiveContainer` to guarantee fluid reflow across container resizes.
- **Custom Axis and Tick Formatting**: Y-axis values dynamically format raw billing integers into localized currency representations (`₹{value}`) with clean, non-intrusive muted axis lines.
- **Performance-Optimized Geometry**: Rounded top-corner bar geometries (`radius={[4, 4, 0, 0]}`) engineered with subtle hover states for data inspection.

### 4. Headless Design System and UI Primitives
- **Radix UI Primitives**: Powers accessible tooltip overlays (`@radix-ui/react-tooltip`) and polymorphic slot components (`@radix-ui/react-slot`) for composable button architectures.
- **Tailwind CSS Utility Architecture**: Strict design tokens leveraging utility classes, conditional class merging via `clsx` and `tailwind-merge`, and responsive container queries.
- **Lucide React Icons**: Consistent stroke-width iconography mapped to key operational tasks (`IndianRupee`, `UsersRound`, `ShoppingCart`, `LayoutDashboard`, `Settings`, `Activity`, `CreditCard`).

### 5. Responsive Navigation Subsystem
- **Window Width Detection**: Integrated `@react-hook/window-size` hook dynamically calculates viewport thresholds, automatically collapsing the sidebar navigation on viewports below 768px.
- **Stateful Sidebar Expansion**: Desktop users can toggle full or compact navigation states with smooth SVG chevron transitions, while mobile users receive compact icon-driven bars with hover tooltips.
- **Active Route Highlighting**: Employs Next.js `usePathname` hook to compute button variant states (`default` vs. `ghost`) to provide real-time visual feedback for current route placement.

---

## Interactive Modules and User Capabilities

Billing Dashboard provides interactive touchpoints across four dedicated operational modules:

### 1. Executive Dashboard Overview (`/`)
- **Key Performance Indicator Cards**: High-visibility summary tiles detailing Total Revenue (`₹45,23,189.00`), Subscription volume, Total Sales, and Active Sessions with month-over-month variance percentages.
- **Interactive Revenue Chart**: Monthly turnover bar chart visualizing billing volume across all twelve calendar months.
- **Recent Sales Ledger**: Real-time sales activity list displaying customer avatars, verified account names, contact emails, and individual transaction amounts.

### 2. User and Client Directory (`/users`)
- **Customer Data Grid**: Searchable client records displaying customer names, active email handles, timestamp of their most recent order, and primary payment rail.
- **Automated Identicon Generation**: Client profile images are procedurally generated using the DiceBear Lorelei SVG engine based on client name seeds, providing unique avatars without external image hosting dependencies.

### 3. Orders and Invoicing Ledger (`/orders`)
- **Transaction Table**: Granular invoice logs featuring unique Order IDs (`ORD001` through `ORD015`), order timestamps, and accurate invoice amounts in INR.
- **Semantic Status Badging**: Instant status recognition via color-coded badges indicating transaction states:
  - `Completed`: Light green semantic badge
  - `Processing`: Light orange semantic badge
  - `Pending`: Light red semantic badge
- **Payment Method Attribution**: Transparent tracking of transaction rails including UPI (PhonePe, Google Pay, Paytm, BHIM, Cred Pay), Net Banking (HDFC, ICICI, Axis, SBI, Kotak), and Credit Card (Razorpay).

### 4. System Settings and Operational Preferences (`/settings`)
- **Tenant Profile**: Displays verified account ownership (`Anupam Saha (@anupam-codespace)`).
- **Financial Baseline**: Displays base operating currency set to `INR (₹) — Indian Rupee` and payment gateway integration (`Razorpay / UPI Multi-rail`).
- **Localization Configuration**: Pre-set preferences for `Asia/Kolkata (IST, UTC+05:30)` timezone and Indian numbering standards (Lakhs / Crores).

---

## How to Use the Application

Follow this guide to explore and operate Billing Dashboard:

### Step 1: Navigating the Dashboard
1. Open the application at [https://billing-dashboard-three.vercel.app](https://billing-dashboard-three.vercel.app).
2. Use the left sidebar to navigate between **Dashboard**, **Users**, **Orders**, and **Settings**.
3. On desktop, click the circular chevron button on the sidebar edge to collapse or expand the navigation drawer. Hover over any icon in the collapsed state to view instant tooltip labels.

### Step 2: Monitoring Revenue and Sales
1. On the main Dashboard view, review the four metric cards at the top for real-time gross revenue and monthly growth rates.
2. Hover over the bars in the **Overview** chart to inspect monthly revenue figures.
3. Review the **Recent Sales** column on the right side to inspect the latest high-value customer acquisitions.

### Step 3: Inspecting Customer Records
1. Click **Users** in the sidebar navigation.
2. Browse through the customer roster to review client profiles, unique identicons, and contact details.
3. Verify preferred payment rails for each customer (e.g., UPI, Net Banking, or Credit Card).

### Step 4: Tracking Order Statuses and Payments
1. Click **Orders** in the sidebar navigation.
2. Locate specific transaction identifiers (such as `ORD001` or `ORD010`).
3. Examine the **Status** column to differentiate between orders awaiting payment (`Pending`), orders in settlement (`Processing`), and successfully fulfilled invoices (`Completed`).
4. Review the localized amount in the **Amount** column to verify total settlement values.

### Step 5: Reviewing System Configurations
1. Click **Settings** in the sidebar navigation.
2. Review system preferences, registered tenant ownership, default payment gateway rails, and regional timezone settings.

---

## Getting Started

### Prerequisites

Ensure your local workstation has the following installed:
- Node.js 18.17.0 or higher (Node 20+ recommended)
- npm 9+ (or pnpm / yarn)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anupam-codespace/Monochromatic-UI-Dashboard.git
```

2. Change into the project directory:
```bash
cd Monochromatic-UI-Dashboard
```

3. Install project dependencies:
```bash
npm install
```

### Development Server

Start the local development server:
```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to interact with the dashboard.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launches the Next.js local development server |
| `npm run build` | Compiles the production application bundle with type validation and static page generation |
| `npm run start` | Boots the compiled Next.js production build |
| `npm run lint` | Executes ESLint validation to check code quality and conventions |

---

## Production Deployment on Vercel

The application is deployed on Vercel edge infrastructure.

- **Production URL**: [https://billing-dashboard-three.vercel.app](https://billing-dashboard-three.vercel.app)
- **Vercel Project Name**: `billing-dashboard`
- **Framework Preset**: Next.js (App Router)

### Deploying Updates via Vercel CLI

```bash
# Deploy to preview
npx vercel

# Deploy to production
npx vercel --prod
```

---

## Author & Maintainer

**Anupam Saha**
- GitHub: [@anupam-codespace](https://github.com/anupam-codespace)
- Project Repository: [Monochromatic-UI-Dashboard](https://github.com/anupam-codespace/Monochromatic-UI-Dashboard)

---


