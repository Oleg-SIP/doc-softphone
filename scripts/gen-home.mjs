/* ------------------------------------------------------------------
   Writes the home page of every language:
   src/content/docs/<lang>/index.mdx (English at the root).

   The frontmatter — the page title, the hero, its buttons — is written
   out in each language so that it is in the HTML a search engine reads;
   the body is one component, src/components/Home.astro, told which
   language it is in. The words come from src/data/site/<lang>.json
   (the product site's catalogue, see import-site-i18n.mjs) and
   src/content/i18n/<lang>.json (the documentation's own).

       npm run gen:home
   ------------------------------------------------------------------ */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { languages } from '../src/i18n/languages.mjs';

const DOCS = new URL('../src/content/docs/', import.meta.url);
const read = async (p) => JSON.parse(await readFile(new URL(p, import.meta.url), 'utf8'));

const plain = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const siteUrl = (code, hash = '') =>
  `https://ai-softphone.com/${code === 'en' ? '' : `?lang=${code}`}${hash}`;
// a JSON string is a valid YAML scalar, and escapes whatever needs it
const y = (s) => JSON.stringify(s);

for (const { code, dir } of languages) {
  const s = await read(`../src/data/site/${code}.json`);
  const d = await read(`../src/content/i18n/${code}.json`);
  const up = dir === 'root' ? '../../' : '../../../';
  const folder = dir === 'root' ? DOCS : new URL(`${dir}/`, DOCS);

  const mdx = `---
# Written by scripts/gen-home.mjs — edit the script or the catalogues, not this file.
title: ${y(`AI Softphone — ${d['docs.name']}`)}
description: ${y(plain(s['meta.description']))}
template: splash
hero:
  title: ${y(s['hero.title'])}
  tagline: ${y(plain(s['hero.sub']))}
  image:
    file: ${up}assets/logo.svg
  actions:
    - text: ${y(s['nav.download'])}
      link: ${y(siteUrl(code, '#download'))}
      icon: download
      variant: primary
    - text: ${y(d['docs.site'])}
      link: ${y(siteUrl(code))}
      icon: external
      variant: minimal
---

import Home from '${up}components/Home.astro';

<Home lang=${y(code)} />
`;
  await mkdir(folder, { recursive: true });
  await writeFile(new URL('index.mdx', folder), mdx);
}
console.log(`${languages.length} home pages written`);
