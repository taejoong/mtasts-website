# MTA-STS Study static site

This repository now contains a fully static version of the MTA-STS Study website. All pages are plain HTML files in the project root that reference assets located in the `static/` directory. This layout can be uploaded directly to any static host, including Cloudflare Workers/Pages.

## Preview locally

Any static file server will work. For example:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080> in your browser.

## Deploying to Cloudflare Workers/Pages

1. Upload the repository contents (including the `static/` directory) to your Worker or Pages project.
2. Ensure the entry point is `index.html` and that all static assets remain in the `static/` folder.
3. Publish the site; the HTML files already contain absolute links such as `/dataset.html` and `/static/...`, which are compatible with static hosting environments.
