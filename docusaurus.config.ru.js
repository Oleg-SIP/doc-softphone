// @ts-check
/* The Russian-only documentation for https://docs.ai-softphone.ru/ — the
   same pages as i18n/ru, built on their own (npm run build:ru), in the
   look of ai-softphone.ru: no language switcher, a link to the main site at
   the top and at the bottom, and Yandex.Metrika instead of Google Analytics
   (counter 113807738, the snippet below as Yandex gives it). */
import base from './docusaurus.config.js';

const productUrl = 'https://ai-softphone.ru/';

// The site is served over https:// (SITE_URL overrides it for a test host).
const url = process.env.SITE_URL || 'https://docs.ai-softphone.ru';

const year = new Date().getFullYear();

/* Yandex.Metrika: the counter's code as Yandex gives it, as near the top of
   the page as it goes (the first thing in <head>, the <noscript> part the
   first thing in <body>), so a visit is counted even when the page is closed
   at once. Later pages of the single-page application are reported by
   src/clientModules/ym.js. */
const YM_ID = 113807738;

const ymCounter = `
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');

    ym(${YM_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`;

const ymNoscript = `<!-- Yandex.Metrika counter --><noscript><div><img src="https://mc.yandex.ru/watch/${YM_ID}" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->`;

/** @type {import('@docusaurus/types').PluginModule} */
const yandexMetrika = () => ({
  name: 'yandex-metrika',
  injectHtmlTags: () => ({
    headTags: [{ tagName: 'script', attributes: { type: 'text/javascript' }, innerHTML: ymCounter }],
    preBodyTags: [ymNoscript],
  }),
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...base,
  title: 'AI-softphone',
  tagline: 'Документация',
  url,
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // Russian is the only language, so it is the root (/) of the site.
  // Pages are the ones in i18n/ru; docs/ (English) is only a fallback for a
  // page that has no Russian file.
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    localeConfigs: { ru: { label: 'Русский', htmlLang: 'ru' } },
  },

  // Not static/: that holds the screenshots of all thirty languages (700 MB).
  // static-ru/ has the icons of ai-softphone.ru and the few pictures that
  // the other build takes from ai-softphone.com. Russian screenshots are
  // added to it by scripts/prepare-ru.mjs.
  staticDirectories: ['static-ru'],

  customFields: { productUrl, localShots: true, cookieBanner: false },

  headTags: [
    // the main site's typeface
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
    { tagName: 'link', attributes: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap' } },
    { tagName: 'link', attributes: { rel: 'icon', href: '/img/favicon.ico', type: 'image/x-icon' } },
    { tagName: 'link', attributes: { rel: 'icon', href: '/img/favicon-16x16.png', type: 'image/png', sizes: '16x16' } },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' } },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#E6372D' } },
  ],

  clientModules: ['./src/clientModules/ym.js'],

  plugins: [yandexMetrika, ...(base.plugins || [])],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: { customCss: ['./src/css/custom.css', './src/css/ru.css'] },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // the main site has one light theme, so has this one
      colorMode: { defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false },
      navbar: {
        // drawn in ru.css as the logo of ai-softphone.ru: "AI-" and a red "softphone"
        title: 'AI-softphone',
        items: [
          { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Документация' },
          { href: `${productUrl}#download`, label: 'Скачать', position: 'right' },
          { href: productUrl, label: 'Основной сайт', position: 'right', className: 'navbar-main-site' },
        ],
      },
      footer: {
        style: 'light',
        // the same two columns as the footer of ai-softphone.ru
        copyright: `
<div class="site-footer">
  <div class="site-footer__left">
    <div class="site-footer__company">ООО «Технологии коммуникаций»</div>
    <div>© ${year} AI-softphone.ru</div>
    <div><a href="tel:+74952455035">Телефон: +7 (495) 245-50-35</a></div>
    <div><a href="mailto:contact@era-platform.ru">contact@era-platform.ru</a></div>
  </div>
  <div class="site-footer__right">
    <a class="site-footer__main" href="${productUrl}">← Вернуться на основной сайт AI-softphone.ru</a>
    <a href="${productUrl}pd">Политика компании в области персональных данных</a>
  </div>
</div>`,
      },
      prism: base.themeConfig.prism,
    }),
};

export default config;
