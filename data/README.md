Mock tools data

- File: `data/tools.json`
- API: `GET /api/tools`
  - Query params:
    - `limit` (number) — limit number of items
    - `featured=true` — return only featured tools
    - `latest=true` — return only latest tools
    - `top=true` — return only top tools
    - `slug=<slug>` — return a single tool by slug
    - `q=<text>` — simple search over name/description

Usage notes

- Components were updated to fetch from `/api/tools` instead of using local arrays.
- To add or edit tools, update `data/tools.json` and the API will serve the changes.
- For dynamic pages, visit `/tools/<slug>` (e.g. `/tools/chatgpt`).