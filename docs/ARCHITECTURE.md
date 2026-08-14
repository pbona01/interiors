# Architecture — Phase 0/1 baseline

The application is a Next.js App Router project using TypeScript, Tailwind CSS 4, ESLint, pnpm, and Vercel-compatible conventions. There is no database, authentication, CMS, or CRM dependency.

## Phase 2 implementation

`src/types/site.ts` defines the shared site, content, theme, image, mode, and analytics-event contracts. `src/config/site.ts` is the one central Avery House demo configuration; structured projects, services, and real-service-area candidates are isolated in `src/data`. `src/config/theme.ts` supplies the curated theme tokens.

`src/lib/site-mode.ts` is the safety boundary: only production mode can be indexable, collect analytics, or transmit leads. `src/lib/seo/metadata.ts` creates noindex-aware metadata. `src/lib/analytics/events.ts` has a provider-neutral typed event API and intentionally has no tracking provider yet.

## Planned structure

```
src/app/                 routes, metadata, API handlers
src/components/          layout, navigation, sections, media, UI
src/config/              typed site and theme configuration
src/data/                projects, services, service areas
src/lib/                 validation, SEO, analytics, integrations
src/types/               shared domain types
public/images/           client-replaceable image assets
public/video/            optional, optimized media
```

Phase 2 will add a typed `site` configuration and the `demo`, `concept`, and `production` modes. Production-only systems will sit behind server boundaries: UI → validated lead payload → `/api/lead` → server-only webhook adapter. Analytics, structured data, indexing, and lead delivery are disabled for demo and concept modes.

Routes will include home, project index/detail, service index/detail, studio, process, inquiry, selected genuine service-area pages, legal pages, 404, and a future production lead handler. Every component must consume client data through configuration/data boundaries rather than hardcoded brand information.
