import { defineCollection, z } from 'astro:content';

const entries = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.number().int(),
    slug: z.string(),
    name: z.string(),
    category: z.string(),
    summary: z.string(),
    url: z.string(),
    region_or_version: z.string(),
    reason: z.string(),
    verified_date: z.string().optional(),
    official: z.boolean(),
    disclaimer: z.string(),
  }),
});

const weekly = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    week: z.string(),
    status: z.string(),
  }),
});

export const collections = { entries, weekly };
