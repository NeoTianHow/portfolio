# Neo Tian How Portfolio

A personal portfolio website showcasing my experience, projects, and technical skills. Built with Next.js App Router, React,
TypeScript, Tailwind CSS, and `next/font`.

## Stack

- Next.js 16 with Turbopack
- React 19
- TypeScript 5.9
- Tailwind CSS 4
- Host Grotesk and JetBrains Mono via `next/font`

## Requirements

- Node.js `>=20.9.0`
- npm 10+

## Scripts

```bash
npm run dev        # Start local development
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting
npm run build      # Build the production app
npm run start      # Serve the production build
npm run check      # Run lint, typecheck, and build
```

## Release Checklist

Before publishing, run:

```bash
npm install
npm run check
npm audit --audit-level=moderate
```

Then verify the production build locally:

```bash
npm run start
```

Open `http://localhost:3000` and check the home page, resume download, external
links, dark theme persistence, mobile navigation, `/robots.txt`, and
`/sitemap.xml`.

The canonical production URL is configured in `lib/site.ts`.
