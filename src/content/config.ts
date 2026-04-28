import { defineCollection, z } from 'astro:content';

const sessions = defineCollection({
  type: 'content',
  schema: z.object({
    week: z.number(),
    cycle: z.number(),
    theme: z.enum(['foundation', 'sota', 'safety', 'free']),
    date: z.string().optional(),

    // Main paper
    paperTitle: z.string(),
    paperUrl: z.string().url(),
    paperAuthors: z.string(),
    paperYear: z.number(),

    // Companion
    companionTitle: z.string(),
    companionUrl: z.string().url(),
    companionSource: z.string(),
    companionDescription: z.string().optional(),

    // Optional
    note: z.string().optional(),
    location: z.string().optional(),
    images: z.array(z.string()).optional(),
    imagesCaptions: z.array(z.string()).optional(),

    // Alternative picks (for votable weeks)
    alternatives: z.array(z.object({
      label: z.string(),
      paperTitle: z.string(),
      paperUrl: z.string().url(),
      paperAuthors: z.string(),
      companionTitle: z.string(),
      companionUrl: z.string().url(),
    })).optional(),

    // Past session data
    completed: z.boolean().default(false),
    youtubeId: z.string().optional(),
    presenter: z.string().optional(),       // participant ID from participants.json
    participants: z.array(z.string()).optional(), // participant IDs from participants.json
    discussionNotes: z.string().optional(),
  }),
});

export const collections = { sessions };
