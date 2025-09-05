# ninama — portfolio (Vite + React + TS + Tailwind)

A single-page bilingual portfolio (RU/EN) with high-end animations (Framer Motion) and Lucide icons.

## Quick start

```bash
# Node.js >= 18 recommended
npm install
npm run dev
```

Open http://localhost:5173

## Build
```bash


npm run build
npm run preview
```

## Tests
```bash
npm test
```

## Where to edit
- Main component: `src/App.tsx`
- Styling: `src/index.css` (Tailwind)
- Images: `IMAGES` map in `App.tsx` (currently uses Google Drive thumbnail of your PDF).
- Texts: `CONTENT` object (RU/EN).

## Deploy options
- **Vercel** (zero config for Vite)
- **GitHub Pages** (set `base` in `vite.config.ts` if deploying to a subpath)
- Any static hosting (Netlify, Cloudflare Pages, …)
