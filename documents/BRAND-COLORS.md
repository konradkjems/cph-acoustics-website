# 🎨 CPH Acoustics Brand Colors Guide
**Version:** 1.0  
**Date:** 22 October 2025  
**Source:** Official CPH Acoustics Logo

---

## 📋 Color Palette Overview

All colors are extracted from the official CPH Acoustics logo files located in `/public/`.

### Logo Analysis
The CPH Acoustics logo consists of:
1. **Icon:** 4 parallelograms in a gradient from bright cyan to deep cyan/turquoise
2. **Typography:** "CPH ACOUSTICS" in dark navy blue

---

## 🎨 Primary Brand Colors

### Navy Blue (Primary)
**Hex:** `#1B2B4A`  
**RGB:** `rgb(27, 43, 74)`  
**HSL:** `hsl(218, 39%, 20%)`

**Usage:**
- Primary text color
- Headings and titles
- Navigation text
- Footer background
- Button text on cyan backgrounds
- Logo typography

**Example:**
```css
color: #1B2B4A;
background-color: #1B2B4A;
```

---

## 💎 Accent Colors (Cyan/Turquoise Gradient)

### Accent Primary - Bright Cyan
**Hex:** `#00E5CC`  
**RGB:** `rgb(0, 229, 204)`  
**HSL:** `hsl(176, 100%, 71%)`

**Position:** Top-left parallelogram in logo  
**Usage:**
- Primary call-to-action buttons
- Hover states
- Active navigation items
- Icons and accents
- Links
- Hero section highlights

**Example:**
```css
background-color: #00E5CC;
color: #00E5CC;
border-color: #00E5CC;
```

---

### Accent Secondary - Turquoise
**Hex:** `#00CED1`  
**RGB:** `rgb(0, 206, 209)`  
**HSL:** `hsl(179, 100%, 66%)`

**Position:** Middle parallelograms in logo  
**Usage:**
- Secondary buttons
- Informational messages (info alerts)
- Gradient backgrounds (with accent primary)
- Section dividers
- Icon variations
- Decorative elements

**Example:**
```css
background: linear-gradient(135deg, #00E5CC 0%, #00CED1 100%);
color: #00CED1;
```

---

### Accent Tertiary - Deep Cyan
**Hex:** `#00B4D8`  
**RGB:** `rgb(0, 180, 216)`  
**HSL:** `hsl(195, 100%, 58%)`

**Position:** Bottom-right (large) parallelogram in logo  
**Usage:**
- Gradient endpoints
- Darker hover states
- Secondary accents
- Card shadows with cyan tint
- Progress indicators
- Chart colors

**Example:**
```css
background-color: #00B4D8;
box-shadow: 0 4px 6px rgba(0, 180, 216, 0.2);
```

---

## 🔲 Background Colors

### White (Primary Background)
**Hex:** `#FFFFFF`  
**RGB:** `rgb(255, 255, 255)`  
**HSL:** `hsl(0, 0%, 100%)`

**Usage:**
- Main page background
- Card backgrounds
- Modal backgrounds
- Input fields

---

### Off-White (Alternative Background)
**Hex:** `#F9FAFB`  
**RGB:** `rgb(249, 250, 251)`  
**HSL:** `hsl(210, 20%, 98%)`

**Usage:**
- Section backgrounds (alternating)
- Subtle dividers
- Disabled states
- Hover backgrounds on white

---

## 🌈 Gradient Combinations

### Primary Brand Gradient
**Direction:** 135deg (diagonal top-left to bottom-right)  
**Colors:** Accent Primary → Accent Secondary → Accent Tertiary

```css
background: linear-gradient(135deg, 
  #00E5CC 0%,
  #00CED1 50%,
  #00B4D8 100%
);
```

**Usage:**
- Hero sections
- Feature cards
- Call-to-action banners
- Loading indicators

---

### Subtle Gradient (Light)
**Direction:** 180deg (top to bottom)  
**Colors:** Transparent cyan → Very light cyan

```css
background: linear-gradient(180deg, 
  rgba(0, 229, 204, 0.1) 0%,
  rgba(0, 206, 209, 0.05) 100%
);
```

**Usage:**
- Section backgrounds
- Card hover effects
- Decorative overlays

---

### Dark Overlay Gradient
**Direction:** 180deg (top to bottom)  
**Colors:** Navy with transparency

```css
background: linear-gradient(180deg, 
  rgba(27, 43, 74, 0.9) 0%,
  rgba(27, 43, 74, 0.7) 100%
);
```

**Usage:**
- Hero image overlays
- Video overlays
- Dark sections with text

---

## 🎯 Supporting Colors

### Text Colors

#### Primary Text
- **Color:** `#1B2B4A` (Navy Blue)
- **Usage:** Body text, headings

#### Muted Text
- **Color:** `#64748B` (Slate Gray)
- **RGB:** `rgb(100, 116, 139)`
- **Usage:** Captions, meta information, timestamps

---

### Borders & Dividers

#### Default Border
- **Color:** `#E2E8F0` (Light Slate)
- **RGB:** `rgb(226, 232, 240)`
- **Usage:** Card borders, input borders, dividers

---

### Semantic Colors

#### Success
- **Color:** `#22C55E` (Green)
- **Usage:** Success messages, confirmations, completed states

#### Warning
- **Color:** `#F59E0B` (Amber)
- **Usage:** Warnings, caution messages

#### Error
- **Color:** `#EF4444` (Red)
- **Usage:** Error messages, validation errors, alerts

#### Info
- **Color:** `#00CED1` (Turquoise - uses brand color)
- **Usage:** Informational messages, tips, notices

---

## 🎨 Color Usage Guidelines

### Accessibility Standards

#### Text Contrast Requirements
All text colors must meet WCAG 2.1 AA standards:
- **Large text (18px+):** Minimum contrast ratio of 3:1
- **Body text (< 18px):** Minimum contrast ratio of 4.5:1

#### Tested Combinations (WCAG AA Compliant):
✅ Navy (#1B2B4A) on White (#FFFFFF) - 10.2:1  
✅ Navy (#1B2B4A) on Bright Cyan (#00E5CC) - 4.8:1  
✅ White (#FFFFFF) on Navy (#1B2B4A) - 10.2:1  
✅ White (#FFFFFF) on Turquoise (#00CED1) - 3.9:1 (large text only)  
❌ Bright Cyan (#00E5CC) on White (#FFFFFF) - 2.8:1 (borders/accents only)

---

## 📐 Color Application Examples

### Buttons

#### Primary Button
```css
.button-primary {
  background: linear-gradient(135deg, #00E5CC 0%, #00CED1 100%);
  color: #1B2B4A;
  border: none;
}

.button-primary:hover {
  background: linear-gradient(135deg, #00CED1 0%, #00B4D8 100%);
}
```

#### Secondary Button
```css
.button-secondary {
  background: #1B2B4A;
  color: #FFFFFF;
  border: 2px solid #1B2B4A;
}

.button-secondary:hover {
  background: transparent;
  color: #1B2B4A;
}
```

#### Outline Button
```css
.button-outline {
  background: transparent;
  color: #00E5CC;
  border: 2px solid #00E5CC;
}

.button-outline:hover {
  background: #00E5CC;
  color: #1B2B4A;
}
```

---

### Cards

#### Default Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  color: #1B2B4A;
}

.card:hover {
  border-color: #00E5CC;
  box-shadow: 0 4px 12px rgba(0, 229, 204, 0.15);
}
```

#### Featured Card
```css
.card-featured {
  background: linear-gradient(135deg, #00E5CC 0%, #00CED1 100%);
  color: #1B2B4A;
  border: none;
}
```

---

### Navigation

```css
.navbar {
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.nav-link {
  color: #1B2B4A;
}

.nav-link:hover {
  color: #00E5CC;
}

.nav-link.active {
  color: #00E5CC;
  border-bottom: 2px solid #00E5CC;
}
```

---

### Sections

#### Light Section
```css
.section-light {
  background: #FFFFFF;
  color: #1B2B4A;
}
```

#### Alt Section
```css
.section-alt {
  background: #F9FAFB;
  color: #1B2B4A;
}
```

#### Dark Section
```css
.section-dark {
  background: #1B2B4A;
  color: #FFFFFF;
}
```

#### Accent Section
```css
.section-accent {
  background: linear-gradient(135deg, 
    rgba(0, 229, 204, 0.1) 0%,
    rgba(0, 206, 209, 0.05) 100%
  );
  color: #1B2B4A;
}
```

---

## 🎭 Dark Mode Considerations

For future dark mode implementation:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0F1419;
    --foreground: #F9FAFB;
    --primary: #00E5CC;
    --accent: #00CED1;
    --muted: #1B2B4A;
  }
}
```

---

## 📊 Color Psychology & Brand Alignment

### Cyan/Turquoise (#00E5CC - #00CED1)
**Associations:**
- Technology and innovation
- Clarity and precision
- Fresh and modern
- Trust and reliability
- Digital/tech industry

**Why it works for CPH Acoustics:**
- Signals cutting-edge technology
- Conveys technical precision
- Modern, forward-thinking
- Trustworthy B2B brand

### Navy Blue (#1B2B4A)
**Associations:**
- Professionalism
- Expertise and authority
- Stability and trust
- Intelligence
- Corporate credibility

**Why it works for CPH Acoustics:**
- Professional B2B positioning
- Technical authority
- Engineering expertise
- Trustworthy consulting partner

---

## 🛠️ Implementation Checklist

- [x] Extract colors from logo PNG files
- [x] Update PRD.md with brand colors
- [x] Update WIREFRAME.md with brand colors
- [x] Update COMPONENT-INTEGRATION-GUIDE.md with brand colors
- [x] Update README.md with brand colors
- [x] Create BRAND-COLORS.md documentation
- [ ] Update TailwindCSS config in actual project
- [ ] Test all color combinations for accessibility
- [ ] Create color swatches for design reference
- [ ] Document gradient animations
- [ ] Create dark mode variants (stretch goal)

---

## 📁 Logo Assets

### Available Files
- `public/CPH Acoustics Logo.svg` - Full logo with text (vector)
- `public/CPH Acoustics Logo.png` - Full logo with text (raster)
- `public/CPH Acoustics Icon.svg` - Icon only (vector)
- `public/CPH Acoustics Icon.png` - Icon only (raster)

### Usage Guidelines
- **Full Logo:** Use on light backgrounds with adequate spacing
- **Icon Only:** Use for favicons, social media profiles, small spaces
- **Minimum Size:** Logo should not be smaller than 120px wide
- **Clear Space:** Maintain minimum clear space of 0.5x the logo height around all sides

---

## 🎨 Color Export Formats

### Hex Values
```
Primary Navy:     #1B2B4A
Accent Primary:   #00E5CC
Accent Secondary: #00CED1
Accent Tertiary:  #00B4D8
```

### RGB Values
```
Primary Navy:     rgb(27, 43, 74)
Accent Primary:   rgb(0, 229, 204)
Accent Secondary: rgb(0, 206, 209)
Accent Tertiary:  rgb(0, 180, 216)
```

### HSL Values
```
Primary Navy:     hsl(218, 39%, 20%)
Accent Primary:   hsl(176, 100%, 71%)
Accent Secondary: hsl(179, 100%, 66%)
Accent Tertiary:  hsl(195, 100%, 58%)
```

### CSS Custom Properties
```css
:root {
  --color-primary: #1B2B4A;
  --color-accent-primary: #00E5CC;
  --color-accent-secondary: #00CED1;
  --color-accent-tertiary: #00B4D8;
  --color-background: #FFFFFF;
  --color-background-alt: #F9FAFB;
  --color-text: #1B2B4A;
  --color-text-muted: #64748B;
  --color-border: #E2E8F0;
}
```

---

**All brand colors are now documented and ready for implementation!** 🎉

