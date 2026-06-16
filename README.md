# ACHII — Africa Climate and Health Innovation Institute

Landing page built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  components/
    Navbar.tsx         — Fixed top nav with mobile hamburger
    Hero.tsx           — Full-screen hero with headline + CTAs
    About.tsx          — About section
    VisionMission.tsx  — Vision & Mission over image background
    Pillars.tsx        — Five Pillars grid
    Impact.tsx         — Q1 2026 impact stats
    ImageDivider.tsx   — Full-width photo break
    ResearchStudy.tsx  — National research study section
    Webinars.tsx       — Webinar insights cards
    CallToAction.tsx   — 3-column CTA strip
    Footer.tsx         — Footer with links and social icons
  globals.css          — Tailwind base + custom utility classes
  layout.tsx           — Root layout with Inter font
  page.tsx             — Home page composing all sections
```

## Images

Place your images in `/public/images/`:
- `hero.jpg` — hero background (people hands together)
- `vision-bg.jpg` — vision/mission section background
- `community.jpg` — full-width image divider

## Colors

| Token | Hex |
|---|---|
| Navy | `#0A1628` |
| Yellow | `#F5C842` |
| Green | `#2D6A4F` |
