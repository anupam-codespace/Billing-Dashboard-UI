# Billing Dashboard — Monochromatic UI

A minimalist, high-contrast monochromatic billing and business analytics dashboard engineered with Next.js 14, shadcn/ui primitives, Tailwind CSS, and TypeScript. Designed for clarity, operational speed, and seamless financial tracking with native Indian Rupee (INR) localization and modern payment rail integration.

---

## Overview

The Monochromatic Billing Dashboard delivers an uncluttered, high-density interface tailored for operations leads, financial controllers, and modern SaaS administrators. By deliberately eliminating saturated multi-color palettes in favor of a calibrated grayscale and monochromatic visual language, data hierarchy and critical metrics take precedence without visual fatigue.

Key capabilities include:
- Executive Revenue Intelligence: Real-time tracking of gross sales, recurring subscriptions, active sessions, and month-over-month percentage variances.
- Dynamic Visual Analytics: Interactive bar charts visualizing monthly recurring revenue and seasonal disbursement cycles.
- Customer & Account Registry: High-throughput client management table featuring Indian profile contexts, automated avatar seeds, and multi-rail payment attribution.
- Transaction & Order Ledger: Live order tracking with status categorization (Pending, Processing, Completed) and localized Indian Rupee (INR) transaction amounts.
- Regional Configuration: Pre-configured preferences for INR (₹) base denomination, Asia/Kolkata (IST) timezone, and multi-rail gateway settlement (UPI, Net Banking, Razorpay).

---

## Architectural & Design Highlights

- Design System: Monochromatic interface adhering to strict contrast ratios, responsive spacing tokens, and clean typography powered by Inter.
- Regional Financial Localization: Formatted in accordance with Indian financial conventions, utilizing the INR (₹) symbol, Lakhs/Crores numbering considerations, and UPI/Indian banking rails.
- Component Architecture: Built entirely upon modular shadcn/ui and Radix UI headless primitives for maximum accessibility and performance.
- Resilient Layout: Collapsible desktop sidebar with responsive transitions and mobile drawer adaptability.
- Deterministic Server Rendering: Built with Next.js App Router for optimal first contentful paint (FCP) and zero client-server hydration discrepancy.

---

## Modules and Pages

### 1. Dashboard Overview (`/`)
- Summary Metric Cards: High-level KPI indicators for Total Revenue, Subscriptions, Sales Velocity, and Active Users.
- Revenue Chart: Responsive bar graph detailing monthly billing performance with currency tick formatting.
- Recent Sales Ledger: Granular log of recent high-value sales attributing verified client identities with associated amounts.

### 2. Users Directory (`/users`)
- Client Data Grid: Interactive TanStack table listing active business accounts, contact emails, recent invoice dates, and preferred settlement methods (UPI PhonePe, Google Pay, Razorpay, HDFC/ICICI Net Banking).
- Dynamic Identicons: Notionist and Lorelei DiceBear SVG seed generation for customer profiles.

### 3. Orders & Invoicing (`/orders`)
- Transaction Registry: Tabular overview of invoice IDs, order statuses with semantic pill badges (Completed, Processing, Pending), settlement timestamps, payment mechanisms, and exact transaction values in INR (₹).

### 4. Settings & Preferences (`/settings`)
- Operational Preferences: System registry tracking active tenant ownership, base currency, payment gateways, automated notifications, regional formats, and UI theme profiles.

---

## Technology Stack

- Framework: Next.js 14 (App Router, Server Components)
- Language: TypeScript 5.x (Strict Type Safety)
- Styling: Tailwind CSS 3.3 with PostCSS and Autoprefixer
- UI Primitives: shadcn/ui, Radix UI (Slot, Tooltip)
- Data Visualization: Recharts (ResponsiveContainer, BarGraph, XAxis, YAxis)
- Table Engine: TanStack Table v8
- Icons: Lucide React (Native IndianRupee, LayoutDashboard, ShoppingCart, UsersRound, Settings)
- Utility Libraries: clsx, tailwind-merge, class-variance-authority

---

## Getting Started

### Prerequisites

Ensure you have the following environments configured locally:
- Node.js 18.17.0 or later (Node 20+ recommended)
- npm 9+ (or pnpm / yarn)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anupam-codespace/Monochromatic-UI-Dashboard.git
```

2. Navigate to the project root:
```bash
cd Monochromatic-UI-Dashboard
```

3. Install project dependencies:
```bash
npm install
```

### Development Server

Launch the local development environment:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server at port 3000 |
| `npm run build` | Compiles the production build with type checking and static page generation |
| `npm run start` | Boots the compiled production server |
| `npm run lint` | Runs Next.js ESLint diagnostics to inspect code quality |

---

## Project Structure

```
├── public/                 # Static assets and icons
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Tailwind core and theme layers
│   │   ├── layout.tsx      # Root application layout and metadata
│   │   ├── page.tsx        # Dashboard home with metrics and chart
│   │   ├── orders/         # Order and invoice management
│   │   ├── settings/       # Account and system settings
│   │   └── users/          # User directory and client profiles
│   ├── components/         # Reusable dashboard components
│   │   ├── ui/             # shadcn/ui atomic elements (button, nav, sidebar, table, tooltip)
│   │   ├── BarChart.tsx    # Monthly revenue bar chart component
│   │   ├── card.tsx        # KPI metrics card wrapper
│   │   ├── DataTable.tsx   # TanStack table renderer
│   │   ├── PageTitle.tsx   # Standardized page title header
│   │   └── SalesCard.tsx   # Individual transaction card
│   └── lib/
│       └── utils.ts        # Class merging utilities (clsx + twMerge)
├── components.json         # shadcn/ui configuration
├── next.config.js          # Next.js build configuration
├── package.json            # Project manifest and dependencies
├── tailwind.config.js      # Tailwind theme tokens and extensions
└── tsconfig.json           # TypeScript compilation configuration
```

---

## Production Deployment on Vercel

This repository is optimized for one-click deployment onto the Vercel edge network.

### Deployment Configuration

When setting up your Vercel project:

1. Import the repository: `https://github.com/anupam-codespace/Monochromatic-UI-Dashboard.git`
2. Specify the Project Name:
```
Billing Dashboard
```
3. Framework Preset: Automatically detected as **Next.js**.
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Install Command: `npm install`

### Deploying via Vercel CLI

Alternatively, deploy directly from your local terminal using the Vercel CLI:

```bash
# Authenticate with Vercel
npx vercel login

# Link and deploy with project name "Billing Dashboard"
npx vercel --name "Billing Dashboard"

# For production deployment
npx vercel --prod
```

Once deployed, Vercel provides automated SSL certificate provisioning, continuous edge caching, and preview environments for incoming pull requests.

---

## Author & Maintainer

**Anupam Saha**
- GitHub: [@anupam-codespace](https://github.com/anupam-codespace)
- Project Repository: [Monochromatic-UI-Dashboard](https://github.com/anupam-codespace/Monochromatic-UI-Dashboard)

---

## License

This project is licensed under the MIT License — free for commercial, internal, and personal projects.
