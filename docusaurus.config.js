// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { readFileSync } from 'node:fs';

const languages = JSON.parse(readFileSync('./languages.json', 'utf8'));

/* Where the site is published: https://docs.ai-softphone.com/. The deploy
   workflow passes the origin from the GitHub Pages settings, which says
   http:// until HTTPS is enforced there; the site is served over https. */
const url = (process.env.SITE_URL || 'https://docs.ai-softphone.com').replace(/^http:/, 'https:');
const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Softphone',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',
  url,
  baseUrl,
  organizationName: 'Oleg-SIP',
  projectName: 'doc-softphone',
  onBrokenLinks: 'throw',

  markdown: {
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },

  // The thirty languages of ai-softphone.com. English is the root (/),
  // the others live at /<code>/. Missing translations fall back to English.
  i18n: {
    defaultLocale: 'en',
    locales: languages.map((l) => l.code),
    localeConfigs: Object.fromEntries(
      languages.map((l) => [l.code, { label: l.name, htmlLang: l.code }]),
    ),
  },

  headTags: [
    { tagName: 'link', attributes: { rel: 'icon', href: `${baseUrl}img/favicon.svg`, type: 'image/svg+xml' } },
    { tagName: 'link', attributes: { rel: 'icon', href: `${baseUrl}img/icon-192.png`, type: 'image/png', sizes: '192x192' } },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', href: `${baseUrl}img/apple-touch-icon.png` } },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#00796B' } },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // documentation is the whole site
          sidebarPath: './sidebars.js',
          // "Edit this page" opens the editor (Decap CMS) on the page's language
          editUrl: ({ locale }) =>
            `${url}${baseUrl}admin/#/collections/docs_${locale.replace('-', '_')}`,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'AI Softphone',
        logo: { alt: 'AI Softphone', src: 'img/logo.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Documentation' },
          { type: 'localeDropdown', position: 'right' },
          { href: 'https://ai-softphone.com/', label: 'ai-softphone.com', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} AI Softphone`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
