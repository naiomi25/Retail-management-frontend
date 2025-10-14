### Quick context

- This repository is the frontend for the Web Data Management app (Vite + React). The backend lives in the sibling folder `web-gestion-datos-back` and exposes a JWT-protected REST API at `/api` (default `http://127.0.0.1:5000/api`).

### What an AI coding agent should know up-front

- Auth flow: frontend calls `POST /api/users/login` (see `src/api/auth.js`). Successful responses return JSON with `access_token`. The frontend must persist the token in `localStorage` under the key `token` so `src/api/client.js` can read it and add `Authorization: Bearer <token>` for protected requests.
- API client: `src/api/client.js` centralizes fetch behavior and reads `localStorage.getItem('token')`. Edit this file to change header behavior or error handling.
- Date-range entries: components call `GET /api/entries/range/?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD`. Example usage in `src/components/FetchData.jsx` which calls `apiUser('/entries/range/?start_date=...&end_date=...')` and expects a JSON body with `{ entries, total_entries, averages_by_shift, sums_by_shift }`.

### Project layout (important files)

- `src/api/client.js` — single place that builds requests, sets headers, parses JSON and throws on non-2xx. Modify this to change auth header format or error parsing.
- `src/api/auth.js` — small wrappers for `loginUser` and `registerUser` that call `apiUser`.
- `src/pages/Login.jsx` and `src/pages/Register.jsx` — UI that must persist `access_token` to `localStorage` after successful auth. Login logic should call `loginUser(email, password)` and then `localStorage.setItem('token', access_token)`.
- `src/components/FetchData.jsx` — example consumer of `apiUser` for protected data (entries). Use this as a pattern for date filtering and data-shape expectations.
- `src/services/*` — currently mostly empty; preferred place for higher-level service functions (e.g., `entriesService.fetchRange(start, end)`) if you refactor.
- Env/config: `src/api/config.js` uses `import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api'`.

### How to run and test locally (developer workflows)

- Start backend (from repo root `web-gestion-datos-back`):

  - Create and activate Python venv, install `requirements.txt`, set `.env` with `DATABASE_URL` and `JWT_SECRET_KEY`, then run:

    ```powershell
    .venv\Scripts\activate; pip install -r requirements.txt; flask --app app.py run
    ```

- Start frontend (from `Web-gestion-datos-front`):

  ```powershell
  pnpm install   # or npm install
  pnpm dev       # or npm run dev
  ```

- Test the flow manually:
  1. Register or login via UI (`/register` and `/login`).
  2. Inspect `localStorage.token` — it must contain the JWT.
  3. Trigger the entries fetch (Dashboard) and inspect the network call. The request must include header `Authorization: Bearer <token>`.

### Common pitfalls and patterns found in repo

- Token persistence: some login/register code stored tokens correctly (`Register.jsx` uses `localStorage.setItem("token", response.access_token)`), but earlier versions of `Login.jsx` didn't persist the token — causing 401/403 on protected endpoints. Always persist to `localStorage` (key `token`) when handling auth responses.
- Query URL formatting: components sometimes include a trailing slash before the query string (e.g., `/entries/range/?start_date=...`). This is accepted by the backend README, but watch routing on backend changes; prefer `/entries/range?start_date=...` when refactoring the client.
- API client error handling: `src/api/client.js` throws with `new Error(errorData.message || 'Error en la petición')`. When adding features, surface error fields consistently (e.g., `error.message` or `error.msn`) and avoid swallowing response JSON.

### Examples (copy/paste-friendly) — do these exactly

- Persist token after login (Login.jsx):

  - After receiving `{ access_token }` call `localStorage.setItem('token', access_token)` before navigating.

- Use apiUser to fetch entries (FetchData.jsx pattern):

  - const data = await apiUser(`/entries/range/?start_date=${start}&end_date=${end}`)
  - Expect `data.entries` and `data.total_entries`.

### If you change auth behavior

- Update `src/api/client.js` to match: it expects a raw JWT in `localStorage.token` and builds `Authorization: Bearer ${token}`. If backend switches to cookies or different header name, update `client.js` and all login/register pages to set/clear the correct storage.

### Where to make durable changes

- Centralize fetch behaviors in `src/api/client.js`. Small UI changes belong in pages/components. If you need to add typed service layers, add `src/services/entries.js` and use it from components.

### Useful tests and checks

- Manual checks: verify `localStorage.token`, inspect network headers, and confirm backend responses match the expected JSON shape.
- Unit/e2e: no frontend test harness is configured; prefer quick manual verification when changing auth plumbing.

---

If anything here is unclear (for example, the backend changed the token field name or expects cookies), tell me which file or endpoint to inspect and I will update these instructions.
