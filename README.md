# Anant Barjatya — Portfolio

A Porsche-911-inspired developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

This is the **frontend-only, hardcoded-data phase**: everything on the site comes
from a single file, `src/data/resume.js`. There's no backend or database yet —
when you want to change your experience, projects, skills, etc., you edit that
file directly and redeploy. If you later want a CMS/admin panel backed by
MongoDB so you don't have to touch code, that's a clean phase-2 addition (the
data file is already shaped like the API responses would be, so it's a
straightforward swap).

## Stack

- React 19 + Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file needed)
- Framer Motion for animation (loader sequence, scroll-driven car, section reveals)
- Lucide React for icons

## Project structure

```
src/
  components/     CarScene, Loader, Navbar, Footer — reusable UI
  sections/       Hero, DriverProfile, Performance, Journey, Garage,
                  Foundation, Contact — one file per page section
  hooks/          useTheme.js — dark/light mode + localStorage
  data/           resume.js — THE source of truth for all content
  index.css       design tokens (colors, fonts) + theme variables
```

`CarScene.jsx` is deliberately isolated as its own component — it's currently
a 2D SVG car, but every place that needs "the car" imports `<CarScene />`, so
it can be replaced with a Three.js / React Three Fiber model later without
touching Hero, Journey, or anywhere else that renders it.

## Running it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Building for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Editing your content

Open `src/data/resume.js` and edit the `profile`, `experience`, `projects`,
`education`, `achievements`, and `skills` objects/arrays. The whole site
re-renders from that file — no need to touch any section component for a
content change (new job, new project, updated CGPA, etc.).

## Deploying

This is a static frontend — deploys to Vercel with zero configuration:

1. Push this folder to a GitHub repo.
2. Import it in Vercel.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`.

Netlify, Cloudflare Pages, or GitHub Pages work the same way.

## Contact form

The "Book a Test Drive" form currently builds a `mailto:` link (to
barjatyaanant23@gmail.com) and opens the visitor's email client — this
works with zero backend. If you want it to actually store submissions in a
database and/or send you an email server-side, that's the natural phase-2:
a small Express + MongoDB (or even a serverless function) exposing
`POST /api/contact`, with the form's `fetch` call swapped in for the
`mailto:` redirect. Everything else on the site stays the same.

## Notes on what's implemented vs. simplified from the original brief

- **Data**: hardcoded in `resume.js`, not served from MongoDB/Express — by request, to keep this phase simple.
- **Admin panel**: not built — would only make sense once there's a real backend.
- **Car**: a hand-drawn 2D/SVG silhouette (`CarScene.jsx`), not a 3D model — kept as a swappable component per the brief's own fallback guidance.
- **Sound design**: not implemented (was marked optional in the brief).
- **Scroll-driven motion**: done with Framer Motion's `useScroll`/`useTransform` rather than GSAP + ScrollTrigger, to keep the dependency list lighter — same visual effect (the car moves along the road as you scroll through the Journey section).
