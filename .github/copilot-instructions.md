# Copilot Instructions

## Overview

This is a static GitHub Pages site for the **Stanley Rawlinson Society** (`stanleyrawlinson.com`), a fictional Victorian historian society website. No build tools, bundlers, or package managers are used — everything is plain HTML, CSS, and JavaScript.

## Repository Structure

- **`index.html`** — Minimal single-page landing (dark theme, `#0b0d10` background). This is the live root page.
- **`preview/`** — The in-development multi-page version of the site (Victorian parchment theme). This is where active development happens.
  - `preview/css/styles.css` — All styles for the preview site (503 lines, CSS custom properties, no preprocessor)
  - `preview/js/menu.js` — Mobile sidebar toggle only
  - `preview/images/` — Images named with numeric prefix convention: `001_`, `002_`, etc.
  - One HTML file per chapter/section (e.g. `early-years.html`, `family.html`)

## Conventions

### CSS (preview site)
- All colours and sizing defined as CSS custom properties in `:root` in `styles.css`
- Victorian parchment theme: `--parchment: #f5edd8`, `--text: #2c1a0e`, `--accent: #8b3a0f`, etc.
- Font: `Georgia, 'Times New Roman', serif` for body text

### HTML structure (preview pages)
Every preview page follows this layout:
```
<header> (site logo + top nav + mobile toggle button)
<div class="page-wrapper">
  <aside class="sidebar"> (chapter navigation links)
  <main class="content"> (page content)
</div>
```

### Image naming
Images in `preview/images/` use a numeric prefix: `001_`, `002_`, etc. The first segment groups images by chapter/subject.

### No build step
Edit files directly — there is no compile, minify, or deploy step beyond pushing to `main`, which GitHub Pages serves automatically.
