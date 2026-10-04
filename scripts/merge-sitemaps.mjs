// Runs after `docusaurus build` (npm's postbuild). Docusaurus writes one
// sitemap per language — build/sitemap.xml for English and
// build/<code>/sitemap.xml for the others — and a search engine told about
// the root one never hears of the rest. This puts every page of every
// language into build/sitemap.xml, each with its versions in the other
// languages (hreflang, x-default being English), the way Google asks for a
// site in many languages. The per-language sitemaps stay where they are.
// It also writes build/robots.txt, which points at the sitemap.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const build = 'build';
const languages = JSON.parse(readFileSync('languages.json', 'utf8')).map((l) => l.code);

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const unescape = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

// page path without the language prefix -> { code: url }
const pages = new Map();
let origin = null;

for (const code of languages) {
  const file = code === 'en' ? join(build, 'sitemap.xml') : join(build, code, 'sitemap.xml');
  if (!existsSync(file)) {
    console.warn(`merge-sitemaps: no ${file}, ${code} left out`);
    continue;
  }
  const xml = readFileSync(file, 'utf8');
  for (const [, raw] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = new URL(unescape(raw));
    origin ??= url.origin;
    let path = url.pathname;
    if (code !== 'en') {
      const prefix = `/${code}`;
      if (path === prefix || path.startsWith(`${prefix}/`)) path = path.slice(prefix.length) || '/';
    }
    if (!pages.has(path)) pages.set(path, {});
    pages.get(path)[code] = url.href;
  }
}

if (!pages.size) {
  console.warn('merge-sitemaps: no pages found, build/sitemap.xml left as it was');
  process.exit(0);
}

const urls = [];
for (const path of [...pages.keys()].sort()) {
  const versions = pages.get(path);
  const alternates = languages
    .filter((code) => versions[code])
    .map((code) => `<xhtml:link rel="alternate" hreflang="${code}" href="${escape(versions[code])}"/>`);
  if (versions.en) {
    alternates.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${escape(versions.en)}"/>`);
  }
  for (const code of languages) {
    if (!versions[code]) continue;
    urls.push(`<url><loc>${escape(versions[code])}</loc>${alternates.join('')}</url>`);
  }
}

writeFileSync(
  join(build, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n',
);

writeFileSync(
  join(build, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${origin}/sitemap.xml\n`,
);

console.log(`merge-sitemaps: ${urls.length} pages in ${languages.length} languages into build/sitemap.xml; build/robots.txt written`);
