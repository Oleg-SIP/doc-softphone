/* The product site's words (imported by scripts/import-site-i18n.mjs)
   and the addresses of its pages, in the reader's language. */
const catalogues = import.meta.glob<Record<string, string>>('../data/site/*.json', {
  eager: true,
  import: 'default',
});

export function siteText(lang: string) {
  const en = catalogues['../data/site/en.json'];
  const own = catalogues[`../data/site/${lang}.json`] ?? {};
  return (key: string) => own[key] ?? en[key] ?? key;
}

export const SITE = 'https://ai-softphone.com';

/** A page of ai-softphone.com, opened in `lang`. */
export function siteUrl(lang: string, page = '', hash = '') {
  const query = lang === 'en' ? '' : `?lang=${lang}`;
  return `${SITE}/${page}${query}${hash}`;
}

/** Plain text of a catalogue string that carries markup. */
export function plain(html: string) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}
