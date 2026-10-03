# Porter/Collins/Villagrán (PCV) website

Canonical site: <https://portercollinsvillagran.tech>

Bilingual corporate site for Porter/Collins/Villagrán, focused on behind-the-meter flexible compute co-located with utility-scale renewable generation.

**Static HTML, CSS, and small inline scripts.** There is no application build step or framework.

## Pages

| URL | Source |
|---|---|
| `/` | `index.html` |
| `/contact` | `contact.html` |
| `/es/` | `es/index.html` |
| `/es/contact` | `es/contact.html` |

The contact CTA uses `contact@portercollinsvillagran.tech`.

## Assets

- `styles.css` — site styles and responsive layout
- `brand/pcv-lockup.svg` and `brand/pcv-lockup-reversed.svg` — current wordmarks
- `favicon.svg` and `apple-touch-icon.png` — browser and home-screen icons
- `og.png` — social sharing image
- `Logo.png` — legacy bitmap retained for compatibility; current pages use the SVG wordmarks

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. The clean contact URLs are provided by the production Caddy routing; for a basic local preview, the source files are also available as `/contact.html` and `/es/contact.html`.

## Deployment

Production is a static site served by Caddy and managed separately from GitHub. Do not assume a push to this repository deploys production; verify the active deployment path before relying on it. The root `vercel.json` is retained for Vercel preview configuration and does not change the production host.

## Editing

- English copy: `index.html`, `contact.html`
- Spanish copy: `es/index.html`, `es/contact.html`
- Colors, typography, and responsive rules: `styles.css`
- The cookie/analytics consent banner is implemented in the page HTML; review its analytics loading behavior before changing it.
