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
