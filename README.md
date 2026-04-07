# Porter/Collins — Corporate Website

Institutional marketing site for Porter/Collins, an operator of behind-the-meter flexible compute (Bitcoin validators + HPC) co-located with utility-scale solar and battery storage globally.

Stack: **Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS**

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy

### Vercel (recommended)
1. Push this directory to a Git repo
2. Import the repo at https://vercel.com/new
3. Framework preset auto-detects as **Next.js** — no env vars required
4. Deploy

### Netlify
1. Push to a Git repo
2. New site → import → build command `npm run build`, publish directory `.next`
3. Add the **Next.js Runtime** plugin (Netlify auto-suggests it)

## Customization

| What | Where |
|---|---|
| Contact email | search `contact@portercollins.com` (used in `Footer.tsx`, `SustainabilitySection.tsx`, `app/contact/page.tsx`) |
| Logo | replace `public/logo.png` (square works best) |
| Brand colors | `tailwind.config.ts` → `theme.extend.colors.navy` and `accent` |
| Fonts | `app/layout.tsx` → `next/font/google` imports |
| Section copy | each section is its own component in `app/components/` |

## File map

```
app/
├── layout.tsx                  Root layout, fonts, metadata
├── globals.css                 Tailwind base + design tokens
├── page.tsx                    Homepage (composes 6 sections)
├── contact/page.tsx            /contact route
└── components/
    ├── Nav.tsx                 Sticky nav, mobile menu
    ├── Footer.tsx
    ├── Hero.tsx                Section 1
    ├── ProblemSection.tsx      Section 2 — Decoupling Crisis
    ├── SolutionSection.tsx     Section 3 — Behind-the-Meter Solution
    ├── OperationsSection.tsx   Section 4 — 15-min arbitrage + capacity guarantee
    ├── PartnershipSection.tsx  Section 5 — Zero CAPEX / Asset Rotation
    ├── SustainabilitySection.tsx  Section 6 — Sustainability & Grid Safety
    ├── SectionHeading.tsx      Reusable eyebrow + title + lede
    └── StatCard.tsx            Reusable metric block
```
