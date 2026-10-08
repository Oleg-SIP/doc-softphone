# AI Softphone — documentation

The documentation site for [AI Softphone](https://ai-softphone.com/), in the
same thirty languages as the product's website. Built with
[Docusaurus](https://docusaurus.io/), edited with [Sveltia CMS](https://sveltiacms.app/)
at `/admin/`.

## Working on it

```sh
npm install
npm start          # http://localhost:3000, live reload (English)
npm start -- --locale de   # another language
npm run build      # static site for all 30 languages in build/
npm run serve      # serve build/
```

## Where things are

| Path | What it is |
| --- | --- |
| `languages.json` | The thirty languages (same as ai-softphone.com) and their own names. English is the root (`/`), the others are `/<code>/` (`/sr-Latn/` for Serbian in Latin letters). |
| `docs/` | Pages in English: the overview, `interface/`, `sip-accounts/`, `recordings/`, `ai-processing/`, `capture/`, `integration/`, `troubleshooting/`. Screenshots are the product site's own (`https://ai-softphone.com/screenshots/macos/<lang>/<theme>/`), so they always match it. |
| `tasks/` | Briefs for work that needs the program itself — see `tasks/macos-interface-notes.md`. |
| `i18n/<code>/docusaurus-plugin-content-docs/current/` | Pages in another language, same file names as in `docs/`. A page that is not translated yet shows the English one. |
| `sidebars.js` | The menu on the left — built from the folders in `docs/`; order with `sidebar_position` in a page's front matter. |
| `static/admin/index.html` | The editor (Sveltia CMS). `static/admin/config.yml` next to it is **generated** from `languages.json` by `npm run cms:config` (runs before `start` and `build`). |
| `scripts/merge-sitemaps.mjs` | Runs after the build: puts every page of every language, with its hreflang versions, into `/sitemap.xml`, and writes `/robots.txt`. |
| `.github/workflows/deploy.yml` | Builds every push, publishes to GitHub Pages. |

## The Russian-only site (docs.ai-softphone.ru)

`docusaurus.config.ru.js` builds the Russian pages alone — root of the site,
no language switcher, the look of ai-softphone.ru, a link to ai-softphone.ru
at the top and at the bottom, no analytics:

```sh
npm run build:ru   # static site in build-ru/ (about 32 MB)
npm run start:ru   # http://localhost:3000 with live reload
```

Its static files are in `static-ru/` (icons of ai-softphone.ru, a few
screenshots); the Russian screenshots are copied there from
`static/screenshots/macos/ru` by `scripts/prepare-ru.mjs` before each build.
The look is `src/css/ru.css`. The site is not uploaded by Actions:
`.github/workflows/build-ru.yml` only builds it on every push that touches
the Russian site and keeps the result as an artifact (**Actions → the run →
build-ru**). Upload the *contents* of `build-ru/` (or of that artifact) to
the site's folder on the hosting by hand.

## The editor (Sveltia CMS)

`<site>/admin/` is the editor: [Sveltia CMS](https://sveltiacms.app/), the
successor of Decap CMS, reading the same `config.yml`. It has one collection
per language; each edits the files above (folders become sections of the
menu). Every save is a commit to the repository's default branch.

**On the published site**, sign in with a GitHub token — no server needed:

1. Create a [fine-grained personal access token](https://github.com/settings/personal-access-tokens/new)
   for the repository `Oleg-SIP/doc-softphone` with **Contents: Read and
   write** (and **Pull requests: Read and write** if the editorial workflow is
   ever turned on). A classic token needs the `repo` scope.
2. Open `<site>/admin/`, press **Sign In Using Access Token** and paste it. The token
   stays in that browser.

Only people with write access to the repository can save.

**Sign In with GitHub** (the button, without a token) needs a small OAuth
proxy, since GitHub has no way to do it from a static page:

1. Deploy [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth)
   as a Cloudflare Worker and register a GitHub OAuth App whose callback URL
   is the worker's `/callback`.
2. Put the worker's address in the workflow (`CMS_AUTH` next to `CMS_BRANCH`
   in `.github/workflows/deploy.yml`); it becomes `backend.base_url` in
   `config.yml`.

**On your computer**, open `http://localhost:3000/admin/` after `npm start`
in Chrome or Edge and choose **Work with Local Repository**: Sveltia edits the
files of the clone directly, without signing in and without a proxy.

Images uploaded in the editor go to `static/img/docs/` and are referenced as
`/img/docs/...`, which is right on `docs.ai-softphone.com` (base path `/`).

## Publishing

`SITE_URL` and `BASE_URL` default to the final address, `https://docs.ai-softphone.com/`;
the workflow takes them from the GitHub Pages settings (custom domain
`docs.ai-softphone.com` in *Settings → Pages*), so the build always matches
the address the site is served from.

## Search engines and AI documentation indexes

The build generates `/robots.txt` and a combined `/sitemap.xml` covering all
languages. Public pages are crawlable; the CMS under `/admin/` and its locale
copies are excluded from crawling.

`scripts/docs-discovery.mjs` uses Docusaurus's resolved document metadata to
generate `/llms.txt`, a separate `/<locale>/llms.txt` for each translation, and
an `index.md` beside every documentation page. Internal Markdown links retain
the page's language, screenshots have absolute URLs, and code examples are
preserved. The root index links to all language indexes. This follows the
[llms.txt proposal](https://llmstxt.org/).

`src/theme/DocItem/index.js` adds discovery links and Schema.org JSON-LD for
the documentation website, software application, page and technical article.
Titles, descriptions, canonical URLs and language codes come from the same
metadata as the HTML. The homepage is a CollectionPage. Docusaurus's existing
BreadcrumbList is retained. React updates the metadata on in-site navigation,
and static HTML includes it before JavaScript runs.

`npm run build` validates each language index, Markdown links, discovery links
and JSON-LD after merging the sitemaps. A validation failure stops deployment.
To validate a locally built subset, run
`node scripts/validate-discovery.mjs en ru sr-Latn`.
