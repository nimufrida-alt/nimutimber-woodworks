# Nimu Timber & Woodworks

Five-page educational e-commerce demonstration for Nimu Timber & Woodworks, built for the MUBS BUC3106 E-Commerce Capstone Project. Product sizes and prices marked SAMPLE are illustrative; no payments or orders are processed.

Pages: Home, Products, About, Pay and Policies.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` writes the finished site to `dist/`, and `npm run preview` serves that build.

## Publish on GitHub Pages

The site is plain HTML, CSS and JavaScript bundled with Vite. Every link and asset path is relative, so it works under the repository address `https://nimufrida-alt.github.io/nimutimber-woodworks/`.

1. Push to `main`.
2. In the repository, open Settings, then Pages, and set Source to **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` builds the site and publishes `dist/`. It reruns on every push to `main`.

## Layout

- `index.html`, `products.html`, `about.html`, `pay.html`, `policies.html`: the pages
- `src/style.css`, `src/main.js`: shared styles and script
- `src/assets/`: images, logos and favicon
- `vite.config.mjs`: build settings (`base: './'` keeps paths relative)
