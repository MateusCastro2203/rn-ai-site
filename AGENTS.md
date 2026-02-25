# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15** static landing page for the `@rn-ai-optimize` NPM package. It has no backend, no database, and no external service dependencies.

### Services

| Service | Command | Port |
|---|---|---|
| Next.js dev server (Turbopack) | `npm run dev` | 3000 |

### Standard commands

See `package.json` scripts and `README.md` for full details:

- **Dev server:** `npm run dev` (uses Turbopack)
- **Lint:** `npm run lint`
- **Build:** `npm run build`

### Notes

- No `.env` file or secrets are required.
- The site supports English/Portuguese via a built-in translation context (no i18n library).
- ESLint produces several warnings (unused imports in `header.tsx`, `<img>` vs `<Image />`) but zero errors; these are pre-existing and safe to ignore.
