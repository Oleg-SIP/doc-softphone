import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import OriginalDocItem from '@theme-original/DocItem';

// Render during static generation and update through React on navigation.
// Docusaurus already supplies BreadcrumbList; keep its localized breadcrumbs.
export default function DocItem(props) {
  const { metadata } = props.content;
  const { siteConfig, i18n } = useDocusaurusContext();
  const { homeTitle } = usePluginData('docs-discovery');
  const root = new URL(siteConfig.baseUrl, siteConfig.url).href;
  const url = new URL(`${metadata.permalink.replace(/\/$/, '')}/`, siteConfig.url).href;
  const pageId = `${url}#webpage`;
  const websiteId = `${root}#website`;
  const softwareId = 'https://ai-softphone.com/#software';
  const isHome = metadata.slug === '/';
  const graph = [
    {
      '@type': 'WebSite', '@id': websiteId, url: root,
      name: homeTitle, inLanguage: i18n.currentLocale,
      about: { '@id': softwareId },
    },
    {
      '@type': 'SoftwareApplication', '@id': softwareId,
      name: 'AI Softphone', url: 'https://ai-softphone.com/',
      applicationCategory: 'CommunicationApplication',
      operatingSystem: ['Windows', 'macOS', 'Linux'],
      license: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html',
    },
    {
      '@type': isHome ? 'CollectionPage' : 'WebPage', '@id': pageId,
      url, name: metadata.title, description: metadata.description,
      inLanguage: i18n.currentLocale, isPartOf: { '@id': websiteId },
      about: { '@id': softwareId },
      ...(!isHome && { mainEntity: { '@id': `${url}#article` } }),
    },
    ...(!isHome ? [{
      '@type': 'TechArticle', '@id': `${url}#article`, url,
      headline: metadata.title, description: metadata.description,
      inLanguage: i18n.currentLocale, mainEntityOfPage: { '@id': pageId },
      about: { '@id': softwareId }, isPartOf: { '@id': websiteId },
    }] : []),
  ];
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    .replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

  return (
    <>
      <OriginalDocItem {...props} />
      <Head>
        <link rel="alternate" type="text/markdown" href={`${url}index.md`} />
        <link rel="describedby" type="text/plain" href={`${root}llms.txt`} />
        <script id="docs-schema" type="application/ld+json">{json}</script>
      </Head>
    </>
  );
}
