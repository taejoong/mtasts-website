# MTA-STS Study static site

This repository now contains a fully static version of the MTA-STS Study website. All pages live under `public/` and reference
assets in `public/static/`. The directory can be uploaded directly to any static host, including Cloudflare Workers/Pages.

## Preview locally

Any static file server will work. For example:

```bash
cd public
python3 -m http.server 8080
```

Then open <http://localhost:8080> in your browser.

## Deploying to Cloudflare Workers/Pages

You can deploy the static site with Wrangler using the provided `wrangler.toml` and Worker script, which automatically serve the
files from the `public/` directory and fall back to `index.html`/`.html` paths when needed.

### Deploy to Workers

```bash
wrangler deploy
```

The Worker serves the content at your Workers.dev subdomain (or a bound route) using the `ASSETS` binding configured in
`wrangler.toml`.

### Deploy to Pages

```bash
wrangler pages deploy public
```

Cloudflare Pages will publish everything inside the `public/` directory.
