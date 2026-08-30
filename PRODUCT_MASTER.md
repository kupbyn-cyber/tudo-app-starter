# PRODUCT MASTER — Tự Do App Starter

> This file describes the reusable Starter product itself, not any future Product cloned from it.

## 1. Product purpose

Provide a small, portable, production-compatible baseline so a new internal Product does not begin from an empty repository.

## 2. Target user

Internal Product Owner + ChatGPT + implementation agent building a new internal application.

## 3. Core workflow

`Clone Starter → replace/fill project documents → configure Product environment → bootstrap Foundation → build First Vertical Slice`.

## 4. Locked foundation binding

- React + TanStack Start Full-Stack
- Node runtime
- PostgreSQL
- `pg` + thin parameterized SQL layer
- Native Auth default
- Explicit Migration Step

## 5. Starter scope

The finished Starter will provide database, migration, seed, Native Auth, First Admin setup, authorization extension point, minimal app shell, QA bootstrap, and deployment foundation.

## 6. Product-specific boundary

The Starter does not define Product-specific roles/scopes, terminology, domain entities, business workflows, navigation, Learning, News, Workforce, Compensation, or organization hierarchy.

## 7. Current approved implementation baseline

STARTER-P01: application/documentation skeleton only.

## 8. Next approved package

STARTER-P02 — Environment + PostgreSQL Connection after P01 PASS/CLOSED.
