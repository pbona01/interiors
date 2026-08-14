# BICS — BENE INTERIOR CLIENT SYSTEM

A reusable, Vercel-ready client-acquisition system for premium US residential interior-design studios. The starter is intentionally lightweight: Next.js, TypeScript, Tailwind CSS, ESLint, and no database or CRM lock-in.

## Development

Requires Node.js 20.9+ and pnpm 11.

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

## Site modes

Phase 2 will introduce `demo`, `concept`, and `production` modes. Demo and concept modes are noindex, analytics-free, and simulate form submission. Production will use server-only environment variables for lead delivery.

## Documentation

- [Product vision](docs/PRODUCT_VISION.md)
- [Design research](docs/DESIGN_RESEARCH.md)
- [Design direction](docs/DESIGN_DIRECTION.md)
- [Architecture](docs/ARCHITECTURE.md)

Further implementation, client-customization, CRM, analytics, deployment, and handover documentation belongs to later phases.
