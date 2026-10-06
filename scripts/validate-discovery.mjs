import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const languages = JSON.parse(readFileSync('languages.json', 'utf8'));
const selected = process.argv.slice(2);
let count = 0;
const canonicalUrls = new Set();
for (const { code } of languages.filter((language) => !selected.length || selected.includes(language.code))) {
  const directory = path.join('build', code === 'en' ? '' : code);
  const index = readFileSync(path.join(directory, 'llms.txt'), 'utf8');
  assert.match(index, /^# .+\n\n> .+/);
  const root = new URL(index.match(/\[Documentation website\]\(([^)]+)\)/)[1]);
  const urls = [...index.matchAll(/^- \[[^\n]+\]\((https:\/\/[^\s)]+\/index\.md)\): /gm)].map((match) => match[1]);
  assert.ok(urls.length > 0, `${code}: empty documentation index`);
  assert.equal(new Set(urls).size, urls.length, `${code}: duplicate index URLs`);
  for (const url of urls) {
    const markdownUrl = new URL(url);
    assert.equal(markdownUrl.origin, root.origin);
    assert.ok(markdownUrl.pathname.startsWith(root.pathname));
    const file = path.join(directory, markdownUrl.pathname.slice(root.pathname.length));
    const markdown = readFileSync(file, 'utf8');
    const prose = markdown.replace(/^```[^\n]*\n[\s\S]*?^```[^\n]*(?:\n|$)/gm, '');
    assert.doesNotMatch(prose, /<Shot\b/, `${file}: unconverted MDX`);
    assert.match(markdown, /^# .+\n\n> .+/);
    for (const [, target] of prose.matchAll(/\]\(([^\s)]+)\)/g)) {
      const linked = new URL(target, url);
      if (linked.origin === root.origin && linked.pathname.endsWith('/index.md')) {
        assert.ok(linked.pathname.startsWith(root.pathname), `${file}: link escaped its language`);
        assert.ok(existsSync(path.join(directory, linked.pathname.slice(root.pathname.length))), `${file}: missing ${target}`);
      }
    }

    const canonical = url.replace(/index\.md$/, '');
    canonicalUrls.add(canonical);
    const html = readFileSync(file.replace(/index\.md$/, 'index.html'), 'utf8');
    const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const graphs = scripts.filter((script) => script['@graph']);
    assert.equal(graphs.length, 1, `${canonical}: expected one documentation graph`);
    assert.equal(graphs[0]['@context'], 'https://schema.org');
    const graph = graphs[0]['@graph'];
    const website = graph.find((entity) => entity['@type'] === 'WebSite');
    const page = graph.find((entity) => ['WebPage', 'CollectionPage'].includes(entity['@type']));
    const article = graph.find((entity) => entity['@type'] === 'TechArticle');
    assert.equal(website.url, root.href);
    assert.equal(page.url, canonical);
    assert.equal(page.inLanguage, code);
    assert.equal(website.inLanguage, code);
    assert.equal(page.isPartOf['@id'], website['@id']);
    assert.ok(page.name && page.description && website.name);
    if (canonical !== root.href) {
      assert.ok(article, `${canonical}: article missing`);
      assert.equal(article.inLanguage, code);
      assert.equal(article.mainEntityOfPage['@id'], page['@id']);
      assert.equal(article['@id'], page.mainEntity['@id']);
      assert.equal(article.headline, page.name);
      assert.ok(scripts.some((script) => script['@type'] === 'BreadcrumbList'), `${canonical}: breadcrumbs missing`);
    }
    assert.ok(html.includes(`href="${url}"`), `${canonical}: Markdown alternate missing`);
    assert.ok(html.includes(`href="${root.href}llms.txt"`), `${canonical}: llms.txt discovery missing`);
    count++;
  }
  console.log(`validate-discovery: ${code}: ${urls.length} pages passed`);
}
if (!selected.length) {
  const sitemap = readFileSync('build/sitemap.xml', 'utf8');
  const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replace(/&amp;/g, '&')));
  assert.deepEqual([...canonicalUrls].sort(), [...sitemapUrls].sort(), 'Indexes must cover every page in the sitemap');
  const robots = readFileSync('build/robots.txt', 'utf8');
  assert.match(robots, /User-agent: \*\nAllow: \/\n/);
  assert.match(robots, /Sitemap: https:\/\//);
  const rootIndex = readFileSync('build/llms.txt', 'utf8');
  for (const { code } of languages) {
    assert.ok(robots.includes(`Disallow: /${code === 'en' ? '' : `${code}/`}admin/`));
    if (code !== 'en') assert.ok(rootIndex.includes(`/${code}/llms.txt`), `Root index missing ${code}`);
  }
}
console.log(`validate-discovery: ${count} pages passed`);
