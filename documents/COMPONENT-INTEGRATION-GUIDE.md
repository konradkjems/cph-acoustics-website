# 🔧 Component Integration Guide
**Modern UI + Lightswind UI - Harmony Strategy**

---

## 📋 Overview

This guide details how to integrate Modern UI (from https://modern-ui.org) and Lightswind UI components in a complementary way for the CPH Acoustics website.

---

## 🎯 Integration Philosophy

### Why Both Libraries?

**Modern UI (Radix UI + Tailwind)**
- ✅ Excellent accessibility (ARIA-compliant)
- ✅ Complex interactive components
- ✅ TypeScript-first
- ✅ Next.js 15 optimized
- ✅ Production-ready primitives

**Lightswind UI**
- ✅ Beautiful marketing sections
- ✅ Hero and landing page focus
- ✅ Pre-built layouts
- ✅ Smooth animations
- ✅ Minimal configuration

### Complementary Strengths

| Aspect | Modern UI | Lightswind UI |
|--------|-----------|---------------|
| Forms & Inputs | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Hero Sections | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Accessibility | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Layout Components | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Interactive States | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Marketing Focus | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 📁 Project Structure

```
/src
├── components/
│   ├── ui/                          # Modern UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── avatar.tsx
│   │   ├── accordion.tsx
│   │   └── dropdown-menu.tsx
│   │
│   ├── layout/                      # Lightswind layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── container.tsx
│   │
│   ├── sections/                    # Lightswind section components
│   │   ├── hero.tsx
│   │   ├── hero-home.tsx
│   │   ├── hero-page.tsx
│   │   ├── cta-section.tsx
│   │   └── stats-section.tsx
│   │
│   └── shared/                      # Custom shared components
│       ├── project-card.tsx         # Combines Modern UI Card
│       ├── service-card.tsx         # Combines Modern UI Card
│       ├── team-member.tsx          # Uses Modern UI Avatar
│       └── contact-form.tsx         # Uses Modern UI Input/Button
│
├── lib/
│   ├── utils.ts                     # Utility functions (cn, etc.)
│   └── animations.ts                # Framer Motion variants
│
├── styles/
│   └── globals.css                  # Global styles + Tailwind
│
└── types/
    ├── project.ts
    ├── service.ts
    └── team.ts
```

---

## 🎨 Theme Integration

### Unified Tailwind Configuration

**tailwind.config.ts**
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CPH Acoustics brand colors (from logo)
        primary: {
          DEFAULT: "#1B2B4A", // Navy Blue (logo text)
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00E5CC", // Bright Cyan (logo gradient)
          secondary: "#00CED1", // Turquoise (logo gradient)
          tertiary: "#00B4D8", // Deep Cyan (logo gradient)
          foreground: "#1B2B4A", // Navy text on cyan
        },
        background: {
          DEFAULT: "#FFFFFF", // White
          alt: "#F9FAFB", // Off-white
        },
        foreground: "#1B2B4A", // Navy text
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        border: "#E2E8F0",
        
        // Semantic colors
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#00CED1", // Uses brand turquoise
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter", "sans-serif"],
      },
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

export default config;
```

### Global Styles

**src/styles/globals.css**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 218 39% 20%;
    --primary: 218 39% 20%;
    --primary-foreground: 0 0% 100%;
    --accent: 176 100% 71%;
    --accent-secondary: 179 100% 66%;
    --accent-tertiary: 195 100% 58%;
    --accent-foreground: 218 39% 20%;
    --muted: 210 40% 96%;
    --muted-foreground: 215 16% 47%;
    --border: 214 32% 91%;
    --radius: 0.5rem;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Container padding */
  .container-padding {
    @apply px-4 md:px-6 lg:px-8;
  }

  /* Section spacing */
  .section-spacing {
    @apply py-16 md:py-24 lg:py-32;
  }

  /* Text balance for headings */
  .text-balance {
    text-wrap: balance;
  }
}

@layer utilities {
  /* Hide scrollbar but keep functionality */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Gradient text */
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent;
  }
}
```

---

## 🧩 Component Examples

### 1. Modern UI Button (Interactive Element)

**src/components/ui/button.tsx**
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        secondary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-13 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

**Usage:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary" size="lg">
  Explore Our Work
</Button>

<Button variant="secondary" size="md">
  Contact Us
</Button>

<Button variant="outline" size="sm">
  Learn More
</Button>
```

---

### 2. Lightswind Hero Section (Layout Element)

**src/components/sections/hero-home.tsx**
```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroHomeProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  backgroundVideo?: string;
}

export function HeroHome({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundVideo,
}: HeroHomeProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-balance opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary" size="lg" asChild>
            <a href={primaryCTA.href}>{primaryCTA.text}</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
```

**Usage:**
```tsx
import { HeroHome } from "@/components/sections/hero-home";

<HeroHome
  title="Designing Silence. Engineering Sound."
  subtitle="Where Architecture Meets Acoustics"
  primaryCTA={{ text: "Explore Our Work", href: "/projects" }}
  secondaryCTA={{ text: "Contact Us", href: "/contact" }}
  backgroundImage="/images/hero-bg.jpg"
  backgroundVideo="/videos/hero-bg.mp4"
/>
```

---

### 3. Combined Component: Project Card

**src/components/shared/project-card.tsx**
```typescript
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card"; // Modern UI
import { Button } from "@/components/ui/button"; // Modern UI
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
  slug: string;
  index?: number;
}

export function ProjectCard({
  title,
  category,
  location,
  image,
  slug,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
            <span className="px-2 py-1 bg-accent/10 text-accent rounded-md">
              {category}
            </span>
            <span>•</span>
            <span>{location}</span>
          </div>

          <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
            {title}
          </h3>

          <Button variant="outline" size="sm" asChild>
            <Link href={`/projects/${slug}`}>
              View Project
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
```

---

### 4. Combined Component: Contact Form

**src/components/shared/contact-form.tsx**
```typescript
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Modern UI
import { Input } from "@/components/ui/input"; // Modern UI
import { Textarea } from "@/components/ui/textarea"; // Modern UI
import { motion } from "framer-motion";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission logic (Formspree or API route)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", company: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <Input
          id="name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          placeholder="John Doe"
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <Input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          placeholder="john@example.com"
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company
        </label>
        <Input
          id="company"
          type="text"
          value={formState.company}
          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
          placeholder="Company name"
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          required
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Tell us about your project..."
          rows={6}
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-success/10 border border-success/20 rounded-lg text-success"
        >
          ✓ Thank you! We'll be in touch soon.
        </motion.div>
      )}
    </form>
  );
}
```

---

## 🔄 Integration Patterns

### Pattern 1: Layout Wrapper (Lightswind) + Interactive Elements (Modern UI)

```tsx
// Hero section (Lightswind) with Modern UI buttons
<HeroSection>
  <Button variant="primary">Modern UI Button</Button>
</HeroSection>
```

### Pattern 2: Grid Layout (TailwindCSS) + Modern UI Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Modern UI Card 1</Card>
  <Card>Modern UI Card 2</Card>
  <Card>Modern UI Card 3</Card>
</div>
```

### Pattern 3: Form Section (Lightswind) + Modern UI Inputs

```tsx
<Section className="bg-muted">
  <ContactForm> {/* Uses Modern UI Input/Button components */}
    <Input />
    <Button />
  </ContactForm>
</Section>
```

---

## ✅ Best Practices

### 1. Component Organization
- Keep Modern UI components in `/components/ui/`
- Keep Lightswind components in `/components/layout/` and `/components/sections/`
- Create combined components in `/components/shared/`

### 2. Styling Consistency
- Use the unified Tailwind config
- Maintain consistent spacing (section-spacing utility)
- Use consistent border radius across both libraries

### 3. Accessibility
- Modern UI components handle ARIA attributes
- Ensure Lightswind sections have proper heading hierarchy
- Test keyboard navigation

### 4. Performance
- Use Next.js Image component for all images
- Implement lazy loading for below-the-fold content
- Use React Server Components where possible

### 5. Type Safety
- Define TypeScript interfaces for all props
- Use strict mode
- Export types for reuse

---

## 🚀 Getting Started

### Installation Steps

```bash
# 1. Create Next.js 15 project
npx create-next-app@latest cph-acoustics --typescript --tailwind --app

# 2. Install dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install framer-motion
npm install @radix-ui/react-avatar @radix-ui/react-accordion @radix-ui/react-dropdown-menu

# 3. Install dev dependencies
npm install -D @tailwindcss/typography @tailwindcss/forms

# 4. Copy Modern UI components
# Visit https://modern-ui.org and copy needed components to /src/components/ui/

# 5. Install/copy Lightswind components
# Copy Lightswind components to /src/components/layout/ and /src/components/sections/
```

### Utility Function

**src/lib/utils.ts**
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 📊 Component Checklist

### Modern UI Components to Install
- [x] Button
- [x] Card
- [x] Input
- [x] Textarea
- [x] Avatar
- [x] Accordion
- [x] Dropdown Menu

### Lightswind Components to Create
- [x] Navbar (sticky)
- [x] Hero Home
- [x] Hero Page
- [x] Footer
- [x] CTA Section

### Custom Combined Components
- [x] Project Card
- [x] Service Card
- [x] Team Member
- [x] Contact Form

---

## 🎓 Resources

- **Modern UI Documentation:** https://modern-ui.org
- **Radix UI Primitives:** https://www.radix-ui.com
- **TailwindCSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **Next.js 15:** https://nextjs.org

---

*This integration guide ensures both libraries work in harmony while leveraging their respective strengths.*

