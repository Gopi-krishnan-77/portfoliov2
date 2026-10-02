# gopikrishnanb.co.in

Personal portfolio of Gopikrishnan Balagopal — a single-page, Kerala-themed site built with Next.js 14 (App Router), Tailwind CSS and a touch of Framer Motion. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `src/lib/content.ts` — all copy: bio, experience, projects, stack, awards, links. Edit this to update the site.
- `src/components/` — one component per section (`Hero`, `About`, `Experience`, `Projects`, `Stack`, `Awards`, `Contact`).
- `src/app/layout.tsx` — fonts, metadata, JSON-LD.
- `src/app/globals.css` — motif animations and the few styles Tailwind can't express.
- `public/` — `resume.pdf` and the motif artwork (`elephant.webp`, `kathakali.webp`, `boat.webp`).

## Notes

- Motif images must have **transparent backgrounds**. Don't hide an opaque background with
  `mix-blend-mode` / `filter` — iOS Safari drops the blend on animated layers and shows the rectangle.
- Projects are looked up by `id` in `Projects.tsx`, so the order in `content.ts` doesn't matter.
- Theme colours are Tailwind tokens (`green`, `dark`, `cream`, `grey`, `muted`, `subtle`, …) in `tailwind.config.ts`.
