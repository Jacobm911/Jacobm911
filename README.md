# Agent Lite PWA Chat)
Building AI course project

## Summary
DOM Management: Captures user input from a form (composer), appends user and agent messages dynamically to a chat log, and auto-scrolls to the newest message.

Network Status Tracking: Monitors and displays whether the user is online or offline using browser events and updates a visual status indicator (connection-pill).

API Communication: Sends user prompts via an asynchronous POST request to a backend endpoint (/api/agent) and handles responses or errors.

Service Worker Registration: Registers a service worker (/sw.js) to support offline capabilities or caching.
