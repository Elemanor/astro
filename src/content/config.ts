import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    keywords: z.string().optional(),
    service: z.string().optional(),
    price: z.string().optional(),
    price_range: z.string().optional(),
    severity: z.enum(['Critical', 'Urgent', 'Emergency', 'Preventive', 'Essential']).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    features: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    publishDate: z.date().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    readTime: z.string().optional(),
    lastUpdated: z.string().optional(),
    author: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    location: z.string(),
    rating: z.number().min(1).max(5),
    service: z.string(),
    date: z.date(),
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    province: z.string().optional(),
    serviceArea: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { services, blog, guides, testimonials, locations };