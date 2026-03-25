# Agent Lite PWA (Teams-style starting point)

A lightweight Progressive Web App chat shell with a built-in local demo backend.

## Quick run (works end-to-end)

```bash
node server.js
```

Open: `http://localhost:4173`

This starts:
- static file hosting for the PWA UI
- `POST /api/agent` demo endpoint (echo response)

## Test the API directly

```bash
curl -X POST http://localhost:4173/api/agent \
  -H 'Content-Type: application/json' \
  -d '{"prompt":"hello"}'
```

Expected response:

```json
{"reply":"Echo agent: hello"}
```

## How it is wired

- `index.html` is the UI shell (header, chat log, composer).
- `app.js` handles input, network request to `/api/agent`, and rendering messages.
- `server.js` serves static files and handles `POST /api/agent`.
- `sw.js` caches core static files so the shell works offline.
- `manifest.webmanifest` allows install-as-app behavior.

## Replace demo agent with real model

In `server.js`, replace the echo response block with your model call and return JSON:

```json
{ "reply": "<model output>" }
```
