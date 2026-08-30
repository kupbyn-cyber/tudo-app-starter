# PROJECT START — Tự Do App Starter

## 1. Project identity

- Project name: Tự Do App Starter
- Repository: `kupbyn-cyber/tudo-app-starter`
- Purpose: reusable production-compatible foundation for future internal products.
- Governing system: Tự Do Product Engineering System v1.0.

## 2. Main outcome

A new Product should eventually be able to:

`Clone → fill project docs → configure ENV → empty PostgreSQL → migrate → seed → app start → /setup → First Admin → login → protected app → First Vertical Slice`.

## 3. Approved production-compatible foundation

- React + TanStack Start Full-Stack
- Node
- PostgreSQL
- `pg` + thin parameterized SQL layer
- Native Auth default
- Explicit Migration Step

Replaceable adapters may change only when a Product's approved Production Target requires it.

## 4. Current implementation stage

STARTER-P01 only: repository/documentation/application skeleton.

## 5. Explicit non-goals for Starter

Do not prebuild Product-specific roles, organization hierarchy, Learning, News, Workforce, Compensation, CEN/ONE navigation, or other business workflows.

## 6. Next checkpoint

After P01 PASS: `STARTER-P02 — Environment + PostgreSQL Connection`.
