// After `docusaurus build` of the Russian site (npm run build:ru): writes
// build-ru/robots.txt and checks that what the site promises is there.
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const build = 'build-ru';
const sitemap = readFileSync(join(build, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
assert.ok(urls.length > 0, 'empty sitemap');
const origin = new URL(urls[0]).origin;

writeFileSync(join(build, 'robots.txt'), `# Документация AI-softphone\nUser-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

// every page of the sitemap is a file, with its Markdown version
for (const loc of urls) {
  const dir = join(build, new URL(loc).pathname);
  assert.ok(existsSync(join(dir, 'index.html')), `${loc}: no index.html`);
  assert.ok(existsSync(join(dir, 'index.md')), `${loc}: no index.md`);
}
// the Russian site is Russian only: nothing in another language, no switcher
assert.deepEqual(readdirSync(build).filter((d) => /^(en|[a-z]{2}(-[A-Za-z]+)?)$/.test(d) && existsSync(join(build, d, 'index.html'))), [], 'a language folder in the build');
const home = readFileSync(join(build, 'index.html'), 'utf8');
assert.doesNotMatch(home, /navbar__link--active[^>]*>English|dropdown--right|hreflang="(?!ru|x-default)/, 'language switcher or alternate language in the build');
assert.match(home, /<html[^>]*lang="ru/);
assert.ok(home.includes('href="https://ai-softphone.ru/"'), 'link to the main site missing');
// Yandex.Metrika: in <head> ahead of the stylesheets and every script file
// (only the page's own title, meta and inline data come first); its
// <noscript> part is at the top of <body>
const head = home.slice(0, home.indexOf('</head>'));
const counterAt = head.indexOf('mc.yandex.ru/metrika/tag.js?id=113807738');
assert.ok(counterAt > 0, 'Yandex.Metrika counter missing from <head>');
assert.ok(counterAt < head.indexOf('<script src='), 'Yandex.Metrika counter after the script files');
assert.ok(counterAt < head.indexOf('<link rel="stylesheet"'), 'Yandex.Metrika counter after the stylesheets');
assert.match(home, /<body[^>]*>[\s\S]{0,1500}?<noscript><div><img src="https:\/\/mc\.yandex\.ru\/watch\/113807738"/, 'Yandex.Metrika <noscript> not at the top of <body>');
console.log(`finish-ru: ${urls.length} pages, robots.txt written, checks passed`);
