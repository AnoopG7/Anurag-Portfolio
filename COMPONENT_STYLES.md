# Component Styling Guide

## Navigation Bar

### Default State
```css
.navbar
  ├── background: var(--color-bg-light)
  ├── border-bottom: 1px solid var(--color-border)
  ├── position: sticky
  └── z-index: 50

.navbar-brand
  ├── font-size: var(--font-size-2xl)
  ├── color: var(--color-accent)
  └── hover → color: var(--color-accent-light)

.navbar-link
  ├── color: var(--color-text-primary)
  ├── hover/active → color: var(--color-accent)
  └── active → bottom border highlight

.navbar-cta
  ├── background: var(--color-accent)
  ├── color: var(--color-bg-dark)
  └── hover → scale up with shadow
```

### Mobile Menu
- Hidden by default on mobile
- Hamburger toggle button appears
- Slides down when active
- Full width dropdown menu

---

## Hero Section

### Layout
```css
.hero
  ├── min-height: 600px
  ├── background: gradient (dark → light)
  ├── position: relative with pseudo-elements
  └── display: flex (center)

.hero::before & .hero::after
  ├── Radial gradient circles
  ├── Positioned in corners
  └── Creates background texture
```

### Content
```css
.hero-title
  ├── font-size: var(--font-size-5xl)
  ├── font-weight: 800
  └── responsive: 3xl on mobile

.hero-subtitle
  ├── font-size: var(--font-size-xl)
  ├── color: var(--color-text-secondary)
  └── margin-bottom: var(--spacing-2xl)

.hero-cta
  ├── display: flex gap
  └── responsive: flex-col on mobile (full width)
```

### Button Variants
```css
.hero-btn-primary
  ├── background: var(--color-accent)
  ├── hover → lighter color + lift effect
  └── transition: all 300ms

.hero-btn-secondary
  ├── border: 2px solid accent
  ├── background: transparent
  └── hover → fill with accent color
```

---

## Portfolio Section

### Grid Layout
```css
.portfolio-grid
  ├── display: grid
  ├── grid-template-columns: auto-fit minmax(300px, 1fr)
  ├── gap: var(--spacing-2xl)
  └── Responsive: 1 column on mobile
```

### Portfolio Card
```css
.portfolio-card
  ├── background: var(--color-bg-light)
  ├── border: 1px solid var(--color-border)
  ├── border-radius: var(--radius-xl)
  ├── hover:
  │   ├── border-color → accent
  │   └── transform: translateY(-8px)
  └── box-shadow: 2xl on hover

.portfolio-card-image
  ├── height: 200px
  ├── object-fit: cover
  ├── background: gradient (accent colors)
  ├── position: relative
  └── overlay opacity effect

.play-button
  ├── position: absolute (center)
  ├── width/height: 60px
  ├── background: var(--color-accent)
  ├── border-radius: 50%
  ├── opacity: 0 (hidden by default)
  └── hover → opacity: 1 + scale
```

### Card Content
```css
.portfolio-card-title
  ├── font-size: var(--font-size-lg)
  ├── font-weight: 700
  └── color: var(--color-text-primary)

.portfolio-card-description
  ├── font-size: var(--font-size-sm)
  ├── color: var(--color-text-secondary)
  └── flex-grow: 1 (maintains layout)

.tag
  ├── background: rgba(accent, 0.1)
  ├── color: var(--color-accent)
  ├── border: 1px solid accent
  └── hover → filled with accent
```

### Filter Buttons
```css
.filter-btn
  ├── background: transparent
  ├── border: 1px solid var(--color-border)
  ├── active → background: accent, color: dark
  └── transition: all 300ms
```

---

## Footer

### Layout
```css
.footer
  ├── background: var(--color-secondary)
  ├── border-top: 1px solid var(--color-border)
  ├── padding: 3rem 0 1rem
  └── margin-top: auto (sticky footer)

.footer-content
  ├── display: grid
  ├── grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
  └── gap: var(--spacing-2xl)
```

### Social Links
```css
.social-link
  ├── display: inline-flex (center)
  ├── width/height: 40px
  ├── background: rgba(accent, 0.1)
  ├── border: 1px solid accent
  ├── border-radius: 50%
  └── hover:
      ├── background: accent
      ├── color: dark
      └── transform: translateY(-4px)
```

### Newsletter Form
```css
.newsletter-form
  ├── display: flex
  ├── gap: var(--spacing-sm)
  └── responsive: flex-col on mobile

.newsletter-input
  ├── flex: 1
  ├── background: rgba(white, 0.05)
  └── focus:
      ├── border-color: accent
      └── background: rgba(white, 0.1)

.newsletter-btn
  ├── background: accent
  └── hover → lighter color + lift
```

---

## Reusable Components

### Button Component
```css
.btn
  ├── display: inline-block
  ├── padding: sm lg (default)
  ├── border: none
  ├── border-radius: var(--radius-md)
  ├── font-weight: 600
  ├── cursor: pointer
  └── transition: all 300ms

/* Variants */
.btn-primary
  ├── background: accent
  ├── color: dark
  └── hover → lighter + lift

.btn-secondary
  ├── background: transparent
  ├── border: 2px solid accent
  ├── color: accent
  └── hover → filled

/* Sizes */
.btn-sm    → xs padding, sm font
.btn-lg    → md padding, lg font
.btn:disabled → opacity: 0.5, cursor: not-allowed
```

### Card Component
```css
.card
  ├── background: var(--color-bg-light)
  ├── border: 1px solid var(--color-border)
  ├── border-radius: var(--radius-lg)
  ├── padding: var(--spacing-lg)
  └── hover:
      ├── border-color: accent
      └── box-shadow: lg

.card-header
  ├── padding-bottom: lg
  ├── border-bottom: 1px solid border
  └── margin-bottom: lg

.card-title
  ├── font-size: lg
  ├── font-weight: 700
  └── color: primary text

.card-body
  ├── color: secondary text
  └── padding: lg

.card-footer
  ├── display: flex
  ├── justify-content: space-between
  ├── padding-top: lg
  ├── border-top: 1px solid border
  └── margin-top: lg
```

### Badge Component
```css
.badge
  ├── display: inline-block
  ├── padding: xs md
  ├── border-radius: radius-md
  ├── font-size: xs
  ├── font-weight: 600
  └── border: 1px solid

/* Variants */
.badge-primary    → orange accent
.badge-success    → green (#22c55e)
.badge-warning    → orange
.badge-danger     → red (#ef4444)
```

### Form Elements
```css
input[type], textarea, select
  ├── width: 100%
  ├── padding: sm md
  ├── border: 1px solid border
  ├── background: rgba(white, 0.05)
  ├── color: primary text
  └── focus:
      ├── outline: none
      ├── border-color: accent
      └── background: rgba(white, 0.1)

.form-group
  ├── margin-bottom: lg
  └── display: flex flex-col

.form-label
  ├── display: block
  ├── margin-bottom: sm
  ├── color: primary text
  └── font-weight: 600

.form-error
  ├── color: #ef4444
  ├── font-size: sm
  └── margin-top: xs
```

### Alert Component
```css
.alert
  ├── padding: lg
  ├── border-radius: radius-md
  ├── display: flex gap
  ├── align-items: flex-start
  └── border-left: thick colored border

/* Variants */
.alert-success
  ├── background: rgba(green, 0.1)
  ├── border-color: #22c55e
  └── color: #22c55e

.alert-error
  ├── background: rgba(red, 0.1)
  ├── border-color: #ef4444
  └── color: #ef4444

.alert-warning
  ├── background: rgba(accent, 0.1)
  ├── border-color: accent
  └── color: accent

.alert-info
  ├── background: rgba(blue, 0.1)
  ├── border-color: #3b82f6
  └── color: #3b82f6
```

---

## Animation Specifications

### Fade Animations
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Use Case**: Show/hide elements

### Slide Animations
- **Duration**: 300ms
- **Easing**: ease-out
- **Use Case**: Entrance/exit from sides
- **Variants**: slide-up, slide-down, slide-left, slide-right

### Zoom Animations
- **Duration**: 300ms
- **Easing**: ease-out
- **Use Case**: Scale-based entrance
- **Range**: 0.8 to 1

### Pulse Animations
- **Duration**: 300ms - 3s
- **Easing**: ease-in-out / infinite
- **Use Case**: Draw attention to elements
- **Opacity**: 0.7-1 (slow) or 0.5-1 (very slow)

### Stagger Effect
- **Delay**: 0.1s - 0.5s
- **Classes**: animate-stagger-1 to animate-stagger-5
- **Use Case**: Sequential animations on multiple elements

---

## Responsive Behavior

### Desktop (≥1024px)
- Full navigation menu visible
- Multi-column grids (2-3 columns)
- Normal font sizes
- All animations enabled

### Tablet (768px - 1023px)
- Navigation may collapse
- 2-column grids
- Slightly reduced spacing
- Touch-friendly buttons

### Mobile (<768px)
- Hamburger menu
- 1-column grids
- Reduced font sizes
- Full-width buttons
- Stacked layouts
- Reduced animation intensity

---

## Color Contrast

All text meets WCAG AA standards:
- Primary text on dark background: High contrast
- Accent color on dark background: High contrast
- Hover states maintain contrast ratio
- Form fields have adequate contrast

---

## Accessibility Considerations

1. **Focus States**: All interactive elements have visible focus
2. **Color**: Not the only indicator (icons, text, borders)
3. **Motion**: Respects `prefers-reduced-motion`
4. **Buttons**: Adequate padding and size (≥44px)
5. **Forms**: Associated labels and error messages
6. **Links**: Distinguishable from regular text

---

For implementation examples, see components in `src/components/`
