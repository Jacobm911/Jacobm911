# Agent Lite PWA (Teams-style starting point)

A lightweight Progressive Web App chat shell that can connect to your own agent backend.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## How it is wired

- `index.html` is the UI shell (header, chat log, composer).
- `app.js` handles input, network request to `/api/agent`, and rendering messages.
- `sw.js` caches core static files so the shell works offline.
- `manifest.webmanifest` allows install-as-app behavior.

## Backend contract

`POST /api/agent` with JSON body:

```json
{ "prompt": "hello" }
```

Response JSON:

```json
{ "reply": "hi" }
```

## Next steps

1. Add auth token flow before calling `/api/agent`.
2. Add streaming replies (SSE or WebSocket).
3. Add conversation persistence (IndexedDB + server sync).
