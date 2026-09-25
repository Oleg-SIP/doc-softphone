import { readFileSync } from 'node:fs';
import { languages } from './languages.mjs';

/* The menu on the left. Labels are keys into src/content/i18n/<lang>.json,
   so a section or an article is named in every language even before the
   article itself is translated. */
const menu = [
  {
    label: 'nav.sip',
    items: [
      { slug: 'sip-accounts/setup', label: 'nav.sip.setup' },
      { slug: 'sip-accounts/advanced', label: 'nav.sip.advanced' },
      { slug: 'sip-accounts/devices', label: 'nav.sip.devices' },
      { slug: 'sip-accounts/codecs', label: 'nav.sip.codecs' },
      { slug: 'sip-accounts/blf', label: 'BLF' },
      { slug: 'sip-accounts/recording', label: 'nav.sip.recording' },
    ],
  },
  {
    label: 'nav.capture',
    items: [{ slug: 'external-recording/setup', label: 'nav.capture.setup' }],
  },
];

const strings = Object.fromEntries(
  languages.map(({ code }) => [
    code,
    JSON.parse(readFileSync(new URL(`../content/i18n/${code}.json`, import.meta.url), 'utf8')),
  ]),
);

function label(key) {
  const en = strings.en[key];
  if (!en) return { label: key }; // not a key: a name that is the same in every language
  const translations = {};
  for (const { code } of languages) {
    if (code !== 'en' && strings[code][key]) translations[code] = strings[code][key];
  }
  return { label: en, translations };
}

export const sidebar = menu.map((group) => ({
  ...label(group.label),
  items: group.items.map((item) => ({ slug: item.slug, ...label(item.label) })),
}));
