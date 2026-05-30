# Project Structure

Last updated: 2026-05-29 23:41:26 UTC

## Project Structure

- `index.html` loads the Google fonts and mounts the React app.
- `src/App.tsx` contains the single-page portfolio, data arrays, animation components, proof links, clickable work cards, and project popup modal.
- `src/index.css` defines Tailwind layers, global font/background styles, and SVG noise utilities.
- `src/assets/` stores portfolio proof images, the Comics character sheet, and the local hero MP4.
- Tailwind, Vite, PostCSS, and TypeScript configs live at the project root.
- `.opendeploy/project.json` stores the saved OpenDeploy project/service context.

### File Tree

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── .opendeploy
│   └── project.json
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
- Run production preview: `npm run start`
- Deploy to saved OpenDeploy service: upload source, then create/wait for deployment using the saved context.

## Module Inputs And Outputs

- `src/main.tsx` mounts `App` into `#root`.
- `src/App.tsx` imports static assets and outputs the full landing page UI.
- `src/index.css` supplies global Tailwind/CSS utilities consumed by the React components.

## Data Stats Change

- Added three local visual proof assets: EAZO screenshot, EAZO update screenshot, and White Dress illustration.
- Added a local hero video asset from the supplied `girl_personal portfolio.mp4`.
- Added static project/social links for LinkedIn, GitHub, Xiaohongshu, Dribbble, Notion, Devpost, and live demos.
- Added Comics project links for two LinkedIn comic releases.
- Added a Comics character sheet image for the Comics Work card.

## Feature Specs

- Single-page personal portfolio for Anne Liu with Hero, About/Proof, and Work sections.
- Visual system follows a dark cinematic cream palette with Almarai and Instrument Serif fonts.
- Work cards summarize ForgeRedemption, GroundTruth/nHackathon, EAZO GTM Tool, Civil-AI-zation, Creative Archive, and Comics.
- Each Work card opens a popup with simple project details and external proof links.
- Work cards use full uncropped images with title, eyebrow, number, link count, and Open project CTA only.
- Work order highlights ForgeRedemption first, EAZO GTM Tool second, and GroundTruth/nHackathon third.
- ForgeRedemption and EAZO GTM Tool copy calls out their cash-prize wins.
- Framer Motion powers pull-up text, card entrance animation, and scroll-linked About text reveal.
- Lucide icons support CTAs, links, and checklist affordances.
- Vite preview allows the deployed OpenDeploy host so the production URL can serve the app.
- Hero section plays the bundled local MP4 instead of a remote CloudFront video URL.

## Maintenance Log

- 2026-05-27 21:15:11 UTC: Bootstrap project documentation.
- 2026-05-27 22:25:00 UTC: Implement Anne Liu personal portfolio landing page.
- 2026-05-27 21:54:00 UTC: Add explicit Vite production start command for OpenDeploy.
- 2026-05-27 22:00:00 UTC: Deploy to OpenDeploy and save service context.
- 2026-05-29 23:20:39 UTC: Replace hero section video with bundled local MP4.
- 2026-05-29 23:26:00 UTC: Add clickable project popups and Comics work card.
- 2026-05-29 23:41:26 UTC: Redesign Work cards around full images, add Comics image, reorder EAZO before GroundTruth, and strengthen prize copy.
