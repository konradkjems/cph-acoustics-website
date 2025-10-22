🧱 Product Requirements Document (PRD)
Project: CPH Acoustics Website Redesign
Version: 1.0
Owner: Konrad
Date: 22 October 2025
1. Overview
Goal
Redesign the CPH Acoustics website to:
Communicate the brand's expertise in embedded DSP development, Bluetooth audio, and audio hardware design
Position CPH Acoustics as a trusted technical partner for audio product development
Deliver a visually stunning, high-performance, modern web experience
Use Modern UI + Lightswind UI for design consistency and accessibility
Be built in TypeScript using Next.js 15
Optimize for SEO, mobile responsiveness, and fast load times
Target Audience
Electronics companies developing audio products
Product managers and engineering teams
Consumer electronics manufacturers
Automotive audio system developers
Professional audio equipment companies
IoT and smart device manufacturers
2. Objectives
Improve perceived brand professionalism and technical credibility
Increase client inquiries via contact form from qualified B2B prospects
Showcase technical projects and engineering capabilities clearly
Create a modular, scalable front-end for easy updates
Build a site that reflects cutting-edge audio engineering expertise
Attract high-value consulting engagements
3. Technical Requirements
Category	Requirement
Framework	Next.js 15 (React) with full TypeScript support
UI Library	Modern UI (Radix UI + Tailwind) + Lightswind UI (hybrid approach)
Language	TypeScript
Styling	TailwindCSS (integrated with both UI libraries)
Deployment	Vercel
CMS (optional)	Sanity.io or Contentlayer (for project & team pages)
SEO	Meta tags, OpenGraph, sitemap.xml, robots.txt
Performance	Lighthouse score > 90 across all categories
Accessibility	WCAG 2.1 AA compliance
Analytics	Google Analytics 4 or Plausible.io
Forms	Formspree or backend API route in Next.js
4. Site Structure
Pages
Home
Hero section with full-width video/image + tagline
Short intro about CPH Acoustics
Showcase of 3 featured projects
CTA: “Explore Our Work” and “Contact Us”
About
Company history and mission
Founder profile (Ulrik Kjems) with expertise and background
Values: technical excellence, innovation, partnership
Consultant network overview
CTA to "Get in Touch"
Services
Overview of technical consulting services
Service 1: Embedded DSP Development (algorithm development, real-time processing, optimization)
Service 2: Bluetooth Audio Solutions (audio stack integration, low-latency transmission, certification support)
Service 3: Hardware & PCB Design (analog audio circuits, digital signal routing, EMC/EMI optimization)
Service 4: Acoustic Engineering (microphone arrays, voice control systems, handsfree communication)
Each service block with icon, technical description, applications, and deliverables
FAQ section for common technical questions
Projects
Grid of technical projects with images and filters (category: consumer electronics, automotive, professional audio, IoT, R&D)
Clicking a project opens a detail page with challenge, solution approach, technologies used, and results
Focus on product development case studies rather than installations
Contact
Contact form (Name, Email, Company, Message)
Map (Google Maps embed or static image)
Address, phone, email
Privacy Policy / Terms (footer links)
5. Design & UI
Style Direction
Minimal, technical aesthetic (clean whites, soft greys, muted tones)
High contrast black text with technical precision
Use of micro-interactions and smooth scroll animations
Large typography with breathing space
Technical diagrams and product imagery where appropriate
Focus on showcasing engineering expertise and innovation
Fonts
Primary: Inter or Neue Haas Grotesk
Secondary: Satoshi or Manrope
Colors
Type	Example
Primary	#1B2B4A (navy blue - from logo text)
Accent Primary	#00E5CC (bright cyan - from logo)
Accent Secondary	#00CED1 (turquoise - from logo)
Accent Tertiary	#00B4D8 (deep cyan - from logo)
Background	#FFFFFF (white)
Background Alt	#F9FAFB (off-white)
Text	#1B2B4A (navy - matches logo)
Components (Modern UI + Lightswind)
Navbar (sticky, transparent → solid on scroll) - Lightswind
Hero sections with text + image overlay - Lightswind
Button components - Modern UI
Input & Form elements - Modern UI
Card components for projects - Modern UI
Avatar components for team - Modern UI
Accordion for FAQ/Services - Modern UI
Dropdown Menu for navigation - Modern UI
Footer with social links - Lightswind
Responsive grid layouts - TailwindCSS + both libraries
6. Copywriting Guidelines
Tone
Professional and technically credible
Confident but approachable
Engineering-focused with B2B sensibility
Focus on clarity, expertise, partnership, and problem-solving
Examples
Hero Tagline Options:
"Engineering Audio Excellence"
"Expert Audio Development Consulting"
"Turning Audio Challenges into Market-Ready Solutions"
"Your Partner in Audio Innovation"
"Embedded DSP. Bluetooth Audio. Hardware Design."
About Section:
CPH Acoustics is a network of specialized consultants supporting companies in their audio product development. We bring deep expertise in embedded DSP, Bluetooth audio solutions, and hardware design — from concept through production.
Service Example:
Embedded DSP Development
We develop custom DSP algorithms and optimize real-time audio processing for embedded platforms. From echo cancellation to beamforming, we ensure your audio products deliver exceptional performance in real-world conditions.
Bluetooth Audio Solutions
Our expertise spans the full Bluetooth audio stack — from low-latency transmission and multi-device connectivity to power optimization and certification support. We help you bring wireless audio products to market faster.
7. Functional Requirements
Feature	Description
Contact Form	Input validation, success/failure states, project inquiry fields
Project Filter	Sort by category (consumer electronics, automotive, professional audio, IoT, R&D)
Technology Tags	Filter projects by technology (DSP, Bluetooth, microphone arrays, etc.)
Responsive Layout	Fully mobile optimized
Animations	Fade-in, scroll-based transitions using Framer Motion
Dark/Light Mode	Optional toggle (if feasible)
Lazy Loading	For images and project cards
CMS Integration	Optional (to allow easy project/case study updates)
8. Deliverables
Full TypeScript codebase (Next.js 15)
All UI built with Modern UI + Lightswind components
SEO and performance optimized
Copy integrated
Deployment-ready on Vercel
Optional admin integration (if CMS chosen)
Component library integration guide
9. Timeline (Suggested)
Phase	Task	Duration
Phase 1	Wireframes + Design System	1 week
Phase 2	Frontend Development	2–3 weeks
Phase 3	CMS + Integration (optional)	1 week
Phase 4	Testing + Optimization	1 week
Phase 5	Launch	—
10. Example Folder Structure
/src
 ├─ components/
 │   ├─ ui/
 │   ├─ layout/
 │   └─ sections/
 ├─ pages/
 │   ├─ index.tsx
 │   ├─ about.tsx
 │   ├─ services.tsx
 │   ├─ projects/
 │   │   └─ [slug].tsx
 │   └─ contact.tsx
 ├─ lib/
 │   └─ utils.ts
 ├─ styles/
 │   └─ globals.css
 ├─ public/
 │   └─ images/
 ├─ types/
 │   └─ project.ts
11. Stretch Goals
Add technical case studies with demo videos
Add interactive audio demos or waveform visualizations
Add technical blog/insights section for thought leadership
Add multi-language support (Danish/English)
Integrate client testimonials and success metrics
Add downloadable technical white papers or data sheets
Technology showcase section (tools, platforms, standards supported)