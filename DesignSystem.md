# Protocol Light Design System

## I. The Core Philosophy

**The Vibe:** Precision, Intelligence, Clarity, Visionary.

**The Metaphor:** A digital glass tablet used by a scientist in the year 2050.

**The Key Visual:** Visible Grids. The user should feel like they are looking at the schematics of your mind.

---

## II. Color Palette

We are avoiding soft grays. We want high contrast to scream "precision."

### Canvas (Background)

- **#FFFFFF (Pure White)**

### The Void (Primary Text)

- **#050505 (Almost pure black)**
- *Sharp, ink-like.*

### The Construct (Grid Lines/Dividers)

- **#E5E5E5 (Very subtle gray)**
- *Visible only when looking for it.*

### The Pulse (Accent Color)

- **#2A00FF (Electric Ultraviolet)**
- *Usage: Used very sparingly. Only for links, active states, or a single dot on the screen. It represents "energy."*

---

## III. Typography System

Typography is the main graphic element in minimalism. We will mix a wide, aggressive sans-serif with a technical monospaced font.

### 1. Display / Headings: [Unbounded](https://fonts.google.com/specimen/Unbounded)

- **Why:** It’s variable, wide, and has unique glyphs that look alien yet readable. It feels expansive and "revolutionary."
- **Styling:** Uppercase, tight letter spacing (tracking -0.02em).

### 2. Body Copy: [Switzer](https://www.fontshare.com/fonts/switzer) or [Inter](https://fonts.google.com/specimen/Inter)

- **Why:** Neo-grotesque, clean, extremely legible. It frames you as "smart" and "organized."

### 3. Data / Metadata: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

- **Why:** For dates, tags, and small details. It adds that "coding/engineering" layer to the design.

---

## IV. Layout & Grid Architecture

This is where the "Smart UI" comes in. We will use a Modular Grid.

- **Visible Borders:** Sections shouldn't just float; they should be separated by thin 1px solid `#E5E5E5` lines.
- **Asymmetry:** Don't center everything. Put the heading on the far left, and the image on the far right. Leave the middle empty. This creates "tension" and makes the design feel curated.
- **Sticky Metadata:** As the user scrolls, keep small bits of data sticky on the sides (e.g., current scroll position, your coordinates, or the current year "2026").

---

## V. UI Components & "Revolutionary" Elements

### 1. The "Glass" Cards

Instead of drop shadows (which look dated), we use blur and borders.

- **Style:** White background, 1px light gray border.
- **Hover Effect:** The border turns Black (`#000`), and the text shifts slightly to the right. No elevation lifting; just flat, mechanical movement.

### 2. The Cursor

Replace the default pointer.

- **Design:** A small, hollow black circle or a "crosshair" (+).
- **Interaction:** When hovering over a link, the crosshair snaps to the size of the element or spins.

### 3. Imagery Style

To make you look smart and revolutionary, normal headshots won't do.

- **Treatment:** High-contrast Black & White.
- **The Glitch:** When the user hovers over your photo, we apply a subtle chromatic aberration (RGB split) or a "pixel stretch" effect.
- **Context:** Avoid smiling excessively. Look focused, looking slightly off-camera or directly into the lens.

### 4. Micro-Interactions (The "Smart" Feel)

- **Scramble Text:** When the page loads, headers don't just fade in. They "decrypt." (e.g., "Hello" cycles through `X#f9a` -> `H@l1o` -> `Hello`).
- **Smooth Scroll:** Use a slightly weighted scroll (Lenis scroll) so the site feels heavy and expensive.

---

## VI. Visual Mockup Concept

**Hero Section (Top of page):**

*(Top Left Corner - Mono font)*
`[SYSTEM: ONLINE] LAT: 28.6139° N`

*(Center - Massive Typography - Unbounded)*

# DESIGNING

# THE FUTURE

# ONE PIXEL

# AT A TIME

*(Bottom Right)*
A simple button:
**[ VIEW PROTOCOLS ]**
*(Bordered box, sharp edges)*
