# Service Page Sections Analysis

## Template Structure (ServicePageTemplateV3)

Each service page includes the following sections in order:

### 1. **Hero Section**
- Service name (main title)
- Subtitle
- Description
- Badge (default: "Professional Service")
- Optional hero image
- Hero features list
- CTA buttons: "Get Free Quote" and "Call Now"

### 2. **Trust Signals Bar**
- Licensed & Insured
- 25+ Years Experience
- Same Day Service
- Lifetime Warranty
- (4-column grid with icons)

### 3. **Main Content Section**
- Flexible content from markdown file
- Full prose styling
- Can include any custom content
- Typically includes service details, benefits, and process information

### 4. **Process Steps Section**
- Title: "Our Process"
- 4-step process with numbered icons
- Default steps if not provided:
  1. Free Inspection
  2. Custom Solution
  3. Professional Installation
  4. Lifetime Warranty

### 5. **Benefits Section** (if provided)
- Title: "Why Choose Our Service"
- Grid of benefit cards with checkmark icons
- Each benefit has title and description

### 6. **Pricing CTA Section** (if pricing provided)
- Dark blue background
- "Transparent Pricing" heading
- Starting price and/or price range
- CTA buttons: "Get Free Quote" and "Call Now"

### 7. **FAQ Section** (if FAQs provided)
- Title: "Frequently Asked Questions"
- Accordion-style Q&A
- Gray background

### 8. **Related Services Section** (if provided)
- Title: "Related Services"
- 3-column grid of service cards
- Each card has title, description, image, and link

### 9. **Final CTA Section**
- Dark gray background
- "Ready to Protect Your Property?" heading
- Persuasive copy
- CTA buttons: "Schedule Free Inspection" and phone number
- Emergency service notice

## Content Sources

The service pages pull content from:

1. **Frontmatter fields**:
   - title, subtitle, description
   - seo_title
   - service name
   - related_services array
   - faq array
   - pricing info

2. **Markdown content**:
   - Main service description
   - Sections with titles and content
   - Can include lists, bold text, images

## Visual Hierarchy

- **Primary color (#1E3A8A)**: CTAs, icons, links
- **Secondary color (#455468)**: Final CTA background
- **Muted backgrounds**: Trust signals, process steps, FAQs
- **White backgrounds**: Main content, benefits, related services

## Responsive Design

- All sections use responsive grids
- Mobile-first approach
- Columns collapse on smaller screens
- Touch-friendly button sizes (min 44px)

## Consistency Features

- All service pages use the same template (V3)
- Consistent spacing between sections
- Same typography scale throughout
- Uniform CTA button styles
- Matching icon usage patterns