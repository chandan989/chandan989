# Portfolio Website Prompt - Protocol Light Design System

You are an expert Frontend Developer and UI/UX Designer specializing in futuristic, high-precision interfaces.

Your task is to build a personal portfolio website using **React** that strictly adheres to the **"Protocol Light" Design System**. The website should feel like a "digital glass tablet from the year 2050"—clean, precise, and visionary.

---

## 1. Design System: "Protocol Light"

### Philosophy & Vibe

- **Vibe:** Precision, Intelligence, Clarity, Visionary.
- **Metaphor:** A scientist's glass tablet in the year 2050.
- **Key Visual:** Visible Grids. The user sees the "schematics" of the mind.

### Color Palette

- **Canvas (Background):** `#FFFFFF` (Pure White)
- **Text (Primary):** `#050505` (Almost Pure Black) - Sharp, ink-like
- **Grid/Dividers:** `#E5E5E5` (Subtle Gray) - Visible 1px solid lines separating sections
- **Accent:** `#2A00FF` (Electric Ultraviolet) - Use VERY sparingly (only for links/active states)

### Typography

- **Headings:** `Unbounded` (Google Fonts) - Uppercase, tight letter spacing (tracking -0.02em)
- **Body:** `Switzer` or `Inter` - Neo-grotesque, clean, extremely legible
- **Data/Metadata:** `JetBrains Mono` - For dates, tags, coordinates, technical details

### Layout Philosophy

- **Modular Grid:** Visible borders (`1px solid #E5E5E5`) between sections
- **Asymmetry:** Create tension. Headings far left, content far right. Leave middle empty.
- **Sticky Metadata:** Keep small data bits (coordinates, year "2026", scroll position) sticky on edges
- **Whitespace:** Generous. Elements need breathing room.

### UI Components

#### Glass Cards

- White background, 1px light gray border (`#E5E5E5`)
- **Hover Effect:** Border turns Black (`#000`), text shifts slightly right (2-4px)
- No drop shadows, no rounded corners
- Flat, mechanical movement only

#### Custom Cursor

- Replace default pointer with small hollow black circle or crosshair (+)
- **Interaction:** On hover over links, cursor snaps to element size or spins
- Smooth transition (0.3s ease)

#### Imagery Style

- **Treatment:** High-contrast Black & White
- **Hover Effect:** Subtle chromatic aberration (RGB split) or pixel stretch
- Professional, focused look

### Animations & Micro-interactions

#### Text Decryption Effect

When page loads, headers don't fade in - they "decrypt":

- Example: "HELLO" cycles through random characters: `X#f9a` → `H@l1o` → `HELLO`
- Duration: 0.5-1s per heading
- Use monospace font during decryption

#### Smooth Scroll

- Implement weighted scroll (Lenis scroll library recommended)
- Site should feel "heavy" and expensive
- Smooth easing, not instant jumps

#### Hover States

- All interactive elements must have clear hover states
- Links: Underline appears with sliding animation (left to right)
- Buttons: Border color change + text shift
- Cards: Border darkens, content slides right

#### Loading States

- Form submissions: "TRANSMITTING..." with dot animation
- Project cards: Skeleton screens with same border aesthetic
- Page transitions: Grid reveals from top-left to bottom-right

---

## 2. Website Structure & Content

### Navigation (Header)

**Position:** Fixed top, full width  
**Design:**

- Minimal height (60-80px)
- Left: Logo/Name in `JetBrains Mono`: `[CHANDAN.SYS]`
- Right: Navigation links in uppercase `Unbounded`, small size
  - PROTOCOLS (Projects)
  - CAPABILITIES (About/Skills)
  - UPLINK (Contact)
- Bottom border: 1px solid `#E5E5E5`
- Background: `#FFFFFF` with slight backdrop blur on scroll

**Behavior:**

- Smooth scroll to sections on click
- Active section highlighted with `#2A00FF` accent
- Hides on scroll down, shows on scroll up

---

### Hero Section

**Layout:**

- Full viewport height
- Grid-based with visible dividers

**Content:**

**Top Left Corner** (Mono font, small):

```
[SYSTEM: ONLINE]
LAT: 28.6139° N
LONG: 77.2090° E
TIMESTAMP: 2026
```

**Center** (Massive `Unbounded` typography):

```
DESIGNING
THE FUTURE
ONE PIXEL
AT A TIME
```

**Below Main Heading** (Smaller `Unbounded` text):

```text
18 LIVE PROTOCOLS. ZERO COMPROMISES.
BUILDING THE FUTURE FOR FORWARD-THINKING COMPANIES.
```

**Bottom Center - Dual CTAs:**

Two buttons side by side:

- **Primary CTA:** `[ INITIATE UPLINK ]` (Black bg, white text) → Scrolls to booking form
- **Secondary CTA:** `[ VIEW PROTOCOLS ]` (White bg, black border) → Scrolls to projects

**Additional:**

- Subtle grid lines in background
- Animated crosshair cursor follows mouse position

---

### Social Proof Banner

**Position:** Full-width section immediately after hero, before profile  
**Purpose:** Build immediate credibility and trust

**Design:**

- Minimal height (80-100px)
- Top and bottom borders: 1px solid `#E5E5E5`
- Centered content

**Content:**

```text
[DEPLOYED FOR]
Startups → Scale-ups → Enterprise

[IMPACT METRICS]
18+ Production Systems  |  500K+ Users Impacted  |  3 Continents
```

**Style:**

- `JetBrains Mono` font
- Small text (12-14px)
- High contrast, minimal
- Optional: Subtle fade-in animation on scroll

---

### Profile / Operator Data

**Section Header:** `[OPERATOR.PROFILE]` (Mono font, left aligned)

**Content:**

- **Name:** Chandan Soni
- **Role:** Architect of The Future
- **Bio:** "Experienced Founder with a demonstrated history of working in the information technology industry. Skilled in AI, Robotics, and Web Development. Strong entrepreneurship professional with a focus in Computer Science."
- **Mission Statement:** "Democratizing intelligence and reclaiming data sovereignty. Building systems where users own their data, not corporations."

**Tech Stack Grid:**
Display as bordered boxes in a grid layout:

- AI & Robotics
- Web Development
- System Architecture
- React / Next.js
- Data Sovereignty
- Blockchain Systems

Each skill in its own glass card with hover effect.

**Value Proposition:**
Add below skills:

```
"I architect systems that don't just work—they scale, adapt, and own their future.
From AI pipelines to blockchain infrastructure, I build what others say is impossible."
```

**CTA:** Small button: `[ AVAILABLE FOR SELECT PROJECTS ]` → links to booking

---

### Projects Section - "PROTOCOLS"

**Section Header:** `[ACTIVE.PROTOCOLS]` (Left aligned)

**Layout:**

- Grid: 2 columns on desktop, 1 on mobile
- Each project is a "Glass Card"

**Project Cards:**

1. **O.R.B.I.T.E.R. - Mission Control**
   - URL: <https://o-r-b-i-t-e-r.vercel.app/>
2. **Loopin | Where Reality Becomes Territory**
   - URL: <https://www.loopin.fit/>
3. **P.A.C.T. - Programmable Asset & Compliance Toolkit**
   - URL: <https://p-a-c-t.vercel.app/>
4. **Fulcrum | Omni-Chain Security & Governance Layer**
   - URL: <https://fulcrum-infra.vercel.app/>
5. **agentia-web**
   - URL: <https://agentia-protocol.vercel.app/>
6. **Transform Protocol - Biological Software Evolution**
   - URL: <https://ditto-kappa.vercel.app/>
7. **Heru Pharmaceutical Network**
   - URL: <https://heru-delta.vercel.app/>
8. **node-gateway**
   - URL: <https://n-o-d-e.vercel.app/>
9. **M.E.R.I.D.I.A.N. - Your Data. Your Rules. Your Profit.**
   - URL: <https://m-e-r-i-d-i-a-n.vercel.app/>
10. **R.A.T.C.H.E.T.**
    - URL: <https://ratchet-one.vercel.app/>
11. **Z.E.N.I.T.H.**
    - URL: <https://z-e-n-i-t-h.vercel.app/>
12. **F.O.R.G.E.**
    - URL: <https://f-o-r-g-e.vercel.app/>
13. **QuackGuard - Multi-Agent Moderation Framework**
    - URL: <https://quack-shield.vercel.app/>
14. **H.E.L.I.X.**
    - URL: <https://h-e-l-i-x.vercel.app/>
15. **sentinal-web**
    - URL: <https://sentinel-gray.vercel.app/>
16. **ARGOS | Adaptive Reputation-Gated Oracle System**
    - URL: <https://argos-kappa.vercel.app/>
17. **Red Médica**
    - URL: <https://red-medica.vercel.app/>
18. **STELLAR - Satellite-Powered Agricultural Finance**
    - URL: <https://stellar-kappa-six.vercel.app/>

**Card Structure:**

- **Screenshot/Preview:** Monochrome, high-contrast preview image at top (use placeholder or actual screenshot)
- **Title:** (in `Unbounded`, uppercase)
- **Description:** 1-2 lines explaining what the project does
- **Key Metric/Impact:** (if available) Example: "10K+ users" or "Real-time data processing"
- **Tech Stack Tags:** Visible tech used (React, AI, Blockchain, etc.)
- **"VIEW LIVE SYSTEM ↗"** link button (instead of just "DEPLOY")

**Hover Effect:**

- Card border darkens to black
- Screenshot gets subtle chromatic aberration effect
- Content slides 4px to the right

**Strategic Note:**
These cards are your **showcase** and **credibility builders**. Each one should:

1. Show visual proof (screenshot)
2. Explain impact (metrics/users)
3. Demonstrate capability (tech stack)
4. Make it easy to explore (clear link)

---

### Testimonials / Validation (Optional)

**Position:** After projects, before booking form  
**Purpose:** Final trust-building before conversion

**Layout:**
Horizontal scrollable or 3-column grid

**Content Structure (if you have testimonials):**

```
"Working with Chandan was like having a co-founder who actually ships."
— [Name], CEO at [Company]

"Turned our AI prototype into production in 6 weeks. Unreal."
— [Name], CTO at [Startup]
```

If no testimonials yet, use **validation metrics** instead:

```
[100% Project Completion Rate]
[Average 4-week Delivery]
[Zero Security Incidents]
```

Style: Glass cards with quotes in italics, minimal design

---

### Booking / Uplink Protocol

**Section Header:** `[INITIATE.UPLINK]`

**Purpose:** **Primary conversion point** - this is where visitors become clients

**Pre-Form Copy:**
Add persuasive copy above the form:

```
"Building something ambitious? Let's talk.

I work with founders and teams who:
✓ Need it done right, not just done
✓ Value speed without sacrificing quality
✓ Want a technical partner, not just a contractor

[CURRENT STATUS: ACCEPTING 2-3 PROJECTS/QUARTER]"
```

**Description:**
Terminal-style contact form for clients to "deploy" the architect for their projects.

**Form Design:**

- Minimalist, terminal aesthetic
- No traditional input boxes - use bottom borders only
- Labels in `JetBrains Mono`, small, above inputs
- Green cursor blink in focused input (like terminal)

**Fields:**

```
> IDENTITY
  [Name]
  [Email]

> OBJECTIVE
  [Project Type: Dropdown]
  Options: AI Systems | Web Development | System Architecture | Blockchain | Other

> PARAMETERS
  [Budget Range: Dropdown]
  Options: < $10K | $10K-$50K | $50K-$100K | $100K+ | Equity-based
  
  [Timeline]
  Options: Urgent (< 1 month) | Standard (1-3 months) | Flexible (3+ months)

> TRANSMISSION
  [Message Textarea]
  Placeholder: "Describe your vision..."

[TRANSMIT] Button
```

**Interaction:**

- On submit: Button text changes to "TRANSMITTING..."
- Show packet animation (dots cycling)
- Success: "UPLINK ESTABLISHED. Message received."
- Error: "TRANSMISSION FAILED. Retry protocol."

**Backend Integration:**

- Use EmailJS, Formspree, or Netlify Forms
- Send to: <chandan@elykid.com> (or specified email)
- Include all form data + timestamp
- Optional: Auto-responder confirming receipt within 24 hours

**Post-Form Trust Signals:**
Below the form, add:

```
[RESPONSE TIME: <24 HOURS]
[NDA AVAILABLE UPON REQUEST]
[NO OBLIGATION CONSULTATION]
```

**Alternative Contact Methods:**

```
Prefer email? → chandan@elykid.com
LinkedIn → [Your LinkedIn URL]
```

---

### Footer

**Layout:**

- Full width, top border: 1px solid `#E5E5E5`
- Minimal height (120px)
- Three columns on desktop, stacked on mobile

**Content:**

**Left Column:**

```
[CHANDAN.SYS]
Architect of The Future
```

**Center Column - Navigation:**

```
PROTOCOLS
CAPABILITIES  
UPLINK
```

**Right Column - Social/Contact:**

```
GITHUB →
LINKEDIN →
EMAIL →
```

**Bottom:**

```
© 2026 CHANDAN SONI. ALL RIGHTS RESERVED.
[SYSTEM STATUS: OPERATIONAL]
```

**Design:**

- All text in `JetBrains Mono` except headings
- Links have hover underline effect
- Monochrome, high contrast

---

## 3. Technical Implementation

### Project Setup

```bash
# Initialize Vite + React
npm create vite@latest portfolio -- --template react
cd portfolio
npm install

# Install dependencies
npm install tailwindcss postcss autoprefixer
npm install @studio-freight/lenis  # Smooth scroll
npm install framer-motion  # Animations
npm install react-hook-form  # Form handling
npm install @emailjs/browser  # Email service
```

### File Structure

```
src/
├── App.jsx
├── index.css
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Profile.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Booking.jsx
│   ├── Footer.jsx
│   └── CustomCursor.jsx
├── hooks/
│   ├── useSmoothScroll.js
│   └── useTextDecrypt.js
└── utils/
    └── emailService.js
```

### Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        void: '#050505',
        construct: '#E5E5E5',
        pulse: '#2A00FF',
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
}
```

### Base Styles

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  cursor: none; /* Hide default cursor for custom cursor */
}

body {
  @apply bg-canvas text-void font-body;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  @apply font-display uppercase tracking-tighter;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #FFFFFF;
}

::-webkit-scrollbar-thumb {
  background: #E5E5E5;
  border: 1px solid #050505;
}

::-webkit-scrollbar-thumb:hover {
  background: #050505;
}
```

### Component Examples

#### Custom Cursor Component

```jsx
// components/CustomCursor.jsx
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-300 ${
        isHovering ? 'w-12 h-12' : 'w-6 h-6'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full h-full border-2 border-void rounded-full" />
    </div>
  );
}
```

#### Text Decryption Hook

```jsx
// hooks/useTextDecrypt.js
import { useState, useEffect } from 'react';

export function useTextDecrypt(finalText, duration = 1000) {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, duration / finalText.length);

    return () => clearInterval(interval);
  }, [finalText, duration]);

  return displayText;
}
```

#### Project Card Component

```jsx
// components/ProjectCard.jsx
export default function ProjectCard({ title, description, url, tags }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-construct bg-canvas p-6 transition-all duration-300 hover:border-void"
    >
      <div className="transition-transform duration-300 group-hover:translate-x-1">
        <h3 className="font-display text-lg mb-3">{title}</h3>
        <p className="font-body text-sm text-void/70 mb-4">{description}</p>
        
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs border border-construct px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="font-mono text-xs flex items-center gap-2">
          <span>DEPLOY</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}
```

### SEO & Accessibility

#### Meta Tags (in index.html)

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Chandan Soni - Architect of The Future | AI & Web Development</title>
  <meta name="title" content="Chandan Soni - Architect of The Future" />
  <meta name="description" content="Experienced founder specializing in AI, Robotics, and Web Development. Building systems for data sovereignty and democratizing intelligence." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Chandan Soni - Architect of The Future" />
  <meta property="og:description" content="Experienced founder specializing in AI, Robotics, and Web Development." />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Chandan Soni - Architect of The Future" />
  <meta property="twitter:description" content="Building the future of AI and data sovereignty." />
</head>
```

#### Accessibility Requirements

- **Semantic HTML:** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **ARIA Labels:** Add to all interactive elements
- **Alt Text:** Provide for all images
- **Keyboard Navigation:** Ensure all interactive elements are focusable
- **Focus States:** Visible focus rings with `#2A00FF` accent
- **Color Contrast:** Maintain WCAG AA standards (black on white passes)
- **Screen Reader:** Test with VoiceOver/NVDA

### Performance Optimization

- **Code Splitting:** Use React.lazy() for components
- **Image Optimization:** Use WebP format, lazy loading
- **Font Loading:** Use `font-display: swap`
- **Minification:** Vite handles this in production
- **Caching:** Set appropriate cache headers

### Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npm i -g vercel
vercel

# Or Netlify
npm i -g netlify-cli
netlify deploy --prod
```

---

## 4. Responsive Design

### Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Mobile Adjustments

- Navigation: Hamburger menu (minimal, slides from right)
- Hero: Stack text vertically, reduce font size
- Projects: Single column grid
- Booking form: Full width, single column
- Footer: Stack all sections vertically
- Maintain visible borders aesthetic on all sizes

### Tablet Adjustments

- Projects: 2-column grid maintained
- Slightly reduce spacing
- Navigation remains horizontal

---

## 5. Final Checklist

Before considering the website complete, ensure:

- [ ] All fonts load correctly (Unbounded, Inter, JetBrains Mono)
- [ ] Custom cursor works across all pages
- [ ] Text decryption animates on hero section
- [ ] Smooth scroll implementation (Lenis)
- [ ] All project cards link to correct URLs
- [ ] Contact form sends emails successfully
- [ ] Navigation smooth scrolls to sections
- [ ] Hover states work on all interactive elements
- [ ] Mobile responsive on all sections
- [ ] SEO meta tags present
- [ ] Accessibility standards met
- [ ] Performance optimized (Lighthouse score > 90)
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Fast load time (< 3s on 3G)

---

This prompt contains everything needed to build a production-ready, visually stunning portfolio website that embodies the "Protocol Light" design system. Follow it precisely for optimal results.
