# CSS Quick Reference Guide

## 📁 File Structure
```
src/styles/
├── globals.css        → CSS variables, base styles, typography
├── navigation.css     → Navigation/navbar
├── hero.css           → Hero section
├── portfolio.css      → Portfolio grid & cards
├── footer.css         → Footer
├── components.css     → Buttons, cards, forms, badges
├── animations.css     → Keyframe animations
└── utilities.css      → Utility classes
```

## 🎨 Color Variables

```css
--color-primary: #1e293b          /* Main background */
--color-secondary: #0f172a        /* Secondary background */
--color-accent: #f59e0b           /* Orange - Primary accent */
--color-accent-light: #fbbf24     /* Light orange */
--color-text-primary: #f1f5f9     /* Main text */
--color-text-secondary: #cbd5e1   /* Secondary text */
--color-border: #334155           /* Border color */
--color-bg-dark: #0f172a          /* Dark background */
--color-bg-light: #1e293b         /* Light background */
```

## 📏 Spacing Scale

| Variable | Value |
|----------|-------|
| `--spacing-xs` | 0.25rem (4px) |
| `--spacing-sm` | 0.5rem (8px) |
| `--spacing-md` | 1rem (16px) |
| `--spacing-lg` | 1.5rem (24px) |
| `--spacing-xl` | 2rem (32px) |
| `--spacing-2xl` | 3rem (48px) |
| `--spacing-3xl` | 4rem (64px) |

## 🔤 Typography Classes

### Font Sizes
- `.text-xs` → 0.75rem
- `.text-sm` → 0.875rem
- `.text-base` → 1rem
- `.text-lg` → 1.125rem
- `.text-xl` → 1.25rem
- `.text-2xl` → 1.5rem
- `.text-3xl` → 1.875rem
- `.text-4xl` → 2.25rem

### Font Weight
- `.text-semibold` → 600
- `.text-bold` → 700

### Text Color
- `.text-primary` → Primary text color
- `.text-secondary` → Secondary text color
- `.text-accent` → Accent color

## 🎯 Common Component Classes

### Hero Section
```html
<div class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Title <span class="gradient">with gradient</span></h1>
    <p class="hero-subtitle">Subtitle</p>
    <div class="hero-cta">
      <button class="hero-btn hero-btn-primary">Primary</button>
      <button class="hero-btn hero-btn-secondary">Secondary</button>
    </div>
  </div>
</div>
```

### Portfolio Cards
```html
<div class="portfolio-card">
  <div class="portfolio-card-image">
    <img src="image.jpg" alt="Project">
    <div class="play-button"></div>
  </div>
  <div class="portfolio-card-content">
    <h3 class="portfolio-card-title">Title</h3>
    <p class="portfolio-card-description">Description</p>
    <div class="portfolio-card-tags">
      <span class="tag">Tag1</span>
      <span class="tag">Tag2</span>
    </div>
  </div>
</div>
```

### Buttons
```html
<!-- Primary Button -->
<button class="btn btn-primary">Primary</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Secondary</button>

<!-- Different Sizes -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-primary">Large</button>
```

### Cards
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>
```

### Badges & Tags
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="tag">Clickable Tag</span>
```

## ✨ Animation Classes

### Simple Animations
- `.animate-fade-in` - Fade in
- `.animate-fade-out` - Fade out
- `.animate-slide-up` - Slide up
- `.animate-slide-down` - Slide down
- `.animate-slide-left` - Slide left
- `.animate-slide-right` - Slide right
- `.animate-zoom-in` - Zoom in
- `.animate-zoom-out` - Zoom out

### Continuous Animations
- `.animate-pulse` - Pulsing effect
- `.animate-pulse-slow` - Slower pulse
- `.animate-float` - Floating effect
- `.animate-bounce` - Bouncing effect
- `.animate-rotate` - Continuous rotation
- `.animate-glow` - Glowing effect
- `.animate-wave` - Wave effect
- `.animate-shimmer` - Shimmer effect

### Stagger (for multiple elements)
```html
<div class="animate-slide-up animate-stagger-1"></div>
<div class="animate-slide-up animate-stagger-2"></div>
<div class="animate-slide-up animate-stagger-3"></div>
```

Stagger options: 1-5 (0.1s - 0.5s delays)

## 🎛️ Layout Utilities

### Display
- `.flex` - Flexbox
- `.grid` - Grid layout
- `.block` - Block display
- `.inline-block` - Inline-block
- `.hidden` - Hidden (display: none)

### Flex Helpers
- `.flex-center` - Center horizontally & vertically
- `.flex-between` - Space-between layout
- `.flex-col` - Flex column

### Spacing
- `.mt-sm`, `.mt-md`, `.mt-lg` - Margin top
- `.mb-sm`, `.mb-md`, `.mb-lg` - Margin bottom
- `.pt-sm`, `.pt-md`, `.pt-lg` - Padding top
- `.pb-sm`, `.pb-md`, `.pb-lg` - Padding bottom
- `.mx-auto` - Horizontal centering
- `.gap-sm`, `.gap-md`, `.gap-lg` - Flex gap

## 📐 Responsive Classes

### Visibility
- `.hidden-lg` - Hide on large screens (≥1024px)
- `.hidden-md` - Hide on medium screens (≤768px)
- `.hidden-sm` - Hide on small screens (≤480px)

### Mobile Utilities
- `.flex-col-mobile` - Column flex on mobile
- `.text-center-mobile` - Center text on mobile
- `.w-full-mobile` - Full width on mobile

## 🎨 Effects & Utilities

### Glass Effect
```html
<div class="glass-effect">Frosted glass background</div>
```

### Gradient Text
```html
<h1 class="gradient-text">Gradient text effect</h1>
```

### Card Hover
```html
<div class="card-hover">Lifts on hover with shadow</div>
```

### Text Alignment
- `.text-left` - Left align
- `.text-center` - Center align
- `.text-right` - Right align

## 📱 Breakpoints

| Device | Width |
|--------|-------|
| Large | ≥1024px |
| Medium | 768px - 1023px |
| Small | 480px - 767px |
| Mobile | <480px |

## 🔍 Usage Tips

1. **Always use CSS variables** for consistency
2. **Combine utility classes** for maximum flexibility
3. **Use semantic class names** for maintainability
4. **Test animations** at different speeds
5. **Check responsive** behavior on all breakpoints
6. **Ensure accessibility** with proper contrast
7. **Use Tailwind classes** alongside custom CSS

## 📝 Examples

### Hero Section with Animation
```html
<div class="hero">
  <div class="hero-content animate-fade-in">
    <h1 class="hero-title animate-slide-up animate-stagger-1">
      Welcome to <span class="gradient">My Portfolio</span>
    </h1>
    <p class="hero-subtitle animate-slide-up animate-stagger-2">
      Professional Video Editor
    </p>
    <div class="hero-cta animate-slide-up animate-stagger-3">
      <button class="hero-btn hero-btn-primary">Get Started</button>
    </div>
  </div>
</div>
```

### Portfolio Grid
```html
<section class="portfolio-section">
  <div class="section-header">
    <h2 class="section-title">My <span class="highlight">Portfolio</span></h2>
  </div>
  <div class="portfolio-grid">
    <!-- Portfolio cards here -->
  </div>
</section>
```

### Navigation
```html
<nav class="navbar">
  <div class="container navbar-container">
    <a href="/" class="navbar-brand">Anurag</a>
    <ul class="navbar-menu">
      <li><a href="#" class="navbar-link active">Home</a></li>
      <li><a href="#" class="navbar-link">Portfolio</a></li>
      <li><button class="navbar-cta">Contact</button></li>
    </ul>
  </div>
</nav>
```

## 🚀 Best Practices Checklist

- [ ] Use CSS variables for all colors
- [ ] Follow spacing scale
- [ ] Test on mobile, tablet, desktop
- [ ] Check keyboard navigation
- [ ] Ensure color contrast (WCAG AA)
- [ ] Optimize animations (reduce motion preference)
- [ ] Use semantic HTML classes
- [ ] Keep specificity low
- [ ] Document custom classes
- [ ] Test across browsers

---

**For detailed documentation**, see `CSS_ARCHITECTURE.md`
