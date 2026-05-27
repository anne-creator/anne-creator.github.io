# Project Structure

Last updated: 2026-05-27 22:25:00 UTC

## Project Structure

- `index.html` loads the Google fonts and mounts the React app.
- `src/App.tsx` contains the single-page portfolio, data arrays, animation components, proof links, and work cards.
- `src/index.css` defines Tailwind layers, global font/background styles, and SVG noise utilities.
- `src/assets/` stores portfolio proof images copied from the supplied screenshots/illustration.
- Tailwind, Vite, PostCSS, and TypeScript configs live at the project root.

### File Tree

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── App.tsx
│   ├── assets
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Workflow

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Validate production build: `npm run build`

## Module Inputs And Outputs

- `src/main.tsx` mounts `App` into `#root`.
- `src/App.tsx` imports static assets and outputs the full landing page UI.
- `src/index.css` supplies global Tailwind/CSS utilities consumed by the React components.

## Data Stats Change

- Added three local visual proof assets: EAZO screenshot, EAZO update screenshot, and White Dress illustration.
- Added static project/social links for LinkedIn, GitHub, Xiaohongshu, Dribbble, Notion, Devpost, and live demos.

## Feature Specs

- Single-page personal portfolio for Anne Liu with Hero, About/Proof, and Work sections.
- Visual system follows a dark cinematic cream palette with Almarai and Instrument Serif fonts.
- Work cards summarize ForgeRedemption, GroundTruth/nHackathon, EAZO GTM Tool, Civil-AI-zation, and Creative Archive.
- Framer Motion powers pull-up text, card entrance animation, and scroll-linked About text reveal.
- Lucide icons support CTAs, links, and checklist affordances.

## Maintenance Log

- 2026-05-27 21:15:11 UTC: Bootstrap project documentation.
- 2026-05-27 22:25:00 UTC: Implement Anne Liu personal portfolio landing page.
