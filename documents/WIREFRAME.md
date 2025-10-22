# 🎨 CPH Acoustics Website - Wireframe & Design Specifications
**Version:** 2.0  
**Date:** 22 October 2025  
**Owner:** Konrad  
**Business Focus:** Embedded DSP Development, Bluetooth Audio, Hardware/PCB Design Consulting

---

## 📋 Table of Contents
1. [Component Library Strategy](#component-library-strategy)
2. [Design System](#design-system)
3. [Page Wireframes](#page-wireframes)
4. [Component Mapping](#component-mapping)
5. [Responsive Breakpoints](#responsive-breakpoints)
6. [Animation Specifications](#animation-specifications)

---

## 🎯 Business Context

CPH Acoustics is a technical consulting firm specializing in:
- **Embedded DSP Development** - Custom algorithms, real-time processing, optimization
- **Bluetooth Audio Solutions** - Audio stack integration, low-latency, certification
- **Hardware & PCB Design** - Analog audio circuits, digital routing, EMC/EMI
- **Acoustic Engineering** - Microphone arrays, voice control, handsfree systems

**Target Audience:** Electronics companies, product managers, engineering teams developing audio products

**Website Goal:** Position CPH Acoustics as a trusted technical partner for B2B audio product development

---

## 🎯 Component Library Strategy

### Modern UI vs Lightswind UI - Integration Plan

**Modern UI (Radix UI + Tailwind CSS)**  
*Best for:* Interactive, accessible components with complex state management  
- Built on Radix UI primitives (excellent accessibility)
- Next.js 15 ready with React Server Components
- TypeScript native
- Source: https://modern-ui.org

**Lightswind UI**  
*Best for:* Layout components, hero sections, and marketing-focused elements  
- Optimized for landing pages
- Beautiful animations and transitions
- Marketing-oriented components

### Component Distribution

| Component Type | UI Library | Reason |
|----------------|-----------|---------|
| Buttons | Modern UI | Accessibility, variants, states |
| Form inputs | Modern UI | Validation, accessibility |
| Cards | Modern UI | Interactive states, hover effects |
| Avatars | Modern UI | Consistent sizing, fallbacks |
| Accordions | Modern UI | ARIA compliance, animations |
| Dropdown Menu | Modern UI | Keyboard navigation, portal support |
| Hero Sections | Lightswind | Marketing-focused, full-width layouts |
| Navbar | Lightswind | Sticky scroll effects, transitions |
| Footer | Lightswind | Marketing layout patterns |
| Grid Layouts | TailwindCSS | Native grid utilities |

---

## 🎨 Design System

### Color Palette
```css
/* Brand Colors (from logo) */
--primary: #1B2B4A;        /* Navy Blue - Logo Text */
--accent-primary: #00E5CC; /* Bright Cyan - Logo Gradient Top */
--accent-secondary: #00CED1; /* Turquoise - Logo Gradient Mid */
--accent-tertiary: #00B4D8;  /* Deep Cyan - Logo Gradient Bottom */
--background: #FFFFFF;     /* White */
--background-alt: #F9FAFB; /* Off-white */
--text: #1B2B4A;          /* Navy Blue - matches logo */

/* Supporting Colors */
--text-muted: #64748B;    /* Slate Gray */
--muted: #F1F5F9;         /* Light slate background */
--border: #E2E8F0;        /* Border slate */

/* Semantic Colors */
--success: #22C55E;
--warning: #F59E0B;
--error: #EF4444;
--info: #00CED1;          /* Uses brand turquoise */
```

### Typography Scale
```css
/* Font Families */
--font-primary: 'Inter', -apple-system, sans-serif;
--font-secondary: 'Satoshi', sans-serif;

/* Type Scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */
```

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Border Radius
```css
--radius-sm: 0.125rem;   /* 2px */
--radius-md: 0.375rem;   /* 6px */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 0.75rem;    /* 12px */
--radius-2xl: 1rem;      /* 16px */
--radius-full: 9999px;
```

---

## 📄 Page Wireframes

### 1. HOME PAGE

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (Lightswind - Sticky)                              │
│  [Logo]              [About] [Services] [Projects] [Contact]│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION (Lightswind - Full Width Video/Image)        │
│                                                             │
│              "Engineering Audio Excellence"                 │
│           "Expert Audio Development Consulting"             │
│                                                             │
│    Embedded DSP • Bluetooth Audio • Hardware Design        │
│                                                             │
│    [View Our Projects] [Contact Us] ← Modern UI Buttons    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  INTRO SECTION                                              │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Your Partner in Audio Product Development          │  │
│  │                                                       │  │
│  │  CPH Acoustics is a network of specialized          │  │
│  │  consultants supporting companies in their audio     │  │
│  │  product development. We bring deep expertise in     │  │
│  │  embedded DSP, Bluetooth audio solutions, and        │  │
│  │  hardware design—from concept through production.    │  │
│  │                                                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FEATURED PROJECTS (Grid - 3 columns)                       │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │  Card    │  │  Card    │  │  Card    │  ← Modern UI    │
│  │  Image   │  │  Image   │  │  Image   │     Cards       │
│  │  Title   │  │  Title   │  │  Title   │                 │
│  │  Type    │  │  Type    │  │  Type    │                 │
│  │  [View]  │  │  [View]  │  │  [View]  │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SERVICES PREVIEW                                           │
│                                                             │
│  ┌────────────────┐  ┌────────────────┐                   │
│  │  🔊 Icon       │  │  📡 Icon       │                   │
│  │  Embedded DSP  │  │  Bluetooth     │                   │
│  │  Development   │  │  Audio         │                   │
│  │  Custom algos, │  │  Low-latency,  │                   │
│  │  real-time     │  │  certification │                   │
│  └────────────────┘  └────────────────┘                   │
│                                                             │
│  ┌────────────────┐  ┌────────────────┐                   │
│  │  ⚡ Icon       │  │  🎙️ Icon       │                   │
│  │  Hardware &    │  │  Acoustic      │                   │
│  │  PCB Design    │  │  Engineering   │                   │
│  │  Analog/digital│  │  Mic arrays,   │                   │
│  │  circuits      │  │  voice control │                   │
│  └────────────────┘  └────────────────┘                   │
│                                                             │
│           [View All Services] ← Modern UI Button           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CTA SECTION (Lightswind)                                   │
│                                                             │
│     "Ready to bring your audio product to market?"         │
│            [Start a Project] ← Modern UI Button            │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER (Lightswind)                                        │
│                                                             │
│  CPH Acoustics        Quick Links        Connect            │
│  Andebakkesti 6       About              [LinkedIn]         │
│  2000 Frederiksberg   Services           [Email]            │
│  Denmark              Projects                              │
│                       Contact                               │
│  +45 2728 2817                                              │
│  info@cph-acoustics.com                                     │
│                                                             │
│  © 2025 CPH Acoustics (Ulrik Kjems). All rights reserved.  │
│  CVR: DK44982889  |  [Privacy Policy] [Terms]              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Components Used:**
- Lightswind: Navbar, Hero, Footer, CTA Section
- Modern UI: Buttons, Cards (3x), Service Cards (4x)
- TailwindCSS: Grid layouts, spacing

---

### 2. ABOUT PAGE

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAGE HERO (Lightswind)                                     │
│                                                             │
│              "About CPH Acoustics"                          │
│         Expert Audio Engineering Consulting                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  COMPANY STORY                                              │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Our Mission                                         │  │
│  │                                                       │  │
│  │  CPH Acoustics was formed to support companies in    │  │
│  │  their development requirements in embedded DSP,     │  │
│  │  Bluetooth audio, and hardware design. We provide    │  │
│  │  specialized consulting from concept through         │  │
│  │  production for audio product development.           │  │
│  │                                                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  VALUES SECTION (3 columns)                                 │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Card     │  │ Card     │  │ Card     │  ← Modern UI    │
│  │ 🔧 Icon  │  │ 💡 Icon  │  │ 🤝 Icon  │     Cards       │
│  │ Technical│  │ Innova-  │  │ Partner- │                 │
│  │ Excellence│ │ tion     │  │ ship     │                 │
│  │ Text     │  │ Text     │  │ Text     │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  TEAM SECTION                                               │
│                                                             │
│            "Founder & Consultant Network"                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Avatar                                             │  │
│  │  Ulrik Kjems - Founder                              │  │
│  │  Lead Consultant                                     │  │
│  │  Bio: Expertise in DSP, Bluetooth, Hardware Design  │  │
│  │  Location: Copenhagen, Denmark                       │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  Consultant Network Expertise Areas:                        │
│  • DSP Algorithm Development                                │
│  • Bluetooth & Wireless Audio                               │
│  • Analog & Digital Hardware Design                         │
│  • Acoustic Modeling & Measurement                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CTA SECTION                                                │
│       "Let's discuss your audio development needs"          │
│            [Get in Touch] ← Modern UI Button               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘
```

**Components Used:**
- Lightswind: Navbar, Page Hero, Footer
- Modern UI: Cards (3x values), Avatars (4-6x team members), Button
- TailwindCSS: Grid layouts

---

### 3. SERVICES PAGE

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAGE HERO (Lightswind)                                     │
│                                                             │
│              "Our Services"                                 │
│       Expert Audio Development Consulting                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SERVICES OVERVIEW                                          │
│                                                             │
│  "We offer specialized consulting in embedded DSP,          │
│   Bluetooth audio, and hardware design for audio product    │
│   development—from concept through production."             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SERVICE 1 - Embedded DSP Development                       │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ ┌─────────────┐                                      │  │
│  │ │   Image     │  Custom DSP Algorithm Development    │  │
│  │ │  (DSP chip) │                                       │  │
│  │ │             │  • Real-time audio processing        │  │
│  │ └─────────────┘  • Echo cancellation & beamforming   │  │
│  │                  • Algorithm optimization            │  │
│  │                  • Embedded platform integration     │  │
│  │                                                       │  │
│  │                  [Learn More] ← Modern UI Button     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SERVICE 2 - Bluetooth Audio Solutions                      │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  Bluetooth Audio Stack               │  │
│  │                                                       │  │
│  │  • Low-latency audio transmission  ┌─────────────┐  │  │
│  │  • Audio codec integration         │   Image     │  │  │
│  │  • Multi-device connectivity       │ (Bluetooth) │  │  │
│  │  • Power optimization              │             │  │  │
│  │  • Certification support           └─────────────┘  │  │
│  │                                                       │  │
│  │  [Learn More] ← Modern UI Button                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SERVICE 3 - Hardware & PCB Design                          │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ ┌─────────────┐                                      │  │
│  │ │   Image     │  Audio Hardware Design               │  │
│  │ │   (PCB)     │                                       │  │
│  │ │             │  • Analog audio circuit design       │  │
│  │ └─────────────┘  • Digital signal routing            │  │
│  │                  • EMC/EMI optimization              │  │
│  │                  • Prototype development             │  │
│  │                                                       │  │
│  │                  [Learn More] ← Modern UI Button     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SERVICE 4 - Acoustic Engineering                           │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  Acoustic Solutions                  │  │
│  │                                                       │  │
│  │  • Microphone array design         ┌─────────────┐  │  │
│  │  • Voice control systems           │   Image     │  │  │
│  │  • Handsfree communication         │(Microphone) │  │  │
│  │  • Acoustic modeling               │             │  │  │
│  │  • Audio measurements              └─────────────┘  │  │
│  │                                                       │  │
│  │  [Learn More] ← Modern UI Button                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FAQ SECTION                                                │
│                                                             │
│           "Frequently Asked Questions"                      │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Accordion Item 1 ▼         ← Modern UI Accordion    │  │
│  │ [Expanded content]                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Accordion Item 2 ▶                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Accordion Item 3 ▶                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Accordion Item 4 ▶                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CTA SECTION                                                │
│     "Need help with your audio product development?"       │
│            [Contact Us] ← Modern UI Button                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘
```

**Components Used:**
- Lightswind: Navbar, Page Hero, Footer
- Modern UI: Buttons (5x), Accordion (4-6 items)
- TailwindCSS: Flexbox for service layouts

---

### 4. PROJECTS PAGE

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAGE HERO (Lightswind)                                     │
│                                                             │
│              "Our Projects"                                 │
│      Audio Engineering Excellence in Action                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FILTER BAR                                                 │
│                                                             │
│  Category: [All ▼] [Consumer Electronics] [Automotive]     │
│            [Professional Audio] [IoT] [R&D]                 │
│            ↑ Modern UI Dropdown Menu                        │
│                                                             │
│  Technology: [DSP] [Bluetooth] [Mic Arrays] [Hardware]     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECTS GRID (3 columns, responsive)                      │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Card     │  │ Card     │  │ Card     │  ← Modern UI    │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │     Cards       │
│  │          │  │          │  │          │                 │
│  │ Title    │  │ Title    │  │ Title    │                 │
│  │ Category │  │ Category │  │ Category │                 │
│  │ Location │  │ Location │  │ Location │                 │
│  │ [View]   │  │ [View]   │  │ [View]   │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Card     │  │ Card     │  │ Card     │                 │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │                 │
│  │          │  │          │  │          │                 │
│  │ Title    │  │ Title    │  │ Title    │                 │
│  │ Category │  │ Category │  │ Category │                 │
│  │ Location │  │ Location │  │ Location │                 │
│  │ [View]   │  │ [View]   │  │ [View]   │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Card     │  │ Card     │  │ Card     │                 │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │                 │
│  │ ...      │  │ ...      │  │ ...      │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  LOAD MORE                                                  │
│            [Load More Projects] ← Modern UI Button         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘
```

**Components Used:**
- Lightswind: Navbar, Page Hero, Footer
- Modern UI: Cards (9+ projects), Dropdown Menu (filter), Button
- TailwindCSS: Grid layout (3 columns)

---

### 5. PROJECT DETAIL PAGE

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BREADCRUMB                                                 │
│  Home > Projects > [Project Name]                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECT HERO IMAGE (Full Width)                            │
│                                                             │
│              [Large Project Image]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECT HEADER                                             │
│                                                             │
│  Project Name                                               │
│  Industry • Category • Year                                 │
│  Technologies: DSP, Bluetooth, Microphone Array             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECT CONTENT (2 Column Layout)                          │
│                                                             │
│  ┌─────────────────────┐  ┌──────────────────────────┐    │
│  │ Main Content        │  │ Project Info Card        │    │
│  │                     │  │  ← Modern UI Card        │    │
│  │ Overview            │  │                          │    │
│  │ paragraphs          │  │ Client: [Industry/Type]  │    │
│  │                     │  │ Duration: [months]       │    │
│  │ Challenge           │  │ Platform: [ARM/DSP/etc]  │    │
│  │ • Technical problem │  │                          │    │
│  │ • Requirements      │  │ Technologies:            │    │
│  │                     │  │ • DSP algorithms         │    │
│  │ Solution            │  │ • Bluetooth stack        │    │
│  │ • Approach taken    │  │ • Hardware design        │    │
│  │ • Technologies used │  │                          │    │
│  │                     │  │ Deliverables:            │    │
│  │ Results             │  │ • Algorithm code         │    │
│  │ • Performance gains │  │ • Hardware specs         │    │
│  │ • Metrics           │  │ • Documentation          │    │
│  │                     │  │                          │    │
│  └─────────────────────┘  └──────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECT GALLERY (Grid)                                     │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Image 1  │  │ Image 2  │  │ Image 3  │                 │
│  │          │  │          │  │          │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Image 4  │  │ Image 5  │  │ Image 6  │                 │
│  │          │  │          │  │          │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  RELATED PROJECTS                                           │
│                                                             │
│           "More Projects"                                   │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ Card     │  │ Card     │  │ Card     │  ← Modern UI    │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │     Cards       │
│  │ Title    │  │ Title    │  │ Title    │                 │
│  │ [View]   │  │ [View]   │  │ [View]   │                 │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CTA SECTION                                                │
│     "Interested in working together?"                       │
│            [Start a Project] ← Modern UI Button            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘
```

**Components Used:**
- Lightswind: Navbar, Footer
- Modern UI: Cards (info card + 3 related projects), Button
- TailwindCSS: Grid layout for gallery, 2-column layout

---

### 6. CONTACT PAGE

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (Lightswind)                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAGE HERO (Lightswind)                                     │
│                                                             │
│              "Get in Touch"                                 │
│      Let's discuss your audio development project           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CONTACT SECTION (2 Column Layout)                          │
│                                                             │
│  ┌──────────────────────┐  ┌────────────────────────────┐  │
│  │ CONTACT FORM         │  │ CONTACT INFORMATION        │  │
│  │                      │  │                            │  │
│  │ Name                 │  │ 📍 Address                 │  │
│  │ [Input] ← Modern UI  │  │ Andebakkesti 6             │  │
│  │                      │  │ 2000 Frederiksberg         │  │
│  │ Email                │  │ Denmark                    │  │
│  │ [Input] ← Modern UI  │  │                            │  │
│  │                      │  │ 📧 Email                   │  │
│  │ Company              │  │ info@cph-acoustics.com     │  │
│  │ [Input] ← Modern UI  │  │                            │  │
│  │                      │  │ 📞 Phone                   │  │
│  │ Message              │  │ +45 2728 2817              │  │
│  │ [Textarea]           │  │                            │  │
│  │ ← Modern UI          │  │ 🕐 Hours                   │  │
│  │                      │  │ Mon-Fri: 9:00 - 17:00      │  │
│  │                      │  │                            │  │
│  │ [Submit] ← Modern UI │  │ ──────────────────         │  │
│  │  Button              │  │                            │  │
│  │                      │  │ [Social Icons]             │  │
│  │ ✓ Success message    │  │ LinkedIn  Instagram        │  │
│  │   appears here       │  │                            │  │
│  │                      │  │                            │  │
│  └──────────────────────┘  └────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MAP SECTION                                                │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │         [Google Maps Embed]                          │  │
│  │         or Static Map Image                          │  │
│  │                                                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER (Lightswind)                                        │
│                                                             │
│  [Privacy Policy] [Terms & Conditions]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Components Used:**
- Lightswind: Navbar, Page Hero, Footer
- Modern UI: Input (4x), Textarea (1x), Button (1x)
- TailwindCSS: 2-column layout

---

## 🔧 Component Mapping

### Detailed Component Usage by Page

| Page | Modern UI Components | Lightswind Components | Count |
|------|---------------------|----------------------|-------|
| **Home** | Button (4x), Card (7x) | Navbar, Hero, Footer, CTA | 11 |
| **About** | Button (1x), Card (3x), Avatar (4-6x) | Navbar, Hero, Footer | 8-10 |
| **Services** | Button (5x), Accordion (4-6x) | Navbar, Hero, Footer | 9-11 |
| **Projects** | Button (1x), Card (9+x), Dropdown (1x) | Navbar, Hero, Footer | 11+ |
| **Project Detail** | Button (1x), Card (4x) | Navbar, Footer | 5 |
| **Contact** | Input (4x), Textarea (1x), Button (1x) | Navbar, Hero, Footer | 6 |
| **TOTAL** | 50-60+ components | 15-20 sections | 65-80+ |

### Modern UI Components Specifications

#### Button Component
```typescript
// Variants needed
variants: {
  variant: {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-accent text-primary hover:bg-accent/90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "hover:bg-muted"
  },
  size: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
}
```

#### Card Component
```typescript
// Variations needed
- Project Card: Image + Title + Category + CTA
- Service Card: Icon + Title + Description
- Value Card: Icon + Title + Text
- Info Card: Data display (for project details)
```

#### Input Component
```typescript
// Features needed
- Text input
- Email input
- Textarea
- Validation states (error, success)
- Label integration
- Helper text
```

#### Avatar Component
```typescript
// Features needed
- Image avatar
- Fallback initials
- Size variants (sm, md, lg)
- Round shape
```

#### Accordion Component
```typescript
// Features needed
- Single item expansion
- Smooth animation
- Icon rotation
- ARIA compliance
```

#### Dropdown Menu Component
```typescript
// Features needed
- Trigger button
- Menu items
- Keyboard navigation
- Portal positioning
```

---

## 📱 Responsive Breakpoints

```css
/* Tailwind Default Breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet portrait */
lg: 1024px  /* Tablet landscape / Small desktop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large desktop */
```

### Layout Adaptations

| Element | Desktop (lg+) | Tablet (md) | Mobile (sm) |
|---------|--------------|-------------|-------------|
| Navbar | Full menu | Full menu | Hamburger menu |
| Hero text | 72px | 48px | 36px |
| Project grid | 3 columns | 2 columns | 1 column |
| Service cards | 4 columns | 2 columns | 1 column |
| Team grid | 4 columns | 2 columns | 1 column |
| Contact form | 2 columns | 2 columns | 1 column |
| Footer | 4 columns | 2 columns | 1 column |

---

## ✨ Animation Specifications

### Framer Motion Animations

#### Page Transitions
```typescript
// Fade in on page load
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}
```

#### Scroll Animations
```typescript
// Fade in on scroll (IntersectionObserver)
const fadeInOnScroll = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
}
```

#### Card Hover
```typescript
// Card lift on hover
const cardHover = {
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
}
```

#### Button Interactions
```typescript
// Button press effect
const buttonPress = {
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
}
```

### Scroll Effects

| Element | Effect | Trigger |
|---------|--------|---------|
| Navbar | Transparent → Solid bg | Scroll > 50px |
| Hero text | Parallax scroll | Scroll position |
| Cards | Fade + slide up | IntersectionObserver |
| Images | Lazy load | IntersectionObserver |

---

## 🎯 Implementation Priority

### Phase 1: Foundation (Week 1)
1. Set up Next.js 15 project with TypeScript
2. Install Modern UI components
3. Install Lightswind UI components
4. Configure TailwindCSS with custom theme
5. Set up font families (Inter, Satoshi)
6. Create basic layout structure (Navbar, Footer)

### Phase 2: Core Pages (Week 2)
1. **Home Page**
   - Lightswind Hero section
   - Modern UI Cards for projects
   - Modern UI Buttons
2. **About Page**
   - Modern UI Avatars for team
   - Modern UI Cards for values
3. **Services Page**
   - Modern UI Accordion for FAQ
   - Modern UI Buttons

### Phase 3: Dynamic Pages (Week 3)
1. **Projects Page**
   - Modern UI Cards grid
   - Modern UI Dropdown for filters
2. **Project Detail Page**
   - Dynamic routing
   - Modern UI Card for info
3. **Contact Page**
   - Modern UI Form components

### Phase 4: Polish & Optimization (Week 4)
1. Framer Motion animations
2. SEO optimization
3. Performance testing
4. Accessibility audit
5. Mobile responsiveness testing

---

## 📚 Component Source References

### Modern UI Components
- **Source:** https://modern-ui.org
- **Based on:** Radix UI + Tailwind CSS
- **Installation:** Copy/paste components or use CLI
- **Components to use:**
  - Button
  - Card
  - Input
  - Avatar
  - Accordion
  - Dropdown Menu

### Lightswind UI Components
- **Best for:** Marketing sections
- **Components to use:**
  - Navbar (with sticky scroll effect)
  - Hero sections (full-width backgrounds)
  - Footer (multi-column layout)
  - CTA sections

### Custom Components Needed
1. Project Filter (combining Modern UI Dropdown)
2. Image Gallery (using Next/Image)
3. Map Component (Google Maps embed)
4. Social Icons (custom SVGs)

---

## ✅ Checklist for Implementation

- [ ] Initialize Next.js 15 project
- [ ] Install dependencies (Modern UI, Lightswind, Framer Motion)
- [ ] Configure TailwindCSS theme
- [ ] Set up typography (Inter, Satoshi fonts)
- [ ] Create layout components (Navbar, Footer)
- [ ] Build Home page
- [ ] Build About page
- [ ] Build Services page
- [ ] Build Projects page
- [ ] Build Project Detail page
- [ ] Build Contact page
- [ ] Add animations with Framer Motion
- [ ] Implement responsive design
- [ ] Add SEO meta tags
- [ ] Optimize images (Next/Image)
- [ ] Test accessibility (WCAG 2.1 AA)
- [ ] Performance audit (Lighthouse)
- [ ] Deploy to Vercel

---

**Notes:**
- All Modern UI components should be copied into `/src/components/ui/` directory
- Lightswind components should be in `/src/components/layout/` and `/src/components/sections/`
- Custom theme tokens should be defined in `tailwind.config.ts`
- Use `next/image` for all images with lazy loading
- Implement error boundaries for robustness
- Use TypeScript strict mode for type safety

---

*End of Wireframe Document*

