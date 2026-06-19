# ACHII — Africa Climate and Health Innovation Institute

Marketing & knowledge website for ACHII, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Live site: https://achii-two.vercel.app

---

## Getting started

You need **Node.js 18+** installed.

```bash
git clone https://github.com/Chima2116/achii.git
cd achii
npm install
npm run dev
```

Open http://localhost:3000.

### Other commands
```bash
npm run build   # production build (run this before pushing to catch errors)
npm start       # serve the production build locally
npm run lint    # eslint
```

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts (Raleway + Montserrat), <JoinModalProvider>
  globals.css           Tailwind base + design-system utilities (.container-site, .label-tag)
  page.tsx              Home page (composes the section components)
  icon.png              Browser favicon  |  apple-icon.png  iOS icon

  about/page.tsx        /about
  training/page.tsx     /training
  reports/page.tsx      /reports
  get-involved/page.tsx /get-involved
  donate/page.tsx       /donate (reads ?type=monthly)
  insights/page.tsx     /insights (Knowledge Hub)

  data/
    insights.ts         All webinars / insights / reports content + badge colors

  components/
    Navbar.tsx           Theme-adaptive sticky nav (white over dark sections, dark over light)
    Footer.tsx
    Logo.tsx             ACHII icon + wordmark (variant: white | color)
    Button.tsx           Pill button (variants: yellow | outline-dark | outline-white)
    PageHero / SplitHero / ShowcaseHero   Sub-page hero layouts
    Hero, About, VisionMission, Pillars, Impact, ResearchStudy,
    CallToAction, ImageBand, SectionHeader, Placeholder
    JoinModalProvider.tsx + JoinButton.tsx   "Join the Movement" contact modal
    DonateWidget.tsx     Donation flow widget
    EmailSignup.tsx
    insights/
      HomeInsights.tsx       Home editorial section (featured + supporting cards)
      InsightsExplorer.tsx   Knowledge Hub: search, filters, featured, upcoming, past, insights
      InsightModal.tsx       Expandable detail modal (share / save / related)

public/images/            Optimized site images (.jpg) + logo
```

---

## Design system

Defined in `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `primary-dark` | `#072d4a` | hero/footer backgrounds |
| `primary-base` | `#055383` | accents, research/footer |
| `primary-light` / `primary-lighter` | `#b9e4fe` / `#f0f9ff` | soft fills |
| `yellow` | `#ffcd2c` | primary CTA |
| `green` | `#1a563c` | mission accents |
| `strong` / `sub` / `soft` | text greys | |

Fonts: **Raleway** (`font-header`) for headings, **Montserrat** (`font-body`) for body.
Helpers: `.container-site` (max-width + responsive gutters), `.label-tag` (eyebrow labels).

---

## Editing content

Most webinar / insight content is **data-driven** — edit one file, no component changes:

- **`app/data/insights.ts`** — add or edit an item in the `items` array (id, type, title,
  summary, takeaways, discussion, speakers, image, related, etc.). It automatically appears
  on the Home insights section and the `/insights` Knowledge Hub, and powers the modal.

Page copy lives directly in each `app/<route>/page.tsx`.

### Images
- Site images live in `public/images/` and are referenced as `/images/name.jpg`.
- They are served through Next.js `<Image>` (auto WebP/AVIF + resizing).
- **Keep them optimized** — resize large photos to ~1600–1920px wide and compress before
  committing (the originals are intentionally NOT in the repo; see below).

### Placeholders to fill before a full launch
Founder bio + photo, board/team/volunteer cards, donation platform links, merch images,
Resource Bank / report PDF URLs. These currently render as dashed placeholders or `#` links.

---

## Forms (front-end only for now)

The **Join the Movement** modal and the **Donate** widget collect input and show a success
state, but do not send data anywhere yet. To make them live, connect:
- Join / newsletter → an email platform (Mailchimp, Substack, or a Google Form endpoint)
- Donate → a payment provider (Paystack or Flutterwave)

---

## Deployment

Hosted on **Vercel**, connected to this repo. **Every push to `main` auto-deploys.**
No environment variables are required.

```bash
git add -A
git commit -m "your message"
git push origin main      # Vercel builds & deploys automatically
```

---

## Note on the image library

The raw photo dump (`public/images/New/`, ~1.8 GB) and the large originals
(`public/images/Home page images/`) are **gitignored** — they are not needed to run or edit
the site. Only the optimized images the site actually uses are committed. If you clone and a
referenced image is missing, re-export an optimized version into `public/images/`.
