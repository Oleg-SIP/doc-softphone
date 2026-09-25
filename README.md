# AI Softphone — documentation

The documentation site for [AI Softphone](https://ai-softphone.com/), in the
same thirty languages as the product and its website. Built with
[Astro Starlight](https://starlight.astro.build/); to be published at
`doc.ai-softphone.com`.

## Working on it

```sh
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # static site in dist/, with the search index
npm run preview    # serve dist/
```

## Where things are

| Path | What it is |
| --- | --- |
| `src/i18n/languages.mjs` | The thirty languages, their URL folders and their own names. English is the root (`/`), the rest are `/<code>/` (`/sr-latn/` for Serbian in Latin letters). |
| `src/content/docs/<lang>/` | The pages of each language. English lives directly in `src/content/docs/`. |
| `src/content/i18n/<lang>.json` | The documentation's own interface words (`docs.*`), and Starlight's interface for the languages Starlight does not ship (bg, et, hr, lt, sl, sr, sr-Latn). |
| `src/data/site/<lang>.json` | Text copied from the product site's catalogue, so the docs say things in the same words. **Generated** — see below. |
| `src/components/Home.astro` | The home page body, shared by every language. |
| `src/styles/theme.css` | The product site's colours. |

## The home page

The home page is written for all thirty languages at once from the product
site's own text:

```sh
npm run i18n:import   # copy the wording from https://ai-softphone.com
npm run gen:home      # write src/content/docs/<lang>/index.mdx
```

Run both again whenever the site's wording changes, and commit the result.
`SITE_SRC=../path/to/site npm run i18n:import` reads a local checkout of the
site instead of the live one.

## Language on the first visit

Somebody opening the English home page for the first time is sent on to their
browser's language, the way ai-softphone.com opens in it (`src/i18n/redirect.mjs`).
Only the first time: after that the last language they read is kept, and
choosing English in the selector keeps English.

## Publishing

`.github/workflows/deploy.yml` builds every push and publishes the
repository's default branch to GitHub Pages. The address comes from the repository's Pages settings, so
nothing in the code changes when the site moves:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
   The test address is then `https://oleg-sip.github.io/doc-softphone/`.
2. To move to the final address, add a DNS record
   `doc.ai-softphone.com CNAME oleg-sip.github.io` and enter
   `doc.ai-softphone.com` under **Settings → Pages → Custom domain**.

Building by hand for a given address:

```sh
SITE_URL=https://doc.ai-softphone.com BASE_PATH=/ npm run build
```
