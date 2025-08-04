import { defineCollection, z } from 'astro:content';

// Schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    author: z.string().default('DrySpace Waterproofing'),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for guides
const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    type: z.string().optional(),
    url: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for service pages
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    seo_title: z.string().optional(),
    description: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    type: z.string().optional(),
    url: z.string().optional(),
    urgency: z.enum(['immediate', 'critical', 'high', 'medium', 'low']).optional(),
    serviceName: z.string().optional(),
    priceRange: z.string().optional(),
    image: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
    keywords: z.union([z.array(z.string()), z.string()]).optional(),
    schema_type: z.string().optional(),
    service_areas: z.array(z.object({
      name: z.string(),
      response_time: z.string().optional(),
      coverage: z.string().optional(),
    })).optional(),
    related_services: z.array(z.object({
      title: z.string().optional(),
      name: z.string().optional(),
      url: z.string(),
      description: z.string().optional(),
      image: z.string().optional(),
    })).optional(),
    sections: z.array(z.object({
      title: z.string(),
      content: z.string(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

// Schema for location pages
const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    type: z.string().optional(),
    url: z.string().optional(),
    keywords: z.union([z.array(z.string()), z.string()]).optional(),
    location: z.union([
      z.string(),
      z.object({
        city: z.string(),
        region: z.string(),
        postal_codes: z.array(z.string()).optional(),
        neighborhoods: z.array(z.string()).optional(),
      })
    ]).optional(),
    service_areas: z.array(z.string()).optional(),
    schema_type: z.string().optional(),
    city: z.string().optional(),
    region: z.string().default('ON'),
    province: z.string().optional(),
    postalCode: z.string().optional(),
    phone: z.string().optional(),
    last_updated: z.string().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    image: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
    subtitle: z.string().optional(),
    seo_title: z.string().optional(),
    related_services: z.array(z.object({
      title: z.string().optional(),
      name: z.string().optional(),
      url: z.string(),
      description: z.string().optional(),
      image: z.string().optional(),
    })).optional(),
    sections: z.array(z.object({
      title: z.string(),
      content: z.string(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

// Schema for cost/pricing pages
const costCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    service: z.string().optional(),
    priceRange: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for emergency pages
const emergencyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    urgency: z.enum(['immediate', 'critical', 'high', 'medium', 'low']).default('high'),
    availableHours: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for FAQ pages
const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    questions: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for tools/calculators
const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    type: z.string().optional(),
    url: z.string().optional(),
    aliases: z.array(z.string()).optional(),
    keywords: z.union([z.array(z.string()), z.string()]).optional(),
    toolType: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for comparison pages
const compareCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for problem pages
const problemsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    seo_title: z.string().optional(),
    description: z.string(),
    date: z.coerce.date().optional(),
    type: z.string().optional(),
    url: z.string().optional(),
    urgency: z.enum(['immediate', 'critical', 'high', 'medium', 'low']).optional(),
    severity: z.enum(['critical', 'high', 'medium', 'low']).optional(),
    symptoms: z.array(z.string()).optional(),
    solutions: z.array(z.object({
      title: z.string(),
      description: z.string(),
      link: z.string().optional(),
    })).optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for pricing pages
const pricingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for financing pages
const financingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for video pages
const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    videoUrl: z.string().optional(),
    duration: z.string().optional(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

// Schema for standalone pages
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().optional(),
    schema: z.any().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'guides': guidesCollection,
  'services': servicesCollection,
  'locations': locationsCollection,
  'cost': costCollection,
  'emergency': emergencyCollection,
  'faq': faqCollection,
  'tools': toolsCollection,
  'compare': compareCollection,
  'problems': problemsCollection,
  'pricing': pricingCollection,
  'financing': financingCollection,
  'videos': videosCollection,
  'pages': pagesCollection,
};