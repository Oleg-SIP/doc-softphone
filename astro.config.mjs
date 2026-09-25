// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { languages } from './src/i18n/languages.mjs';
import { languageRedirect } from './src/i18n/redirect.mjs';

/* Where the site is published. The defaults are the final address;
   a test deployment overrides them, e.g. for GitHub Pages:
       SITE_URL=https://oleg-sip.github.io BASE_PATH=/doc-softphone */
const site = process.env.SITE_URL || 'https://doc.ai-softphone.com';
const base = process.env.BASE_PATH || '/';

const locales = Object.fromEntries(
  languages.map(({ code, dir, name }) => [dir, { label: name, lang: code }]),
);

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'AI Softphone',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales,
      customCss: ['./src/styles/theme.css'],
      head: [
        { tag: 'link', attrs: { rel: 'icon', href: `${base.replace(/\/$/, '')}/favicon.ico`, sizes: '32x32' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${base.replace(/\/$/, '')}/apple-touch-icon.png` } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#00796B' } },
        { tag: 'script', content: languageRedirect(base) },
      ],
      components: {
        SocialIcons: './src/components/SiteLink.astro',
      },
    }),
  ],
});
