# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Website for the Conservation Biogeography Research Group (保护生物地理研究组) at Yunnan University, led by 武瑞东 (Wu Ruidong). A React SPA deployed to GitHub Pages with Chinese-language content.

## Commands

```
npm run dev       # Vite dev server on port 3000, binds 0.0.0.0
npm run build     # Production build into dist/
npm run preview   # Preview production build locally
npm run lint      # TypeScript type-check only (tsc --noEmit)
npm run clean     # Remove dist/
```

## Architecture

- **Single-page app** with no server component — purely static files served by GitHub Pages.
- **HashRouter** (not BrowserRouter) because GitHub Pages doesn't support SPA fallback routing. The `base` in [vite.config.ts](vite.config.ts) is `'./'` so all asset paths are relative.
- **All components live in [src/App.tsx](src/App.tsx)** — there's no component file structure. Each page is a function component in this single file: `Home`, `Research`, `Publications`, `Team`, `MemberDetail`, `Contact`, plus shared `Navbar` and `Footer`.
- **Routes** (defined in the `App` component at the bottom of App.tsx): `/`, `/research`, `/publications`, `/team`, `/team/:id`, `/contact`.

## Key files

| File | Purpose |
|---|---|
| [src/App.tsx](src/App.tsx) | All components + routing + layout |
| [src/constants.ts](src/constants.ts) | All content data (team members, publications, research areas) |
| [src/types.ts](src/types.ts) | TypeScript interfaces: `Member`, `Publication`, `ResearchArea` |
| [src/lib/utils.ts](src/lib/utils.ts) | `cn()` helper (clsx + tailwind-merge) |
| [src/index.css](src/index.css) | Tailwind 4 import + `@theme` custom tokens + font import |
| [vite.config.ts](vite.config.ts) | Vite config: React + Tailwind plugins, `@/` path alias to root, GEMINI_API_KEY injected at build time |

## Tech stack

- React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) v7 (HashRouter)
- [motion](https://www.npmjs.com/package/motion) (formerly framer-motion) for animations
- [lucide-react](https://www.npmjs.com/package/lucide-react) for icons
- `clsx` + `tailwind-merge` for conditional class names via `cn()`

## Design tokens

Custom theme colors defined in [src/index.css](src/index.css):
- `--color-brand-green: #2d5a27` — primary brand color
- `--color-brand-earth: #f5f2ed` — warm off-white background
- Fonts: Inter (sans), Cormorant Garamond (serif)

## Content editing

All site content (team, publications, research areas) is hardcoded in [src/constants.ts](src/constants.ts). Images use picsum.photos placeholders — replace with real images before launch.

## CI/CD

GitHub Actions ([.github/workflows/static.yml](.github/workflows/static.yml)) deploys on push to `main`: install → build → upload `dist/` → deploy to GitHub Pages. No tests, no lint step in CI.
