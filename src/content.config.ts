import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

// the documentation's own words; everything else is Starlight's or the product site's
const own = [
  'docs.name', 'docs.site', 'docs.home.title', 'docs.home.lead', 'docs.start', 'docs.sections',
  'docs.sec.sip.desc', 'docs.sec.capture.desc', 'docs.soon',
  'nav.sip', 'nav.sip.setup', 'nav.sip.advanced', 'nav.sip.devices', 'nav.sip.codecs',
  'nav.sip.recording', 'nav.capture', 'nav.capture.setup',
] as const;

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema({
      extend: z.object(Object.fromEntries(own.map((k) => [k, z.string().optional()]))),
    }),
  }),
};
