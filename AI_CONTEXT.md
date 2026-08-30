# AI CONTEXT — Tự Do App Starter

## 1. Project overview

`tudo-app-starter` is the reusable code foundation governed by TPES v1.0. It is not a Product-specific application.

## 2. Current implementation baseline

Current package: **STARTER-P01 — Repository + Documentation + App Skeleton**.

Expected P01 implementation contains TanStack Start + React + TypeScript skeleton and project documentation only.

Database connection, migration execution, Auth, Authorization, `/setup`, and Product domains are NOT part of P01.

## 3. Approved architecture

- React + TanStack Start Full-Stack
- Node runtime
- PostgreSQL
- `pg` + thin parameterized SQL layer
- Native Auth default
- Explicit Migration Step

Do not replace this architecture without an approved architecture decision.

## 4. Source-of-truth hierarchy

- Product Master / Approved Product Decision → Product truth.
- Approved System Design / Implementation Contract → Architecture truth.
- GitHub → implementation truth.
- This file → routing/compression only.

If code conflicts with an approved contract, do not assume the code is correct. Identify the inconsistency.

## 5. Repository map

- `src/` — TanStack Start UI/routes/router.
- `server/` — future server-only foundation and services.
- `database/migrations/` — future forward-only migrations.
- `database/seeds/` — future separate seed data.
- `scripts/db/` — future DB operational scripts.
- `tests/` — future QA foundation.
- `docs/system-design/` — approved system designs.
- `docs/implementation-contracts/` — approved implementation contracts.
- `docs/decisions/` — important architecture decisions.
- `docs/deployment/` — deployment runbooks/contracts.

## 6. AI read policy

START NARROW → EXPAND ONLY WITH EVIDENCE.

For a task, read this file first, then the specific approved contract and implementation area. Do not read the full repository by default.

## 7. Prohibited Starter content

Do not add Product-specific roles/scopes, Employee/Manager/Organization models, Learning, News, Workforce, Compensation, CEN/ONE terminology or navigation, ORM by default, managed Auth by default, microservices, event bus, CQRS, or Kubernetes.

## 8. Current QA baseline

For P01: dependency install, dev-start sanity, TypeScript check, production build, placeholder-only ENV, secret check, required docs check, and Product-domain boundary check.

## 9. Current PASS checkpoint

P01 is not PASS/CLOSED until its implementation exists in GitHub and P01 QA is confirmed.

## 10. Next route

After P01 PASS/CLOSED → `STARTER-P02 — Environment + PostgreSQL Connection`.
