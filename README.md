# MTA-STS Study static site

This repository now contains a fully static version of the MTA-STS Study website. All pages live under `public/` and reference
assets in `public/static/`. The directory can be uploaded directly to any static host, including Cloudflare Pages.

## Preview locally

Any static file server will work. For example:

```bash
cd public
python3 -m http.server 8080
```

Then open <http://localhost:8080> in your browser.

## Deploying to Cloudflare Pages

1. In the Cloudflare Pages project settings, set **Build command** to empty and **Build output directory** to `public`.
2. (Optional) For local previews or manual deploys you can upload the contents of `public/` directly through the Pages dashboard or
   via `wrangler pages deploy` if you already have Wrangler installed locally.

Each content page lives in its own directory (for example, `public/survey/index.html`) so Cloudflare Pages can serve pretty URLs such
as `/survey/` without any additional redirects or Workers. The `_redirects` file maps the slashless versions (e.g. `/survey`) to their
directory indexes with a `200` rewrite so both forms load without an extra hop.
