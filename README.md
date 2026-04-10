# Porter/Collins — Corporate Website

Institutional marketing site for Porter/Collins, an operator of behind-the-meter flexible compute (Bitcoin validators + HPC) co-located with utility-scale solar and battery storage globally.

**Pure static HTML + CSS.** No build step, no Node, no framework. Open `index.html` in any browser or serve from any webserver.

## Files

```
index.html      Homepage (6 sections + nav + footer)
contact.html    /contact page
styles.css      All styles (Inter Tight + JetBrains Mono via Google Fonts CDN)
logo.png        Porter/Collins logo
Logo.png        Original logo file
README.md       This file
```

## Deploy

### Any webserver (nginx, apache, caddy)
Point the document root at this directory. Done.

### GitHub Pages
Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder: `/ (root)` → Save.

### Quick local preview
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Customization

| What | Where |
|---|---|
| Contact email | search `contact@portercollins.com` in both HTML files |
| Brand colors | CSS custom properties at top of `styles.css` |
| Fonts | `@import url(...)` at top of `styles.css` |
| Section copy | directly in the HTML |
