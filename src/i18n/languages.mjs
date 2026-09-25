/* The thirty languages of the documentation — the same thirty the phone
   and ai-softphone.com speak, in the order the site offers them.

   `code` is the language tag (as the product site writes it), `dir` the
   folder under src/content/docs/ and therefore the URL prefix. English
   is the root: its pages live at / rather than /en/. */
export const languages = [
  { code: 'en', dir: 'root', name: 'English' },
  { code: 'id', dir: 'id', name: 'Bahasa Indonesia' },
  { code: 'cs', dir: 'cs', name: 'Čeština' },
  { code: 'da', dir: 'da', name: 'Dansk' },
  { code: 'de', dir: 'de', name: 'Deutsch' },
  { code: 'et', dir: 'et', name: 'Eesti' },
  { code: 'es', dir: 'es', name: 'Español' },
  { code: 'fr', dir: 'fr', name: 'Français' },
  { code: 'hr', dir: 'hr', name: 'Hrvatski' },
  { code: 'it', dir: 'it', name: 'Italiano' },
  { code: 'lv', dir: 'lv', name: 'Latviešu' },
  { code: 'lt', dir: 'lt', name: 'Lietuvių' },
  { code: 'hu', dir: 'hu', name: 'Magyar' },
  { code: 'nl', dir: 'nl', name: 'Nederlands' },
  { code: 'nb', dir: 'nb', name: 'Norsk bokmål' },
  { code: 'pl', dir: 'pl', name: 'Polski' },
  { code: 'pt', dir: 'pt', name: 'Português' },
  { code: 'ro', dir: 'ro', name: 'Română' },
  { code: 'sk', dir: 'sk', name: 'Slovenčina' },
  { code: 'sl', dir: 'sl', name: 'Slovenščina' },
  { code: 'sr-Latn', dir: 'sr-latn', name: 'Srpski' },
  { code: 'fi', dir: 'fi', name: 'Suomi' },
  { code: 'sv', dir: 'sv', name: 'Svenska' },
  { code: 'vi', dir: 'vi', name: 'Tiếng Việt' },
  { code: 'tr', dir: 'tr', name: 'Türkçe' },
  { code: 'el', dir: 'el', name: 'Ελληνικά' },
  { code: 'bg', dir: 'bg', name: 'Български' },
  { code: 'ru', dir: 'ru', name: 'Русский' },
  { code: 'sr', dir: 'sr', name: 'Српски' },
  { code: 'uk', dir: 'uk', name: 'Українська' },
];
