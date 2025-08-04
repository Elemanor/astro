# DrySpace Component Library

## Overview
This component library provides a consistent set of UI components built with Astro, Tailwind CSS, and shadcn/ui. All components follow our design system and are fully accessible.

## Core Components

### Layout Components

#### `Section.astro`
A standardized section wrapper with consistent spacing and backgrounds.

```astro
<Section 
  title="Section Title"
  subtitle="Optional subtitle"
  centered={true}
  background="muted"
  spacing="default"
>
  <!-- Content -->
</Section>
```

**Props:**
- `title` - Section heading
- `subtitle` - Section description
- `centered` - Center align header content
- `background` - default | muted | primary | secondary | accent
- `spacing` - none | small | default | large
- `fullWidth` - Disable container constraints

#### `Grid.astro`
Responsive grid layout component.

```astro
<Grid columns={3} gap="default">
  <!-- Grid items -->
</Grid>
```

**Props:**
- `columns` - 1 | 2 | 3 | 4 | 6
- `gap` - small | default | large

### UI Components

#### `AstroButton.astro`
Wrapper for shadcn/ui Button component with Astro compatibility.

```astro
<AstroButton 
  href="/contact/"
  variant="default"
  size="default"
>
  Button Text
</AstroButton>
```

**Props:**
- `href` - Optional link URL
- `variant` - default | secondary | outline | ghost | link | destructive
- `size` - sm | default | lg | icon
- `type` - button | submit | reset
- `disabled` - Disable button

#### `AstroCard.astro`
Card container with optional header.

```astro
<AstroCard 
  title="Card Title"
  description="Card description"
>
  <!-- Card content -->
</AstroCard>
```

**Props:**
- `title` - Card heading
- `description` - Card subtitle
- `showHeader` - Show/hide header section

#### `AstroBadge.astro`
Badge component for labels and statuses.

```astro
<AstroBadge variant="default">
  Label
</AstroBadge>
```

**Props:**
- `variant` - default | secondary | destructive | outline | success | warning

#### `ContentCard.astro`
Specialized card for displaying content items (blog posts, services, etc).

```astro
<ContentCard
  title="Article Title"
  description="Brief description"
  href="/blog/article/"
  image="/images/article.jpg"
  date="2024-01-15"
  categories={['Category 1']}
  type="blog"
/>
```

**Props:**
- `title` - Content title
- `description` - Content excerpt
- `href` - Link URL
- `image` - Featured image
- `date` - Publication date
- `readTime` - Estimated read time
- `categories` - Category array
- `tags` - Tag array
- `type` - blog | guide | service | location
- `featured` - Highlight as featured

#### `Hero.astro`
Hero section component with flexible layouts.

```astro
<Hero
  title="Page Title"
  subtitle="Page subtitle"
  description="Detailed description"
  badge="New"
  image="/images/hero.jpg"
  features={['Feature 1', 'Feature 2']}
  primaryCTA={{ text: "Get Started", href: "/contact/" }}
  secondaryCTA={{ text: "Learn More", href: "/about/" }}
/>
```

**Props:**
- `title` - Hero heading
- `subtitle` - Hero subheading
- `description` - Additional description
- `badge` - Optional badge text
- `image` - Hero image
- `imageAlt` - Image alt text
- `features` - Feature list array
- `primaryCTA` - Primary call-to-action
- `secondaryCTA` - Secondary call-to-action
- `size` - small | default | large
- `alignment` - left | center

### React Components

#### `FAQAccordion.tsx`
Accordion component for FAQ sections.

```tsx
<FAQAccordion 
  faqs={[
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" }
  ]} 
  client:load 
/>
```

#### `ContactFormSection.tsx`
Contact form with validation and shadcn/ui form components.

```tsx
<ContactFormSection client:load />
```

#### `ReviewsCarousel.tsx`
Carousel for displaying customer reviews.

```tsx
<ReviewsCarousel reviews={reviewsData} client:load />
```

## Page Templates

### `ServicePageTemplateV3.astro`
Standardized service page template using all core components.

```astro
---
import ServicePageTemplateV3 from '@/templates/ServicePageTemplateV3.astro';

const serviceData = {
  serviceName: "Basement Waterproofing",
  serviceTitle: "Basement Waterproofing Toronto | DrySpace",
  serviceSubtitle: "Professional waterproofing solutions",
  serviceDescription: "Protect your basement...",
  heroFeatures: ["Feature 1", "Feature 2"],
  startingPrice: "$2,500",
  benefits: [
    { title: "Benefit 1", description: "Description" }
  ],
  serviceFaqs: [
    { question: "Q1", answer: "A1" }
  ]
};
---

<ServicePageTemplateV3 {...serviceData}>
  <!-- Optional main content -->
</ServicePageTemplateV3>
```

### Blog Template
Located at `/src/pages/blog/[...slug]-new.astro` - Uses Tailwind/shadcn throughout.

## Design System

### Colors
- **Primary**: Orange (#f97316)
- **Secondary**: Emerald (#10b981)
- **Accent**: Blue (#3b82f6)
- **Background**: White
- **Foreground**: Gray-900 (#111827)
- **Muted**: Gray-100 (#f3f4f6)

### Typography
- **Font**: System font stack
- **Headings**: Bold, tight line-height
- **Body**: Regular, relaxed line-height

### Spacing
- **Sections**: py-16 md:py-24 (default)
- **Container**: px-4 md:px-6
- **Cards**: p-6
- **Grid gaps**: gap-6 lg:gap-8

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Best Practices

1. **Always use semantic HTML** - Proper heading hierarchy, landmarks
2. **Include ARIA labels** - For complex interactions
3. **Test keyboard navigation** - All interactive elements must be keyboard accessible
4. **Use consistent spacing** - Follow the spacing scale
5. **Responsive by default** - Mobile-first approach
6. **Follow color contrast guidelines** - WCAG AA compliance
7. **Use components over custom styles** - Maintain consistency

## Migration Guide

### Converting Old Pages

1. Replace custom CSS with Tailwind utilities
2. Use `Section` component for page sections
3. Replace custom cards with `AstroCard`
4. Use `AstroButton` for all CTAs
5. Apply `Grid` component for layouts
6. Use `ContentCard` for content lists

### Example Migration

**Before:**
```html
<div class="service-section">
  <div class="container">
    <h2 class="section-title">Our Services</h2>
    <div class="service-grid">
      <!-- Custom service cards -->
    </div>
  </div>
</div>
```

**After:**
```astro
<Section title="Our Services" centered>
  <Grid columns={3}>
    <ContentCard 
      title="Service 1"
      description="Description"
      href="/services/service-1/"
      type="service"
    />
    <!-- More cards -->
  </Grid>
</Section>
```

## Component Status

✅ **Stable Components**
- Section, Grid, Hero
- AstroButton, AstroCard, AstroBadge
- ContentCard
- All shadcn/ui components

🚧 **In Development**
- Advanced form components
- Data tables
- Navigation components

📋 **Planned**
- Chart components
- Map integration
- Advanced animations