import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const oneLine = (text) => text.replace(/\s+/g, ' ').trim();
const linkLabel = (text) => oneLine(text).replace(/([\[\]\\])/g, '\\$1');
const withSlash = (url) => url.endsWith('/') ? url : `${url}/`;

// Use the docs plugin's resolved metadata, including translations and slugs.
// Files and indexes are rebuilt alongside the HTML, so CMS edits stay in sync.
export default function docsDiscovery(context) {
  const { siteDir, siteConfig, i18n } = context;
  const locale = i18n.currentLocale;
  const localeRoot = new URL(siteConfig.baseUrl, siteConfig.url).href;
  const rootPath = locale === i18n.defaultLocale
    ? siteConfig.baseUrl
    : siteConfig.baseUrl.replace(new RegExp(`${locale}/$`), '');
  const siteRoot = new URL(rootPath, siteConfig.url).href;
  const languages = JSON.parse(readFileSync(path.join(siteDir, 'languages.json'), 'utf8'));
  let docs = [];

  return {
    name: 'docs-discovery',
    allContentLoaded({ allContent, actions }) {
      docs = allContent['docusaurus-plugin-content-docs'].default.loadedVersions
        .flatMap((version) => version.docs)
        .filter((doc) => !doc.draft && !doc.unlisted && !doc.frontMatter.noindex)
        .sort((a, b) => (a.slug === '/' ? -1 : b.slug === '/' ? 1 : a.id.localeCompare(b.id, 'en')));
      actions.setGlobalData({ homeTitle: docs.find((doc) => doc.slug === '/')?.title });
    },
    postBuild({ outDir }) {
      const sourcePath = (doc) => path.resolve(siteDir, doc.source.replace(/^@site\//, ''));
      const pageUrl = (doc) => withSlash(new URL(doc.permalink, siteConfig.url).href);
      const markdownUrl = (doc) => `${pageUrl(doc)}index.md`;
      const sources = new Map(docs.map((doc) => [sourcePath(doc), doc]));
      const pages = new Map(docs.map((doc) => [pageUrl(doc), doc]));

      function resolveLink(target, doc) {
        if (!target || target.startsWith('#') || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target)) return target;
        const [pathname, fragment] = target.split(/(?=#)/, 2);
        const absolute = pathname.startsWith('/');
        const linkedDoc = absolute
          ? pages.get(withSlash(new URL(pathname.slice(1), localeRoot).href))
          : sources.get(path.resolve(path.dirname(sourcePath(doc)), pathname));
        if (linkedDoc) return markdownUrl(linkedDoc) + (fragment || '');
        return new URL(target, absolute ? siteRoot : pageUrl(doc)).href;
      }

      function screenshot(tag) {
        const attribute = (name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
        const name = attribute('name');
        let src = attribute('src');
        if (name) src = new URL(`screenshots/macos/${locale}/${name}.png`, siteRoot).href;
        else if (src && locale !== i18n.defaultLocale) {
          src = src.replace('ai-softphone.com/screenshots/macos/en/', `ai-softphone.com/screenshots/macos/${locale.replace('-', '_')}/`);
        }
        if (src && siteConfig.customFields.localShots) {
          src = src.replace(/^https:\/\/ai-softphone\.com\/screenshots\/macos\//, `${siteRoot}screenshots/`);
        }
        if (!src) throw new Error(`docs-discovery: screenshot without source: ${tag}`);
        const caption = tag.match(/>([\s\S]*?)<\/Shot>/)?.[1]?.trim();
        return `![${linkLabel(attribute('alt') || '')}](${src})${caption ? `\n\n${caption}` : ''}`;
      }

      for (const doc of docs) {
        let markdown = readFileSync(sourcePath(doc), 'utf8').replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
        // Preserve examples verbatim: only convert MDX and links outside fences.
        markdown = markdown.split(/(^```[^\n]*\n[\s\S]*?^```[^\n]*(?:\n|$))/m)
          .map((part, index) => index % 2 ? part : part
            .replace(/<Shot\b[^>]*\/\s*>|<Shot\b[^>]*>[\s\S]*?<\/Shot>/g, screenshot)
            .replace(/(\]\()([^\s)]+)(\))/g, (_, open, target, close) => `${open}${resolveLink(target, doc)}${close}`))
          .join('');
        const relativeRoute = new URL(pageUrl(doc)).pathname.slice(new URL(localeRoot).pathname.length);
        const directory = path.join(outDir, relativeRoute);
        mkdirSync(directory, { recursive: true });
        writeFileSync(path.join(directory, 'index.md'), `# ${doc.title}\n\n> ${oneLine(doc.description)}\n\n${markdown.trim()}\n`);
      }

      const home = docs.find((doc) => doc.slug === '/');
      if (!home) throw new Error('docs-discovery: documentation home page missing');
      const index = [
        `# ${home.title}`, '', `> ${oneLine(home.description)}`, '',
        'AI Softphone is a SIP softphone for Windows, macOS and Linux, with call and meeting recording, transcription and AI processing. These files document the desktop application. The local REST API is served by the application on the user’s computer.', '',
        'The links below provide Markdown versions of the documentation in this language. Platform-specific details and defaults are described on the linked pages.', '',
        '## Documentation', '',
        ...docs.map((doc) => `- [${linkLabel(doc.title)}](${markdownUrl(doc)}): ${oneLine(doc.description)}`),
      ];
      if (locale === i18n.defaultLocale && i18n.locales.length > 1) {
        index.push('', '## Languages', '', ...languages.filter((language) => language.code !== locale)
          .map((language) => `- [${linkLabel(language.name)}](${new URL(`${language.code}/llms.txt`, siteRoot).href}): Documentation index (${language.code}).`));
      }
      index.push('', '## Optional', '',
        `- [AI Softphone product website](${siteConfig.customFields.productUrl}): Downloads and product information.`,
        `- [Documentation website](${localeRoot}): The same documentation with navigation and screenshots.`, '');
      writeFileSync(path.join(outDir, 'llms.txt'), index.join('\n'));
      console.log(`docs-discovery: ${locale}: llms.txt and ${docs.length} Markdown pages written`);
    },
  };
}
