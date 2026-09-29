# AI Softphone — documentation

The documentation site for [AI Softphone](https://ai-softphone.com/), in the
same thirty languages as the product's website. Built with
[Docusaurus](https://docusaurus.io/), edited with [Decap CMS](https://decapcms.org/)
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
| `docs/` | Pages in English. |
| `i18n/<code>/docusaurus-plugin-content-docs/current/` | Pages in another language, same file names as in `docs/`. A page that is not translated yet shows the English one. |
| `sidebars.js` | The menu on the left — built from the folders in `docs/`; order with `sidebar_position` in a page's front matter. |
| `static/admin/index.html` | The editor (Decap CMS). `static/admin/config.yml` next to it is **generated** from `languages.json` by `npm run cms:config` (runs before `start` and `build`). |
| `.github/workflows/deploy.yml` | Builds every push, publishes to GitHub Pages. |

## The editor (Decap CMS)

`<site>/admin/` has one collection per language; each edits the files above
(folders become sections of the menu). Every save is a commit to the
repository's default branch.

**On your computer**, without signing in:

```sh
npm start
npm run cms:local  # in a second terminal
# open http://localhost:3000/admin/
```

**On the published site**, Decap signs in with GitHub, which needs a small
OAuth proxy (GitHub has no way to do it from a static page):

1. Deploy an OAuth proxy — e.g. [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)
   or [decap-proxy](https://github.com/i40west/netlify-cms-cloudflare-pages)
   as a Cloudflare Worker — and register a GitHub OAuth App whose callback URL
   is the proxy's `/callback`.
2. Put the proxy's address in the workflow (`CMS_AUTH` next to `CMS_BRANCH` in
   `.github/workflows/deploy.yml`), which becomes `backend.base_url` in
   `config.yml`.
3. Give the people who will edit write access to the repository.

Images uploaded in the editor go to `static/img/docs/` and are referenced as
`/img/docs/...`, which is right on the final domain (base path `/`) but not on
the `github.io/doc-softphone/` test address.

## Publishing

`SITE_URL` and `BASE_URL` default to the final address, `https://doc.ai-softphone.com/`;
the workflow takes them from the GitHub Pages settings, so the same build works
at `https://oleg-sip.github.io/doc-softphone/` and, once the custom domain is set
in *Settings → Pages*, at the final one.
