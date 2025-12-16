# Base44 App

Local development
-----------------
- Prerequisites: Node 18+ and npm 9+ installed.
- Install deps: `npm install`
- Configure environment: copy `.env.example` to `.env.local` and fill in your Base44 values.
- Start dev server: `npm run dev` (Vite will print the local URL, default http://localhost:5173).
- Optional checks: `npm run lint`, `npm run typecheck`, `npm run build` + `npm run preview`.

Environment variables
---------------------
- `VITE_BASE44_APP_ID` – your Base44 app id.
- `VITE_BASE44_BACKEND_URL` – Base44 backend URL for the app.
- `BASE44_LEGACY_SDK_IMPORTS` – set to `true` only if you still rely on the legacy Base44 SDK import paths (defaults to off).
