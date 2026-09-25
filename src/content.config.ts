import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema({
      // the documentation's own words; everything else comes from the product site
      extend: z.object({
        'docs.name': z.string().optional(),
        'docs.site': z.string().optional(),
        'docs.map.title': z.string().optional(),
        'docs.map.lead': z.string().optional(),
      }),
    }),
  }),
};
