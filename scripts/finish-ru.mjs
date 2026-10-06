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
console.log(`finish-ru: ${urls.length} pages, robots.txt written, checks passed`);
