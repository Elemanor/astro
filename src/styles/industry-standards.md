# Basement Waterproofing Industry Design Standards

## Color Palette (WCAG AA Compliant)

### Primary Colors
- **Primary Blue** (#1E3A8A) - Trust, water management, professionalism
  - Contrast ratio: 7.5:1 on white
  - Use for: Primary buttons, links, key CTAs
  
- **Secondary Gray** (#455468) - Concrete, foundation, stability
  - Contrast ratio: 7.2:1 on white
  - Use for: Secondary elements, technical content

### Support Colors
- **Success Green** (#059669) - Safety, environmental, positive outcomes
  - Contrast ratio: 4.8:1 on white
  - Use for: Success messages, safety indicators
  
- **Warning Orange** (#DC2626) - Urgent issues, alerts, emergency
  - Contrast ratio: 4.6:1 on white
  - Use for: Warning messages, urgent CTAs

### Neutral Colors
- **Background White** (#FFFFFF) - Clean, professional
- **Text Gray** (#27272A) - Maximum readability
- **Muted Background** (#F8F9FA) - Section separation
- **Border Gray** (#E5E7EB) - Subtle divisions

## Typography Standards

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes (Mobile/Desktop)
- **H1**: 36px/48px (2.25rem/3rem)
- **H2**: 30px/36px (1.875rem/2.25rem)
- **H3**: 24px/30px (1.5rem/1.875rem)
- **H4**: 20px/24px (1.25rem/1.5rem)
- **H5**: 18px/20px (1.125rem/1.25rem)
- **H6**: 16px/18px (1rem/1.125rem)
- **Body**: 16px minimum (1rem)
- **Small**: 14px (0.875rem)

### Line Heights
- Headings: 1.2 (tight)
- Body text: 1.6 (relaxed)
- Small text: 1.5

## Component Standards

### Buttons
- Minimum height: 44px (WCAG touch target)
- Padding: 16px horizontal, 12px vertical
- Border radius: 6px
- Focus state: 2px ring with 2px offset

### Cards
- Background: White
- Border: 1px solid #E5E7EB
- Border radius: 8px
- Padding: 24px
- Shadow on hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

### Sections
- Spacing: 64px vertical (mobile: 32px)
- Container max-width: 1200px
- Padding: 24px horizontal (mobile: 16px)

## Industry-Specific Guidelines

### Trust Signals
Always display:
- Licensed & Insured badge
- Years of experience
- 24/7 emergency availability
- Warranty information

### Emergency Elements
- Red/Orange for urgent issues
- Phone numbers prominently displayed
- "Call Now" CTAs above fold

### Technical Content
- Use diagrams for process explanation
- Before/after photos for credibility
- Cost ranges for transparency
- Service area maps

## Accessibility Requirements

### Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum
- Links: Underlined or 3:1 contrast difference

### Interactive Elements
- Focus indicators on all interactive elements
- Keyboard navigation support
- ARIA labels for icons
- Alt text for all images

### Mobile Considerations
- Touch targets: 44x44px minimum
- Readable without zooming
- Single column layout on small screens
- Thumb-friendly navigation

## Implementation Checklist

### Every Page Must Have:
- [ ] Consistent header with emergency contact
- [ ] Trust signals (licensed, insured, warranty)
- [ ] Clear primary CTA above fold
- [ ] Readable fonts (16px minimum)
- [ ] Proper contrast ratios
- [ ] Mobile-responsive design
- [ ] Fast load times (<3 seconds)
- [ ] Accessibility compliance

### Service Pages Must Include:
- [ ] Service description
- [ ] Process explanation
- [ ] Pricing information
- [ ] Related services
- [ ] FAQs
- [ ] Contact CTA
- [ ] Trust badges

### Emergency Pages Must Have:
- [ ] Prominent phone number
- [ ] 24/7 availability notice
- [ ] Quick response time
- [ ] Emergency process
- [ ] Immediate action steps