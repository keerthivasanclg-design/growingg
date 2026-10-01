# growing. — Digital Growth & Performance Marketing Platform
## Comprehensive Website Documentation & Architecture Guide

---

### Table of Contents
1. **Executive Overview**
2. **Brand Identity & Design System**
3. **Information Architecture & Page Hierarchy**
4. **Detailed Section-by-Section Breakdown**
5. **Interactive Tools & Simulators**
6. **Technical Architecture & Component Tree**
7. **Currency & Localization (INR)**
8. **User Workflows & Conversion Optimization (CRO)**
9. **Deployment & Developer Guide**

---

## 1. Executive Overview

**growing.** is a high-performance, conversion-engineered digital marketing agency and growth consultancy web platform. It serves modern D2C e-commerce brands, high-growth B2B SaaS ventures, professional clinic networks, and enterprise organizations seeking predictable, data-driven revenue scaling.

### Core Value Proposition
- Transitioning brands from guesswork and generic advertising to **scientific performance engineering**.
- Proprietary algorithmic multi-touch attribution, server-side Conversion APIs (CAPI), and rapid creative production sprints.
- Real-time client reporting dashboard and interactive revenue simulation tools.
- Transparent INR pricing, audit frameworks, and growth roadmap generation.

---

## 2. Brand Identity & Design System

The visual language communicates authority, precision, and technological sophistication.

| Token / Asset | Specification | Usage |
| :--- | :--- | :--- |
| **Brand Name** | `growing.` (lowercase with period) | Global navigation, headers, footer, metadata |
| **Primary Brand Color** | `#2b3785` (Deep Royal / Indigo Blue) | Buttons, gradients, logo backdrops, active badges, highlights |
| **Secondary Accent** | `#5970ff` (Vibrant Electric Indigo) | Glow effects, sub-labels, active state borders |
| **Dark Canvas** | `#0b0f19` to `#05070c` | Deep space background with subtle gradient masks |
| **Typography** | Inter / System Sans-serif | High legibility across micro-labels and large numerical statistics |
| **Vector Logo** | Geometric circle in `#2b3785` with sharp white stylized "G" glyph | Navbar, Hero visual, Modals, Footer, and Browser Favicon |
| **Favicon** | `/public/favicon.svg` & `/public/growing-logo.svg` | Browser tab and external embeds |

---

## 3. Information Architecture & Page Hierarchy

The single-page application (SPA) follows a structured conversion funnel designed to guide visitors from initial interest to taking action:

```
[Sticky Header / Navbar]
  ├── Brand Logo (growing.)
  ├── Section Anchor Links (Services, Simulator, Case Studies, Methodology, Free Audit)
  └── Primary CTA ("Get Free Proposal")
       │
[1. Hero Banner] ──────────► Value hook + Live 3D Interactive Smartphone Graphic
       │
[2. Elevate Brand Section] ──► Proof metrics (₹400 Cr+ revenue, 4.8x ROAS, 98.4% retention)
       │
[3. Marketing Services] ────► 6 Core Offerings with tabbed filtering & interactive drawers
       │
[4. Revenue Simulator] ─────► Real-time dynamic growth calculator with interactive sliders
       │
[5. Impact & Case Studies] ─► 4 Verifiable Client Case Studies with before/after breakdowns
       │
[6. 4-Stage Methodology] ───► The "growing. Sprint System" (Audit -> Creative -> Deploy -> Scale)
       │
[7. Modern Growth Audit] ───► Diagnostic engine comparing Legacy Agencies vs. growing.
       │
[8. Growth Vault & FAQs] ───► High-impact bento cards, risk-reversal guarantees & FAQ accordion
       │
[9. Global Footer] ─────────► Brand statement, direct contact, newsletter signup, legal links
       │
[Interactive Modal Engine] ─► 4-Step Customized Growth Roadmap & Proposal Builder
```

---

## 4. Detailed Section-by-Section Breakdown

### 4.1. Navigation Bar (`Navbar.tsx`)
- **Sticky Blur Effect**: High-blur frosted glass (`backdrop-blur-md bg-[#0b0f19]/80`) that stays persistent during scroll.
- **Micro-Indicators**: Live status indicator: `"Accepting 2 New Growth Partners for Q3"`.
- **Quick Links**: Direct jump navigation to `#services`, `#simulator`, `#case-studies`, and `#process`.
- **Responsive Mobile Navigation**: Mobile hamburger drawer with tap-friendly links and direct CTA trigger.

### 4.2. Hero Section (`MarketingPage.tsx` & `SmartphoneGraphic.tsx`)
- **Headline**: *"Scale Your Revenue with Precision Growth Engineering"*.
- **Sub-headline**: Details the combination of algorithmic media buying, server-side data infrastructure, and high-velocity creative testing.
- **Conversion Badges**:
  - Meta & Google Premier Partner Verified.
  - Audited 4.8x Average ROAS.
  - Direct Calendly / Proposal integration.
- **Visual Centerpiece**: An interactive 3D smartphone running the growing. live marketing hub.

### 4.3. Interactive 3D Smartphone Display (`SmartphoneGraphic.tsx`)
A realistic flagship smartphone mockup featuring:
- **3D Interactive Parallax Tilt**: Tracks mouse movement across X/Y axes with perspective transforms.
- **Titanium Chassis Realism**: Metallic brushed frame, physical volume/power buttons, anti-glare screen gradient sheen, and status bar (`09:41`, 5G, Wi-Fi, 98% Battery).
- **Interactive Dynamic Island**: Tap/click expands to reveal live Server-Side CAPI ingestion and real-time ad spend pacing (`₹35,000/hr`).
- **Interactive Performance Graph**:
  - Switch between **ROAS** (6.2x peak), **Leads** (342/day), **Revenue** (₹7.85L/day), and **CAC** (₹460).
  - 7 interactive day nodes (Mon–Sun) with dynamic SVG sparkline charts, fill gradients, and hover tooltips.
- **Live Notification Carousel**: Alternating updates from Meta Advantage+, Instagram Reels viral reach, and Google PMax.
- **Four Floating Spatial Badges**:
  - Top-Left: Audience Surge (`+38.4k Live visitors`).
  - Top-Right: High-ticket Deal Closed (`₹4,50,000`).
  - Bottom-Left: growing. AI Engine (`4.82x ROAS • Scale Mode`).
  - Bottom-Right: 30-Day Client Pipeline (`₹28,45,000`).

### 4.4. Elevate Brand Section (`ElevateBrandSection.tsx`)
Highlights validated performance benchmarks:
- **₹400 Cr+**: Total verified client revenue generated to date.
- **4.82x**: Mean Return on Ad Spend across all active client accounts.
- **98.4%**: Long-term partner retention rate over 12-month cohorts.
- **18 Days**: Average time to double client ad spend while maintaining target CAC.

### 4.5. Specialized Marketing Services (`MarketingServicesSection.tsx`)
Offers interactive category filtering (All, Paid Media, Creative, Data & CRO):
1. **Paid Meta & Search Dominance**: AI-driven bidding on Meta Ads (Advantage+), Google Ads (PMax, Search, YouTube), and LinkedIn.
2. **Server-Side Tracking & CAPI Infrastructure**: Zero-loss data architecture overcoming iOS 14.5+ privacy loss with 99.4% event match rates.
3. **High-Velocity Creative Production**: Direct-response video ads, TikTok/Reels hooks, and static ad variants tested weekly.
4. **Conversion Rate Optimization (CRO)**: Frictionless checkout funnels, landing page variants, and average order value (AOV) multipliers.
5. **Retention & Omnichannel Automation**: Klaviyo & WhatsApp automated journeys with tailored segmentation.
6. **B2B ABM & Pipeline Acceleration**: Cold outbound workflows, intent-driven paid social, and verified lead routing.

### 4.6. Interactive Revenue Potential Simulator (`MarkeingWhatWeDo.tsx`)
Allows prospective clients to model their growth before booking a call:
- **Input 1**: Monthly Ad Spend Slider (`₹50,000/mo` to `₹25,00,000/mo`).
- **Input 2**: Target Average Order / Deal Value (`₹800` to `₹25,000+`).
- **Real-Time Outputs**:
  - Estimated Monthly Traffic & Paid Clicks.
  - Calculated Projected Revenue in INR.
  - Estimated Net Ad Profit after platform fees.
  - Projected ROAS multiplier.
- Includes a 1-click button to *"Lock in this Projection via Custom Audit"*.

### 4.7. Verified Case Studies & Impact (`ImpactSection.tsx`)
Provides detailed metrics and before/after comparisons:
- **Aura Botanicals (D2C Skincare)**: Scaled from `₹35 Lakhs/mo` to `₹3.2 Crores/mo` with CAC cut by 67%.
- **CloudMatrix AI (B2B Enterprise SaaS)**: Built a `₹35 Crores` pipeline in 90 days with 62 Enterprise SQLs.
- **PulseWear (Fitness Apparel)**: Generated `₹5.2 Crores` in launch month revenue via viral creator drops.
- **Apex Clinic Network (Healthcare)**: Lowered patient acquisition cost to `₹2,800` per booked surgery across 14 locations.

### 4.8. The growing. Sprint Framework (`MarketingProcessSection.tsx`)
Walks through the agency's 4-stage operational roadmap:
1. **Stage 01: Deep Architecture Audit (Days 1–7)**: Finding pixel leaks, baseline CAC, and audience overlap.
2. **Stage 02: Creative Engine Deployment (Days 8–14)**: Scripting and producing 20+ hooks and ad creatives.
3. **Stage 03: Algorithmic Launch & Scale (Days 15–30)**: Deploying server-side CAPI and scaling ad budgets.
4. **Stage 04: Omnichannel Compound (Day 31+)**: Adding retention automations, retargeting, and CRO tests.

### 4.9. Growth Diagnostic Engine (`ModernMarketingSection.tsx`)
An interactive checklist allowing visitors to audit their current performance:
- Tests for tracking discrepancies, creative fatigue, and attribution models.
- Generates a real-time **Efficiency Score** and flags budget bottlenecks.

### 4.10. Growth Bento Vault & FAQs (`ModernMarketingCards.tsx`)
- High-impact bento cards highlighting zero long-term lock-in contracts, live Slack channel communication, and proprietary attribution software.
- Full interactive accordion addressing top client objections (time-to-results, creative ownership, minimum spend thresholds, and tracking audits).

### 4.11. Global Footer (`Footer.tsx`)
- Brand identity summary, social media links, direct email (`growth@growing.agency`), and physical office locations (Bengaluru, Mumbai, Singapore).
- Interactive newsletter signup for weekly growth breakdowns.

---

## 5. Interactive Free Proposal Generator (`ProposalModal.tsx`)

A multi-step modal dialog that collects client requirements and delivers a tailored proposal:

```
[Step 1: Focus Area Selection]
   ├── Paid Social (Meta/TikTok)
   ├── Paid Search (Google/PMax)
   ├── Conversion Infrastructure & CAPI
   └── Full-Funnel Growth Overhaul
           ▼
[Step 2: Monthly Ad Spend Budget in INR]
   ├── Tier 1: ₹50,000 – ₹1,50,000 / month
   ├── Tier 2: ₹1,50,000 – ₹5,00,000 / month
   ├── Tier 3: ₹5,00,000 – ₹15,00,000 / month
   └── Tier 4: ₹15,00,000+ / month (Enterprise Scale)
           ▼
[Step 3: Contact & Store Information]
   ├── Full Name & Business Email
   ├── Company Name & Website URL
   └── Current Primary Challenge (Text Field)
           ▼
[Step 4: Success & Strategy Overview]
   ├── Calculated Growth Trajectory
   ├── Instant Audit Confirmation
   └── Direct Calendar Booking Link
```

---

## 6. Technical Architecture & Component Tree

Built with **React (Vite)**, **TypeScript**, and **Tailwind CSS**.

### File Structure:
```
/
├── public/
│   ├── favicon.svg               # SVG browser favicon with the growing. icon
│   └── growing-logo.svg          # Standalone SVG brand mark (#2b3785)
├── src/
│   ├── components/
│   │   ├── ElevateBrandSection.tsx     # Proof metrics & agency credibility benchmarks
│   │   ├── Footer.tsx                  # Global footer with links & newsletter
│   │   ├── GrowingLogo.tsx             # Universal SVG logo component
│   │   ├── ImpactSection.tsx           # 4 detailed case studies with metric tags
│   │   ├── MarkeingWhatWeDo.tsx        # Interactive ad spend & ROAS calculator
│   │   ├── MarketingPage.tsx           # Main application layout & hero section
│   │   ├── MarketingProcessSection.tsx # 4-stage sprint methodology
│   │   ├── MarketingServicesSection.tsx# 6 service offerings with filter tabs
│   │   ├── ModernMarketingCards.tsx    # Bento feature grid & interactive FAQs
│   │   ├── ModernMarketingSection.tsx  # Agency diagnostic & comparison tool
│   │   ├── Navbar.tsx                  # Sticky header with anchor navigation
│   │   ├── ProposalModal.tsx           # 4-step proposal generator modal
│   │   └── SmartphoneGraphic.tsx       # 3D interactive smartphone mockup
│   ├── App.tsx                         # Root app wrapper
│   ├── main.tsx                        # React DOM client entry point
│   └── index.css                       # Tailwind CSS directives & custom keyframes
├── index.html                          # HTML5 shell, SEO meta tags & favicon links
├── package.json                        # Project dependencies & build scripts
└── metadata.json                       # AI Studio applet configuration
```

### Key Libraries:
- **`lucide-react`**: Vector iconography (arrows, badges, metrics, social icons, security shields).
- **`tailwindcss`**: Utility-first responsive styling and typography.
- **`vite`**: Build tool and hot-reloading development server.

---

## 7. Currency & Localization (INR)

All financial and performance figures are standardized in **Indian Rupees (INR)** with regional formatting:

- **Currency Symbol**: `₹` (Indian Rupee).
- **Number System**: Formatted with Lakhs and Crores (e.g., `₹50,000`, `₹15,00,000`, `₹400 Cr+`).
- **Simulator Dynamic Formatter**: Uses `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })` to display dynamic calculations cleanly.

---

## 8. User Workflows & Conversion Optimization (CRO)

1. **Self-Guided Qualification**: Visitors test their numbers in the **Scale Simulator** (`MarkeingWhatWeDo.tsx`) or take the **Growth Diagnostic** (`ModernMarketingSection.tsx`) to evaluate their ad efficiency.
2. **Low-Friction Action**: Every CTA triggers the **Proposal Modal** prefilled with the user's selected service.
3. **Clear Reassurance**: Zero long-term lock-in terms, verified client case studies, and transparent timelines reduce hesitation before booking.

---

## 9. Deployment & Developer Guide

### Development Server
```bash
npm install
npm run dev
# Server runs at http://localhost:3000
```

### Production Build & Linting
```bash
# Type check and lint codebase
npm run lint

# Compile optimized static bundle
npm run build
```

### Customization Points
- **Adjust Brand Color**: Update `#2b3785` in `GrowingLogo.tsx` and relevant Tailwind classes.
- **Update Case Studies**: Modify the `caseStudies` array in `ImpactSection.tsx`.
- **Change Pricing/Budget Tiers**: Update the budget ranges in `ProposalModal.tsx` and initial slider bounds in `MarkeingWhatWeDo.tsx`.
