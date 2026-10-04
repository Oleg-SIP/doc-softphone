// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { readFileSync } from 'node:fs';

const languages = JSON.parse(readFileSync('./languages.json', 'utf8'));

/* Where the site is published: https://docs.ai-softphone.com/. The deploy
   workflow passes the origin from the GitHub Pages settings, which says
   http:// until HTTPS is enforced there; the site is served over https. */
const url = (process.env.SITE_URL || 'https://docs.ai-softphone.com').replace(/^http:/, 'https:');
const baseUrl = process.env.BASE_URL || '/';

/* The product site in the page's language, as its own hreflang links
   spell it: English at the root, every other language as ?lang=<code>.
   Docusaurus sets the locale before it loads this file for each one. */
const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'en';
const productSite = locale === 'en' ? 'https://ai-softphone.com/' : `https://ai-softphone.com/?lang=${locale}`;

/* Google Analytics, the same property as ai-softphone.com. Consent is
   decided before the tag is fetched: everything is denied until the
   visitor answers the banner (src/theme/Root.js), and the answer given
   last time is applied in the same breath. The answer lives in
   localStorage, not in a cookie. */
const GA_ID = 'G-1VFVTQ2765';

const gaConsent = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
  try {
    if (window.localStorage.getItem('analytics') === 'granted') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  } catch (e) { /* private mode: the answer is asked for again */ }
`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Softphone',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',
  url,
  baseUrl,
  // GitHub Pages serves every page as <path>/index.html and redirects
  // <path> to <path>/; links, canonical URLs and the sitemap say so too,
  // so a search engine is never handed an address that redirects
  trailingSlash: true,
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
    { tagName: 'script', attributes: {}, innerHTML: gaConsent },
    { tagName: 'script', attributes: { async: 'true', src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}` } },
    { tagName: 'script', attributes: {}, innerHTML: `gtag('js', new Date()); gtag('config', '${GA_ID}');` },
    { tagName: 'link', attributes: { rel: 'icon', href: `${baseUrl}img/favicon.svg`, type: 'image/svg+xml' } },
    { tagName: 'link', attributes: { rel: 'icon', href: `${baseUrl}img/icon-192.png`, type: 'image/png', sizes: '192x192' } },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', href: `${baseUrl}img/apple-touch-icon.png` } },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#00796B' } },
  ],

  // a page_view for every page opened inside the site, not only the first
  clientModules: ['./src/clientModules/gtag.js'],

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
          { href: productSite, label: 'ai-softphone.com', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        // the link brings the cookie question back; src/theme/Root.js
        // answers it and puts the word in the page's language
        copyright: `© ${new Date().getFullYear()} AI Softphone · <a href="#" class="consent-link">Cookies</a>`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
