# CSS Architecture & Styling Guide

## Overview
The project uses a modular CSS architecture combined with Tailwind CSS for rapid development. All styles are organized in the `src/styles/` directory.

## Directory Structure

```
src/styles/
├── globals.css       # Global variables, base styles, typography
├── navigation.css    # Navigation bar and menu styles
├── hero.css          # Hero section and landing area
├── portfolio.css     # Portfolio grid and project cards
├── footer.css        # Footer component styles
├── components.css    # Reusable component styles (buttons, cards, forms)
├── animations.css    # Animation and transition utilities
└── utilities.css     # Responsive and utility classes
```

## CSS Variables (Design System)

### Colors
- `--color-primary`: #1e293b (Main background)
- `--color-secondary`: #0f172a (Secondary background)
- `--color-accent`: #f59e0b (Primary accent - orange)
- `--color-accent-light`: #fbbf24 (Light accent)
- `--color-text-primary`: #f1f5f9 (Primary text)
- `--color-text-secondary`: #cbd5e1 (Secondary text)
- `--color-border`: #334155 (Border color)
- `--color-bg-dark`: #0f172a (Dark background)
- `--color-bg-light`: #1e293b (Light background)

### Spacing Scale
- `--spacing-xs`: 0.25rem
- `--spacing-sm`: 0.5rem
- `--spacing-md`: 1rem
- `--spacing-lg`: 1.5rem
- `--spacing-xl`: 2rem
- `--spacing-2xl`: 3rem
- `--spacing-3xl`: 4rem

### Typography
- Font Family: system-ui, Avenir, Helvetica, Arial, sans-serif
- Font Sizes: xs (0.75rem) to 5xl (3rem)
- Line Heights: tight (1.2), normal (1.5), relaxed (1.75)

### Shadows
- `--shadow-sm`: Light shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--shadow-xl`: Extra large shadow
- `--shadow-2xl`: 2x large shadow

### Transitions
- `--transition-fast`: 150ms
- `--transition-normal`: 300ms
- `--transition-slow`: 500ms

### Border Radius
- `--radius-sm`: 0.375rem
- `--radius-md`: 0.5rem
- `--radius-lg`: 0.75rem
- `--radius-xl`: 1rem
- `--radius-2xl`: 1.5rem

## Key Classes

### Layout
- `.container` - Max-width container with padding
- `.section` - Section spacing (3xl)
- `.section-sm` - Small section spacing (xl)
- `.flex-center` - Flex centered layout
- `.flex-between` - Flex space-between layout

### Components
- `.btn` - Base button
- `.btn-primary` - Primary button (accent color)
- `.btn-secondary` - Secondary button (outline)
- `.card` - Basic card component
- `.badge` - Badge/tag component
- `.tag` - Tag for categorization

### Animations
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation
- `.animate-zoom-in` - Zoom in animation
- `.animate-pulse` - Pulsing animation
- `.animate-float` - Floating animation

### Text Utilities
- `.text-primary` / `.text-secondary` / `.text-accent` - Text colors
- `.text-sm` to `.text-4xl` - Font sizes
- `.text-bold` / `.text-semibold` - Font weights
- `.text-center` / `.text-left` / `.text-right` - Text alignment

### Responsive Classes
- `.hidden-lg` - Hide on large screens
- `.hidden-md` - Hide on medium screens
- `.hidden-sm` - Hide on small screens
- `.flex-col-mobile` - Column flex on mobile
- `.text-center-mobile` - Center text on mobile

## Usage Examples

### Hero Section with CTA Buttons
```html
<div class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Welcome</h1>
    <p class="hero-subtitle">Your awesome subtitle</p>
    <div class="hero-cta">
      <button class="hero-btn hero-btn-primary">Get Started</button>
      <button class="hero-btn hero-btn-secondary">Learn More</button>
    </div>
  </div>
</div>
```

### Portfolio Card
```html
<div class="portfolio-card">
  <div class="portfolio-card-image">
    <img src="image.jpg" alt="Project" />
    <div class="play-button"></div>
  </div>
  <div class="portfolio-card-content">
    <h3 class="portfolio-card-title">Project Title</h3>
    <p class="portfolio-card-description">Description...</p>
    <div class="portfolio-card-tags">
      <span class="tag">React</span>
      <span class="tag">Video Editing</span>
    </div>
  </div>
</div>
```

### Button Variants
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-sm btn-primary">Small Button</button>
<button class="btn btn-lg btn-primary">Large Button</button>
```

### Animations
```html
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-up animate-stagger-1">Staggered animation</div>
<div class="animate-pulse">Pulsing effect</div>
```

## Responsive Breakpoints

- **Large**: 1024px and above
- **Medium**: 768px - 1023px
- **Small**: 480px - 767px
- **Mobile**: Below 480px

## Color Palette

The design uses a dark theme optimized for a video editor portfolio:
- Dark backgrounds with high contrast
- Orange/amber accent color (#f59e0b) for CTAs and highlights
- Slate gray for borders and secondary elements
- Light text for readability

## Best Practices

1. **Use CSS Variables** - Reference design system variables instead of hard-coded values
2. **Utility First** - Combine utility classes for consistent styling
3. **Component Classes** - Use semantic class names for components
4. **Mobile First** - Write mobile styles first, then add media queries
5. **Animations** - Use predefined animations from animations.css
6. **Accessibility** - Ensure sufficient color contrast and keyboard navigation

## Modifying Styles

To modify the design system:
1. Edit variables in `globals.css`
2. Changes will cascade throughout the project
3. Test responsive breakpoints
4. Validate color contrast for accessibility

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Custom fonts (Google Fonts integration)
- [ ] Additional animation library
- [ ] Accessibility utilities (focus states, high contrast)
- [ ] Print styles optimization
