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

The `_redirects` file in `public/` rewrites pretty URLs such as `/dataset` and `/survey/` to their corresponding `.html` files so the
site behaves the same way it did when it was backed by Flask.
