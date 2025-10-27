Purpose
-------
This file gives concise, repository-specific guidance for AI coding agents working in this monorepo. Focus your changes on the specific demo you're asked to modify (for example `demo/react-vite`) and prefer small, local edits unless the task explicitly requires cross-demo work.

Quick repo overview
-------------------
- Root `demo/` contains multiple framework implementations: `react-vite` (modern, TypeScript + Vite), `react` (legacy CRA/webpack), `angular`, `vue@2.x`, `vue@3`. Each demo is a standalone app with its own `package.json`.
- `demo/shared/` contains shared domain models, API config and mock/API code used across demos. Many demos rely on this folder. Demos import those via relative paths, starting with `@shared/`

Primary conventions & patterns
----------------------------
- Scope changes to the target demo (e.g. `demo/react-vite`) unless asked otherwise. The toolchains differ (Vite/TS vs CRA/webpack vs Angular), so avoid cross-app fixes that assume a single build system.
- `react-vite` is TypeScript-first. Use `tsc -b` before introducing type-sensitive build changes; `build:feature` runs `tsc -b && vite build`.
<!-- - State & data layers: `react-vite` uses a mix of Redux (thunk + reselect), React Query (`@tanstack/react-query`), `ahooks`, and sometimes `zustand`. You'll see `src/redux/actions/*`, `src/hooks/*`, and `src/stores/*`. -->
<!-- - API surface: reusable API modules live under `demo/shared/api/` (and mock data under `demo/shared/mock/`). Demos import those via relative paths, starting with `@shared/` -->

Developer workflows (how-to)
---------------------------
- Work in PowerShell on Windows. Typical commands for `react-vite`:
  - cd demo\react-vite
  - npm ci      # installs, triggers postinstall which installs shared deps
  - npm run dev # start Vite dev server (HMR)
  - npm run build
  - npm run type-check
  - npm run lint
  - npm run preview

Tests, linting and type-checks
-----------------------------
- Linting for `react-vite` is available via `npm run lint` (eslint configured); type checks use `tsc -b`.

Common pitfalls and safety checks
-------------------------------
- Don't apply Vite/TS solutions to the CRA or Angular demos. They have different config files and build targets.
- Many imports are relative; moving files or renaming folders will break multiple demos. When refactoring, update all affected demos.
- The `postinstall` in `demo/react-vite/package.json` expects `demo/shared` to be reachable at `../shared` — keep that relative layout intact.
- Never add comments.
- Never use hardcoded string literals.
- Never use multiple or nested ternary operators.
- Never change the underline business logic when refactoring
- Never add safe guard unless required clearly when refactoring
- Always try to generate code in MVP(Minimum Viable Product)

Files to inspect for context/examples
-----------------------------------
- `.cursor/rules/reuse-shared-folder.mdc` (project guidance to reuse shared code)

If something's ambiguous
------------------------
- Ask which demo is the target. If not specified, default to `demo/react-vite` (modern TypeScript app).
- Ask whether cross-demo changes are acceptable before editing other demos.

Request for feedback
--------------------
If any of the above assumptions are incorrect (target demo, local install flow, or how `shared` should be managed), tell me and I'll update this guidance.
