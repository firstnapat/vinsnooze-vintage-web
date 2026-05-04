# Context: Initial Scaffold + Hello Loop

**Date**: 2026-05-04
**Session focus**: Initialize the project (NestJS backend + Vite/React frontend) and prove an end-to-end "vinsnooze store" hello loop.

## Current Project State

```
vinsnooze-vintage-web/
├── backend-vinsnooze/    NestJS 11 + TS  (port 3000)
├── frontend-vinsnooze/   Vite + React 19 + TS  (port 5173)
├── context/              (this folder)
├── claude.md             generic AI workflow template
└── .gitignore
```

## Git State

- Branch: `main`
- Last commit: `fd26847 chore: scaffold NestJS backend and Vite + React frontend`
- **Uncommitted changes** (the hello-loop work — not yet committed):
  - Backend: `app.controller.ts`, `app.service.ts`, `app.controller.spec.ts`, `main.ts`
  - Frontend: `App.tsx`, `App.css`, `index.css`, `index.html`
  - Deleted: Vite/React template assets (logos, hero image, icons.svg)

## What Was Built

**Backend** (`backend-vinsnooze/`)
- `GET /` → `{ "message": "vinsnooze store" }` (changed from default `Hello World!`)
- CORS enabled (`app.enableCors()`) so frontend can call from `:5173`
- Unit test updated to assert new shape

**Frontend** (`frontend-vinsnooze/`)
- `App.tsx`: minimal page, `useEffect` fetches `VITE_API_URL` (default `http://localhost:3000`), renders `<h1>{message}</h1>`
- Fallback when backend offline: `"vinsnooze store (offline)"`
- `App.css`: minimal — centered grid, large clamp() font
- `index.css`: stripped Vite default down to a basic reset + system font + light/dark color-scheme
- `index.html` title: `vinsnooze store`
- Default Vite/React template assets deleted

## Key Decisions

1. **Folder naming**: `backend-vinsnooze` / `frontend-vinsnooze` to match git repo names
2. **Architecture**: separate folders, NOT a monorepo — deploy independently, dev start independently (no workspace tooling)
3. **Phase 1 deploy plan**: frontend → Vercel (root = `frontend-vinsnooze/`, framework auto-detect Vite). Backend will deploy separately later (Render/Railway/Fly).
4. **API contract for env**: `VITE_API_URL` baked at build time. Dev fallback hardcoded to `http://localhost:3000` so no `.env` file needed locally.
5. **Backend response shape**: returns JSON `{ message }` instead of plain string — easier to extend later.

## Verified

- `curl localhost:3000/` → `{"message":"vinsnooze store"}` ✓
- `curl localhost:5173/` → HTML with `<title>vinsnooze store</title>` ✓
- Both dev servers booted cleanly, no errors

## How to Run (User runs themselves)

```bash
# Terminal 1
cd backend-vinsnooze && npm run start:dev    # → :3000

# Terminal 2
cd frontend-vinsnooze && npm run dev          # → :5173
```

Start backend first so frontend doesn't show offline fallback.

## Next Steps (Open)

1. **Commit the hello-loop work** — uncommitted now. Suggested message: `feat: end-to-end hello — frontend fetches "vinsnooze store" from backend`
2. **Visual design direction** — vibe not decided yet (vintage poster? archive grid? minimal monochrome?). Need user input or reference site (banditrunning.com was mentioned but not browsed).
3. **First real feature** — likely candidates: header/nav, product grid, landing hero. All blocked on design direction.
4. **Backend hosting choice** — phase 2 decision (Render vs Railway vs Fly), not urgent until frontend has real API needs.

## Notes / Gotchas

- NestJS `--skip-git` flag (used during scaffold) suppresses `.gitignore` creation — had to write one manually.
- Vercel needs `VITE_API_URL` env var set in project settings (build-time injection); without it, the prod build will hardcode the localhost fallback.
- claude.md in repo root is a generic template, not project-specific. Sections like Architecture/Env Variables are still placeholders.
