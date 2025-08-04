# DrySpace Design System

## Tech Stack
- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Color Palette

### Brand Colors
```css
--primary: #f97316 (orange-500)
--primary-foreground: white
--secondary: #10b981 (emerald-500)
--secondary-foreground: white
--accent: #3b82f6 (blue-500)
--accent-foreground: white
```

### Semantic Colors
```css
--success: #10b981 (emerald-500)
--warning: #f59e0b (amber-500)
--error: #ef4444 (red-500)
--info: #3b82f6 (blue-500)
```

### Neutral Colors
```css
--background: white
--foreground: #111827 (gray-900)
--muted: #f3f4f6 (gray-100)
--muted-foreground: #6b7280 (gray-500)
--border: #e5e7eb (gray-200)
```

## Typography

### Font Families
- **Sans**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Serif**: Georgia, 'Times New Roman', serif (for article content)
- **Mono**: monospace (for code)

### Font Sizes
- **xs**: text-xs (0.75rem)
- **sm**: text-sm (0.875rem)
- **base**: text-base (1rem)
- **lg**: text-lg (1.125rem)
- **xl**: text-xl (1.25rem)
- **2xl**: text-2xl (1.5rem)
- **3xl**: text-3xl (1.875rem)
- **4xl**: text-4xl (2.25rem)
- **5xl**: text-5xl (3rem)

## Spacing Scale
- Use Tailwind's default spacing scale (0.25rem increments)
- Common patterns:
  - **Section padding**: py-16 md:py-24
  - **Container padding**: px-4 md:px-6
  - **Card padding**: p-6
  - **Button padding**: px-4 py-2 (default), px-3 py-1.5 (small), px-6 py-3 (large)

## Component Standards

### Buttons
```tsx
// Primary
<Button variant="default" size="default">
  Primary Action
</Button>

// Secondary
<Button variant="secondary" size="default">
  Secondary Action
</Button>

// Outline
<Button variant="outline" size="default">
  Outline Action
</Button>

// Ghost
<Button variant="ghost" size="default">
  Ghost Action
</Button>
```

### Cards
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

### Forms
- Always use shadcn/ui Form components
- Include proper validation with Zod
- Show loading states
- Provide clear error messages

### Navigation
- Sticky header with backdrop blur
- Mobile menu using sheet component
- Breadcrumbs for all content pages

### Layout Patterns

#### Container
```html
<div class="container mx-auto px-4 md:px-6">
  <!-- Content -->
</div>
```

#### Section
```html
<section class="py-16 md:py-24">
  <div class="container mx-auto px-4 md:px-6">
    <!-- Content -->
  </div>
</section>
```

#### Grid Layouts
```html
<!-- 2 Column -->
<div class="grid md:grid-cols-2 gap-8">

<!-- 3 Column -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- 4 Column -->
<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

## Responsive Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Animation Standards
- Use Tailwind transitions
- Respect prefers-reduced-motion
- Common transitions:
  - `transition-colors duration-200`
  - `transition-transform duration-200`
  - `transition-all duration-200`

## Accessibility Standards
- All interactive elements must have focus states
- Use semantic HTML
- Include ARIA labels where needed
- Ensure color contrast meets WCAG AA
- Support keyboard navigation

## Icon Usage
- Use Lucide React icons consistently
- Common icon mappings:
  - Phone: `<Phone className="h-5 w-5" />`
  - Email: `<Mail className="h-5 w-5" />`
  - Location: `<MapPin className="h-5 w-5" />`
  - Check: `<Check className="h-5 w-5" />`
  - Arrow: `<ArrowRight className="h-5 w-5" />`

## Shadow Standards
- Small: `shadow-sm`
- Default: `shadow`
- Medium: `shadow-md`
- Large: `shadow-lg`
- Extra Large: `shadow-xl`

## Border Radius
- Small: `rounded-sm` (0.125rem)
- Default: `rounded-md` (0.375rem)
- Large: `rounded-lg` (0.5rem)
- Extra Large: `rounded-xl` (0.75rem)
- Full: `rounded-full`

## Z-Index Scale
- Dropdown: `z-10`
- Sticky: `z-20`
- Fixed: `z-30`
- Modal Backdrop: `z-40`
- Modal: `z-50`