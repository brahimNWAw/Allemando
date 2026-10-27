import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/courses' }),
  schema: z.object({
    slug: z.string(),
    level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1']),
    order: z.number(),
    formats: z.array(z.enum(['presentiel', 'distanciel'])),
    title: z.object({
      fr: z.string(),
      de: z.string().optional(),
      ar: z.string().optional(),
    }),
    summary: z.object({
      fr: z.string(),
      de: z.string().optional(),
      ar: z.string().optional(),
    }),
    outcomes: z.object({
      fr: z.array(z.string()),
      de: z.array(z.string()).optional(),
      ar: z.array(z.string()).optional(),
    }),
    prerequisites: z.object({
      fr: z.string(),
      de: z.string().optional(),
      ar: z.string().optional(),
    }),
    status: z.enum(['published', 'draft']).default('published'),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/locations' }),
  schema: z.object({
    slug: z.string(),
    city: z.string(),
    order: z.number(),
    verification: z.enum(['verified', 'needs-confirmation']),
    address: z.string().nullable(),
    mapsUrl: z.string().url().nullable(),
    phone: z.string().nullable(),
    image: z.string().optional(),
    summary: z.object({
      fr: z.string(),
      de: z.string().optional(),
      ar: z.string().optional(),
    }),
    programsNote: z.object({
      fr: z.string(),
      de: z.string().optional(),
      ar: z.string().optional(),
    }),
    status: z.enum(['published', 'draft']).default('published'),
  }),
});

export const collections = { courses, locations };
