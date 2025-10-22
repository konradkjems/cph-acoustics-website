# 🎵 CPH Acoustics Website Redesign - Project Documentation

**Project:** CPH Acoustics Website Redesign  
**Business:** Audio Engineering Consulting (DSP, Bluetooth, Hardware Design)  
**Framework:** Next.js 15 + TypeScript  
**UI Libraries:** Modern UI (Radix UI) + Lightswind UI  
**Date:** October 22, 2025

---

## 📚 Document Index

### 1. **PRD.md** - Product Requirements Document
The master planning document containing:
- Project goals and objectives
- Target audience definition
- Technical requirements (Next.js 15, Modern UI, Lightswind)
- Site structure (all 6 pages)
- Design specifications (colors, fonts, components)
- Copywriting guidelines
- Functional requirements
- Timeline and deliverables

**Read this first** to understand project scope and requirements.

---

### 2. **WIREFRAME.md** - Complete Design Wireframes
Comprehensive visual wireframes for all pages:
- **Home Page** - Hero, intro, featured projects, services preview
- **About Page** - Company story, values, founder/team section
- **Services Page** - 4 detailed service sections + FAQ
- **Projects Page** - Filterable project grid
- **Project Detail Page** - Technical case study layout
- **Contact Page** - Form + contact information

Includes:
- ASCII art wireframes for visual reference
- Component library strategy (Modern UI vs Lightswind)
- Design system (colors, typography, spacing)
- Responsive breakpoints
- Animation specifications
- Component mapping (50-60+ components total)

**Use this** for design and development implementation.

---

### 3. **COMPONENT-INTEGRATION-GUIDE.md** - Technical Integration Guide
Detailed guide for integrating Modern UI + Lightswind UI:
- Integration philosophy and strategy
- Complete project structure
- Unified TailwindCSS configuration
- Full component code examples:
  - Modern UI Button (TypeScript)
  - Lightswind Hero Section
  - Combined Project Card
  - Contact Form
- Integration patterns and best practices
- Installation instructions
- Utility functions

**Use this** when building components and setting up the project.

---

### 4. **EXISTING-CONTENT.md** - Current Website Content Analysis
Complete extraction from https://www.cph-acoustics.com:
- Current copywriting and messaging
- Contact information (verified)
- Business focus analysis
- Content gaps identification
- Recommended content enhancements
- SEO keywords
- Tone of voice guidelines
- Content creation checklist

**Use this** for content writing and understanding current state.

---

### 5. **UPDATE-SUMMARY.md** - Changes Log
Documents all updates made to align with actual business:
- What changed and why
- Before/after comparisons
- Business model clarification
- Design direction changes
- Updated success metrics
- Next steps and action items

**Read this** to understand how the project evolved.

---

### 6. **BRAND-COLORS.md** - Complete Brand Color Guide
Comprehensive color documentation extracted from the official logo:
- Hex, RGB, HSL values for all brand colors
- Color usage guidelines
- Accessibility requirements (WCAG compliance)
- Gradient combinations
- Button, card, and navigation examples
- Color psychology and brand alignment
- Implementation code snippets

**Use this** as the definitive color reference for all design and development.

---

### 7. **README.md** - This Document
Quick navigation guide to all project documentation.

---

## 🎯 Quick Start Guide

### For Project Managers:
1. Read **PRD.md** for complete project scope
2. Review **UPDATE-SUMMARY.md** for recent changes
3. Check **WIREFRAME.md** for visual designs

### For Designers:
1. Start with **WIREFRAME.md** for all page designs
2. Reference **PRD.md** for design system (colors, fonts)
3. Use **EXISTING-CONTENT.md** for content inspiration

### For Developers:
1. Begin with **COMPONENT-INTEGRATION-GUIDE.md** for setup
2. Reference **WIREFRAME.md** for component mapping
3. Follow **PRD.md** for technical requirements

### For Content Writers:
1. Read **EXISTING-CONTENT.md** for current content
2. Follow **PRD.md** copywriting guidelines (Section 6)
3. Reference **WIREFRAME.md** for content structure

---

## 🏢 Business Overview

**CPH Acoustics** is a specialized consulting firm providing audio engineering services:

### Services Offered:
1. **Embedded DSP Development** 🔊
   - Custom algorithm development
   - Real-time audio processing
   - Echo cancellation & beamforming
   - Platform optimization

2. **Bluetooth Audio Solutions** 📡
   - Low-latency transmission
   - Audio codec integration
   - Multi-device connectivity
   - Certification support

3. **Hardware & PCB Design** ⚡
   - Analog audio circuits
   - Digital signal routing
   - EMC/EMI optimization
   - Prototype development

4. **Acoustic Engineering** 🎙️
   - Microphone array design
   - Voice control systems
   - Handsfree communication
   - Acoustic modeling

### Target Clients:
- Consumer electronics manufacturers
- Automotive audio system developers
- Professional audio equipment companies
- IoT and smart device manufacturers
- Product managers and engineering teams

---

## 📞 Contact Information

**Owner:** Ulrik Kjems  
**Company:** CPH Acoustics  
**CVR:** DK44982889

**Address:**  
Andebakkesti 6  
2000 Frederiksberg  
Denmark

**Email:** info@cph-acoustics.com  
**Phone:** +45 2728 2817  
**Website:** https://www.cph-acoustics.com

---

## 🎨 Design System Quick Reference

### Colors (From Logo)
- **Primary:** #1B2B4A (Navy Blue - logo text)
- **Accent Primary:** #00E5CC (Bright Cyan - logo gradient)
- **Accent Secondary:** #00CED1 (Turquoise - logo gradient)
- **Accent Tertiary:** #00B4D8 (Deep Cyan - logo gradient)
- **Background:** #FFFFFF (White)
- **Background Alt:** #F9FAFB (Off-white)
- **Text:** #1B2B4A (Navy Blue - matches logo)

### Typography
- **Primary Font:** Inter
- **Display Font:** Satoshi
- **Scale:** 12px to 72px

### Components Distribution
- **Modern UI:** Buttons, Cards, Inputs, Avatars, Accordions, Dropdowns
- **Lightswind UI:** Navbar, Hero sections, Footer, CTA sections
- **TailwindCSS:** Grid layouts, spacing utilities

---

## 🚀 Technology Stack

### Frontend
- **Framework:** Next.js 15 (React)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS
- **UI Libraries:** 
  - Modern UI (Radix UI + Tailwind) - https://modern-ui.org
  - Lightswind UI
- **Animations:** Framer Motion

### Deployment
- **Platform:** Vercel
- **Performance Target:** Lighthouse score > 90

### Optional
- **CMS:** Sanity.io or Contentlayer
- **Analytics:** Google Analytics 4 or Plausible.io
- **Forms:** Formspree or Next.js API routes

---

## ✅ Project Status

- [x] Business analysis completed
- [x] PRD created and updated
- [x] Wireframes designed for all 6 pages
- [x] Component integration guide written
- [x] Contact information verified
- [x] Development environment setup
- [x] Component library installation
- [x] Page development (Home, About, Services, Projects, Contact)
- [x] TypeScript errors resolved
- [ ] Content creation
- [ ] Testing and optimization
- [ ] Deployment

---

## 📋 Next Actions

### Immediate (Week 1):
1. ✅ Set up Next.js 15 project with TypeScript
2. ✅ Install Modern UI and Lightswind components
3. ✅ Configure TailwindCSS with custom theme
4. ✅ Create basic layout structure (Navbar, Footer)
5. Gather visual assets (product images, founder photo)

**Note:** Requires Node.js >=20.9.0 for Next.js 15 compatibility.

### Short-term (Weeks 2-3):
1. Build all 6 pages according to wireframes
2. Integrate Modern UI + Lightswind components
3. Write service descriptions and case studies
4. Implement contact form
5. Add animations with Framer Motion

### Medium-term (Week 4):
1. SEO optimization (meta tags, sitemap, robots.txt)
2. Performance optimization (image optimization, lazy loading)
3. Accessibility audit (WCAG 2.1 AA compliance)
4. Cross-browser testing
5. Mobile responsiveness testing

### Pre-launch:
1. Content review and proofreading
2. Legal pages (Privacy Policy, Terms)
3. Analytics setup
4. Final client review
5. Deploy to Vercel

---

## 📖 Useful Resources

- **Modern UI Documentation:** https://modern-ui.org
- **Radix UI Primitives:** https://www.radix-ui.com
- **Next.js 15 Docs:** https://nextjs.org
- **TailwindCSS Docs:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion

---

## 💡 Tips for Success

1. **Stay B2B Focused:** Remember the audience is technical (engineers, product managers)
2. **Technical Credibility:** Use proper terminology and showcase expertise
3. **Case Studies:** Focus on problem-solving and measurable results
4. **Performance First:** Optimize for speed and SEO from day one
5. **Accessibility:** Ensure WCAG compliance for all components
6. **Mobile-First:** Design and test mobile experience thoroughly
7. **Component Reusability:** Build modular, reusable components

---

## 🤝 Contributing

For questions or clarifications:
- Review the relevant documentation first
- Check UPDATE-SUMMARY.md for recent changes
- Contact project owner with specific questions

---

**All documentation is current as of October 22, 2025.**

