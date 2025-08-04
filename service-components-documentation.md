# Service Page Component Architecture

## Overview

I've created a modular component architecture for service pages where each section is its own Astro component. This makes the code more maintainable, reusable, and flexible.

## Component Structure

```
src/components/services/
├── ServiceHero.astro           # Hero section with CTAs
├── ServiceTrustSignals.astro   # Trust badges bar
├── ServiceMainContent.astro    # Main markdown content wrapper
├── ServiceProcessSteps.astro   # Process steps with icons
├── ServiceBenefits.astro       # Benefits grid
├── ServicePricingCTA.astro     # Pricing call-to-action
├── ServiceFAQ.astro            # FAQ accordion
├── ServiceRelated.astro        # Related services grid
└── ServiceFinalCTA.astro       # Bottom CTA section
```

## Benefits of This Approach

### 1. **Modularity**
- Each section is independent
- Easy to test individual components
- Can reuse sections on other pages

### 2. **Maintainability**
- Changes to a section only affect that component
- Easier to debug issues
- Clear separation of concerns

### 3. **Flexibility**
- Can easily reorder sections
- Can conditionally show/hide sections
- Can create variations of sections

### 4. **Reusability**
- Use ServiceHero on landing pages
- Use ServiceFAQ on support pages
- Use ServicePricingCTA anywhere you need pricing

## Using Individual Components

### Example 1: Using Hero on a Landing Page
```astro
---
import ServiceHero from '../components/services/ServiceHero.astro';
---

<ServiceHero
  serviceName="Emergency Waterproofing"
  subtitle="24/7 Response When You Need It Most"
  description="Immediate help for basement flooding"
  badge="EMERGENCY"
  features={["2 Hour Response", "Direct Insurance Billing", "24/7 Service"]}
/>
```

### Example 2: Using FAQ Component Standalone
```astro
---
import ServiceFAQ from '../components/services/ServiceFAQ.astro';

const generalFAQs = [
  {
    question: "Do you offer financing?",
    answer: "Yes, we offer flexible financing options..."
  }
];
---

<ServiceFAQ 
  faqs={generalFAQs}
  title="General Questions"
  subtitle="Everything you need to know"
/>
```

### Example 3: Custom Trust Signals
```astro
---
import ServiceTrustSignals from '../components/services/ServiceTrustSignals.astro';

const customSignals = [
  { icon: 'shield', text: 'BBB A+ Rating' },
  { icon: 'award', text: '5,000+ Happy Customers' },
  { icon: 'clock', text: 'Since 1999' },
  { icon: 'check', text: '100% Satisfaction' }
];
---

<ServiceTrustSignals signals={customSignals} />
```

### Example 4: Creating a Mini Service Page
```astro
---
import ServiceHero from '../components/services/ServiceHero.astro';
import ServiceBenefits from '../components/services/ServiceBenefits.astro';
import ServiceFinalCTA from '../components/services/ServiceFinalCTA.astro';

const benefits = [
  { title: "Fast Service", description: "Same day response" },
  { title: "Fair Pricing", description: "Competitive rates" }
];
---

<ServiceHero serviceName="Quick Fix Service" />
<ServiceBenefits benefits={benefits} columns={2} />
<ServiceFinalCTA title="Ready to Get Started?" />
```

## Customization Options

### ServiceHero Props
- `serviceName` (required)
- `subtitle` (required)
- `description` (required)
- `badge` (optional, default: "Professional Service")
- `image` (optional)
- `imageAlt` (optional)
- `features` (optional array)

### ServiceProcessSteps Props
- `steps` (array of steps)
- `title` (optional, default: "Our Process")
- `subtitle` (optional)

### ServiceBenefits Props
- `benefits` (array of benefits)
- `title` (optional, default: "Why Choose Our Service")
- `subtitle` (optional)
- `columns` (optional, default: 3)

### ServicePricingCTA Props
- `startingPrice` (optional)
- `priceRange` (optional)
- `title` (optional, default: "Transparent Pricing")
- `subtitle` (optional)

### ServiceFAQ Props
- `faqs` (array of Q&As)
- `title` (optional, default: "Frequently Asked Questions")
- `subtitle` (optional)

### ServiceRelated Props
- `services` (array of related services)
- `title` (optional, default: "Related Services")
- `subtitle` (optional)
- `columns` (optional, default: 3)

### ServiceFinalCTA Props
- `title` (optional)
- `subtitle` (optional)
- `primaryCTA` (optional object with text & href)
- `secondaryCTA` (optional object with text & href)
- `emergencyNotice` (optional)

## Implementation

To use the new modular approach:

1. **Update existing pages**:
```astro
---
// Old way - everything in template
import ServicePageTemplateV3 from '../templates/ServicePageTemplateV3.astro';

// New way - modular components
import ServicePageTemplateV4 from '../templates/ServicePageTemplateV4.astro';
---
```

2. **Create custom layouts**:
```astro
---
import MainLayout from '../layouts/MainLayout.astro';
import ServiceHero from '../components/services/ServiceHero.astro';
import ServiceBenefits from '../components/services/ServiceBenefits.astro';
// Import only what you need
---

<MainLayout>
  <ServiceHero {...heroProps} />
  <!-- Custom content here -->
  <ServiceBenefits {...benefitsProps} />
</MainLayout>
```

3. **A/B Testing**:
```astro
---
// Easy to test different section orders
const showPricingFirst = Astro.url.searchParams.get('variant') === 'b';
---

<MainLayout>
  <ServiceHero />
  {showPricingFirst && <ServicePricingCTA />}
  <ServiceMainContent />
  {!showPricingFirst && <ServicePricingCTA />}
</MainLayout>
```

## Next Steps

1. **Gradual Migration**: Keep V3 template while testing V4
2. **Component Library**: Build Storybook for components
3. **Variations**: Create alternate versions (ServiceHeroMinimal, ServiceHeroVideo, etc.)
4. **Analytics**: Track performance of individual sections
5. **Optimization**: Lazy load heavy components