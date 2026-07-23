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

"## Summary"
```
#### Summary 
DOM Management: Captures user input from a form (composer), appends user and agent messages dynamically to a chat log, and auto-scrolls to the newest message.

Network Status Tracking: Monitors and displays whether the user is online or offline using browser events and updates a visual status indicator (connection-pill).

API Communication: Sends user prompts via an asynchronous POST request to a backend endpoint (/api/agent) and handles responses or errors.

Service Worker Registration: Registers a service worker (/sw.js) to support offline capabilities or caching.
