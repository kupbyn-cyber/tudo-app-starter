# Tự Do App Starter

Reusable internal-app foundation governed by **Tự Do Product Engineering System (TPES) v1.0**.

## Current status

**STARTER-P01 — Repository + Documentation + App Skeleton**

This repository currently contains only the application/documentation skeleton. PostgreSQL connectivity, migrations, Auth, Authorization, QA bootstrap, and deployment foundation are added by later STARTER packages.

Do **not** call `TỰ DO APP STARTER v1.0 = READY` until the Golden Foundation Acceptance flow passes.

## Approved architecture

- React
- TanStack Start Full-Stack
- Node runtime
- PostgreSQL
- `pg` + thin parameterized SQL layer (from STARTER-P02 onward)
- Native Auth (later package)
- Explicit Migration Step (later package)

## Local commands

Requirements: Node.js 22.12+ and npm.

```bash
npm install
npm run dev
npm run build
```

The starter intentionally has no real `.env`. Use `.env.example` only as a placeholder map.

## Source of Truth

1. Approved Product Decision / Product Master = Product truth.
2. Approved System Design / Implementation Contract = Architecture truth.
3. GitHub = implementation truth.
4. `AI_CONTEXT.md` = routing/compression; it does not replace the contracts above.

TPES documentation repository: `kupbyn-cyber/tudo-product-engineering`.

## P01 boundary

Not implemented in P01:

- PostgreSQL connection or schema
- migrations or seed execution
- Auth / session
- First Admin `/setup`
- Authorization
- Product navigation or Product-specific domains
- ORM or managed Auth provider
