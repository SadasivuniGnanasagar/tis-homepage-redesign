# Tulas International School (TIS) – Homepage Redesign

An animated, mobile-first redesign of the Tulas International School homepage. The copy, contact details, rankings, sports list and parent reviews all come from [tis.edu.in](https://tis.edu.in/). The layout, motion and theming are new.

## Live demo

- Live URL: https://tis-homepage-redesign-flame.vercel.app/
- Repository: https://github.com/SadasivuniGnanasagar/tis-homepage-redesign

## Tech stack

- Framework: React 19 with Vite
- Styling: Tailwind CSS v4 (theme tokens as CSS variables)
- Animation: Framer Motion
- Icons: Lucide React
- Fonts: Bricolage Grotesque and Figtree, self-hosted through Fontsource
- Deployment: Vercel

## Standout features

All four optional features are implemented.

1. **Custom cursor** – a spring-smoothed ring plus a dot. The ring grows and tints over links, buttons and form fields. It is disabled on touch devices through `(pointer: fine)`.
2. **Scroll-triggered reveals** – `Reveal` wraps content in a `whileInView` entrance (0.5s, staggered by index, runs once).
3. **Animated theme switcher** – a sliding toggle with a sun/moon icon swap. The choice is saved to `localStorage`, falls back to the OS setting, and an inline script in `index.html` applies it before first paint to avoid a flash.
4. **Scroll progress bar** – `useScroll` + `useSpring` drive a `scaleX` transform on a fixed bar, so no layout work happens on scroll.

### Bonus: TIS assistant

A floating chat widget that answers common questions (admissions, fees, sports, campus, rankings, contact) from the same `content.js` data used by the page, so facts never drift. It is rule-based with keyword scoring, needs no API key, and falls back to the admissions helpline when it is unsure. Close it with Esc; suggestion chips give one-tap questions.

Other details: parallax mountains and sun in the hero, a word-by-word headline reveal, `prefers-reduced-motion` respected through `MotionConfig`, a two-tone keyboard focus ring that is visible on light, dark and yellow backgrounds, a skip-to-content link, Esc to close the mobile menu and chat, an accessible hero heading, and semantic landmarks (`header`, `nav`, `main`, `section`, `footer`).

## Getting started locally

```bash
git clone <your-repo-url>
cd tis-homepage-redesign
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
├── components/
│   ├── animation/   CustomCursor, ScrollProgress, Reveal
│   ├── layout/      Navbar (with mobile menu), Footer
│   ├── sections/    Hero, Numbers, Sports, Recognition, People, Parents, Enquire
│   └── ui/          Button, SectionHeading, ThemeToggle, ChatAssistant
├── data/            content.js (all copy and lists), assistant.js (chat topics and matching)
├── hooks/           useTheme, useFinePointer, useAssistant
├── App.jsx
├── index.css        design tokens + Tailwind setup
└── main.jsx
```

## Deploy

**Vercel:** import the GitHub repo, keep the detected Vite preset (build `npm run build`, output `dist`), and deploy.
**Netlify:** build command `npm run build`, publish directory `dist`.

## Notes and limitations

- The enquiry form validates (name, Indian 10-digit mobile number, class, consent) and confirms on screen but has no backend. The original site's OTP step is left out.
- Official photos and logos are not bundled. Drop them into `public/` and reference them from `src/data/content.js` to add them.
