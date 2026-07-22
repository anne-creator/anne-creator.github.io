# Project Structure

Last updated: 2026-07-22 00:25:00 UTC

## Project Structure

- root files: 14 files
- `.github/`: 1 file
- `.opendeploy/`: 3 files
- `public/`: 1 file
- `src/`: 21 files

### File Tree

- `.gitignore`
- `CODING_SESSION.md`
- `PROJECT_STRUCTURE.md`
- `girl_personal portfolio.mp4`
- `index.html`
- `opendeploy_resource.md`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
- `.github/workflows/deploy-pages.yml`
- `.opendeploy/plan.json`
- `.opendeploy/project.json`
- `.opendeploy/service.json`
- `public/og-cover.jpg`
- `src/App.tsx`
- `src/index.css`
- `src/main.tsx`
- `src/portfolioData.ts`
- `src/vite-env.d.ts`
- `src/assets/civil-ai-zation.png`
- `src/assets/comics-character-sheet.png`
- `src/assets/eazo-gtm.png`
- `src/assets/eazo-moment.png`
- `src/assets/eazo-update.png`
- `src/assets/forge-redemption.jpg`
- `src/assets/girl-personal-portfolio.mp4`
- `src/assets/groundtruth.png`
- `src/assets/hero-desktop-poster.webp`
- `src/assets/hero-mobile-poster.webp`
- `src/assets/hero-mobile.mp4`
- `src/assets/posterlytics.svg`
- `src/assets/visual-design.jpg`
- `src/assets/visual-design.png`
- `src/assets/wechat-qr.jpg`
- `src/assets/white-dress.png`

## Workflow

- Node scripts: `npm run build`, `npm run dev`, `npm run preview`, `npm run start`

## Module Inputs And Outputs

- `src/App.tsx`: Renders the portfolio and contact interactions from `src/portfolioData.ts` plus local visual assets.
- `src/portfolioData.ts`: Supplies the typed public portfolio, proof, GTM story, and contact-link data.

## Data Stats Change

- Data-like files: 8
- `.json`: 8
- Public contact email: `anneliu49@gmail.com`, with a prefilled collaboration subject and qualification prompts.
- WeChat QR asset: `src/assets/wechat-qr.jpg`.

## Feature Specs

- Single-page personal portfolio for Anne Liu with Hero, Capability Proof, Community-Led Growth Engine, GTM Stories, Technical Work, and Collaboration sections.
- Visual system follows a dark cinematic cream palette with Almarai and Instrument Serif fonts.
- Public positioning presents Anne as a technical GTM builder helping AI startups turn technical products into trusted communities and early adoption.
- The Community-Led Growth Engine connects product understanding, demonstrations, gatherings, follow-up, distribution, early users, and learning.
- Three detailed GTM stories cover community/event activation, technical storytelling/builder distribution, and measurable growth experiments.
- Typed claim statuses distinguish completed proof from active work and planned experiments.
- Proof triggers reveal local browser-style summaries on hover/focus or mobile tap; original third-party sources remain optional external evidence.
- Work cards summarize ForgeRedemption, Posterlytics, EAZO GTM Tool, GroundTruth/nHackathon, Civil-AI-zation, Creative Archive, and Comics.
- Each Work card opens a popup with simple project details and external proof links.
- Work cards use full uncropped images with title, eyebrow, description, two proof bullets, source count, and Open project CTA.
- Work order highlights GTM relevance: EAZO GTM Tool, Posterlytics, ForgeRedemption, and GroundTruth/nHackathon first.
- ForgeRedemption and EAZO GTM Tool copy calls out their cash-prize wins.
- Posterlytics copy calls out the InsForge Hackathon win, URL-to-poster generation, per-placement QR attribution, and scan/conversion analytics.
- Framer Motion powers pull-up text, card entrance animation, and scroll-linked About text reveal.
- Lucide icons support CTAs, links, and checklist affordances.
- Vite preview allows the deployed OpenDeploy host so the production URL can serve the app.
- Vite preview allows OpenDeploy subdomains so newly created OpenDeploy auto domains can serve the app.
- Hero section plays the bundled local MP4 instead of a remote CloudFront video URL.
- Mobile loads a dedicated portrait hero video; desktop keeps the original landscape MP4, and reduced-motion/Save-Data users receive a static poster.
- Page metadata identifies the site as `Anne Liu | Technical GTM for AI Startups` and supplies canonical, Open Graph, and Twitter fields.
- Hero and closing collaboration CTAs open a prefilled email to Anne (`AI startup collaboration` plus company, product, collaboration, and timeline prompts); a WeChat icon beside LinkedIn opens the supplied QR code on hover, keyboard focus, or mobile tap.
- A compact desktop hero header links directly to the Approach, Stories, Work, and Contact sections.
- OpenDeploy resource document organizes supplied founder notes into a durable Markdown brief with dated traction, public source links, positioning, product narrative, GTM, competition, fundraising frame, and verification notes.
- GitHub Pages workflow publishes the Vite build artifact from `main` to the personal website at `anne-creator.github.io`.
- About proof cards show the current RedNote audience milestone of 2,300 followers.
- Hero profile copy positions Anne as an OpenDeploy Co-Founder and 3x hackathon winner.

## Child Project Rollups

- No child project rollups recorded yet.

## Maintenance Log

- 2026-07-22 00:09:47 UTC: Feature update finalized — Refactor portfolio around technical GTM
- 2026-07-22 00:18:00 UTC: Add email collaboration CTAs, a responsive WeChat QR popover, larger hero supporting type, and direct desktop section navigation.
- 2026-07-22 00:25:00 UTC: Prefill collaboration email CTAs with a useful inquiry template.
- 2026-05-27 21:15:11 UTC: Bootstrap project documentation.
- 2026-05-27 22:25:00 UTC: Implement Anne Liu personal portfolio landing page.
- 2026-05-27 21:54:00 UTC: Add explicit Vite production start command for OpenDeploy.
- 2026-05-27 22:00:00 UTC: Deploy to OpenDeploy and save service context.
- 2026-05-29 23:20:39 UTC: Replace hero section video with bundled local MP4.
- 2026-05-29 23:26:00 UTC: Add clickable project popups and Comics work card.
- 2026-05-29 23:41:26 UTC: Redesign Work cards around full images, add Comics image, reorder EAZO before GroundTruth, and strengthen prize copy.
- 2026-05-31 21:32:21 UTC: Record OpenDeploy install/deploy session, save fresh OpenDeploy project/service context, and allow OpenDeploy wildcard preview hosts.
- 2026-06-02 00:00:00 UTC: Add OpenDeploy Markdown resource for strategy, positioning, GTM, investor narrative, QA, and source tracking.
- 2026-06-08 00:00:00 UTC: Create GitHub Pages workflow for the `anne-creator.github.io` personal website repository.
- 2026-06-08 01:00:00 UTC: Update RedNote follower proof stat to 2,300.
- 2026-06-08 04:26:39 UTC: Add Posterlytics as the second project card and update hero proof copy to 3x hackathon winner.
- 2026-07-21 23:58:00 UTC: Refactor the portfolio around technical GTM and community-led growth, add typed proof stories and previews, optimize mobile hero media, and update social metadata.
