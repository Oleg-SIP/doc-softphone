/* ------------------------------------------------------------------
   Imports the product site's text catalogue into this repository.

   ai-softphone.com keeps every string it shows in one catalogue:
   English in assets/js/i18n-data.js, every other language in
   assets/i18n/<code>.js. The documentation's home page speaks with
   the same words, so rather than translating them a second time we
   copy the keys we use into src/data/site/<code>.json.

   Run it again whenever the site's wording changes:

       npm run i18n:import            # from https://ai-softphone.com
       SITE_SRC=../site npm run i18n:import   # from a local checkout
   ------------------------------------------------------------------ */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import vm from 'node:vm';
import { languages } from '../src/i18n/languages.mjs';

const SRC = process.env.SITE_SRC || 'https://ai-softphone.com';
const OUT = new URL('../src/data/site/', import.meta.url);

/* The keys the documentation uses. A prefix ending in '.' takes every
   key under it. */
const WANTED = [
  'meta.description',
  'hero.', 'how.', 'lang.title', 'lang.lead',
  'nav.download', 'nav.integration', 'nav.studio',
  'feat.kicker', 'feat.title', 'feat.lead',
  'ps.home.kicker', 'ps.home.title', 'ps.home.lead',
  'int.home.kicker', 'int.home.title', 'int.home.lead', 'int.home.link',
  'dl.soon', 'dl.title',
  'req.title',
  'footer.tagline', 'footer.legal',
];
// feature headings and paragraphs, without the bullet lists
const FEATURE = /^feat\.f\d+\.(h|p)$/;

function wanted(key) {
  if (FEATURE.test(key)) return true;
  return WANTED.some((w) => (w.endsWith('.') ? key.startsWith(w) : key === w));
}

async function load(path) {
  if (/^https?:/.test(SRC)) {
    const res = await fetch(`${SRC}/${path}`);
    if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
    return res.text();
  }
  return readFile(join(SRC, path), 'utf8');
}

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(await load('assets/js/i18n-data.js'), sandbox);
for (const { code } of languages) {
  if (code !== 'en') vm.runInContext(await load(`assets/i18n/${code}.js`), sandbox);
}

const en = sandbox.window.I18N.en;
await mkdir(OUT, { recursive: true });
for (const { code } of languages) {
  const cat = sandbox.window.I18N[code] || {};
  const out = {};
  let missing = 0;
  for (const key of Object.keys(en)) {
    if (!wanted(key)) continue;
    if (cat[key] == null) missing++;
    out[key] = cat[key] ?? en[key];
  }
  await writeFile(new URL(`${code}.json`, OUT), JSON.stringify(out, null, 2) + '\n');
  console.log(`${code.padEnd(8)} ${Object.keys(out).length} keys${missing ? `, ${missing} read in English` : ''}`);
}
