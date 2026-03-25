const chatLog = document.getElementById('chat-log');
const composer = document.getElementById('composer');
const input = document.getElementById('message-input');
const connectionPill = document.getElementById('connection-pill');

const API_URL = '/api/agent';

function addMessage(role, text) {
  const row = document.createElement('article');
  row.className = `message ${role}`;
  row.textContent = text;
  chatLog.appendChild(row);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function setConnectionState() {
  const online = navigator.onLine;
  connectionPill.textContent = online ? 'online' : 'offline';
  connectionPill.style.color = online ? '#86efac' : '#fca5a5';
}

async function askAgent(prompt) {
  // Replace with your actual backend endpoint.
  // Expected shape: { reply: string }
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  if (!response.ok) {
    throw new Error(`Agent request failed with HTTP ${response.status}`);
  }

  const data = await response.json();
  if (!data.reply) {
    throw new Error('Invalid response: missing reply field');
  }

  return data.reply;
}

composer.addEventListener('submit', async (event) => {
  event.preventDefault();
  const prompt = input.value.trim();
  if (!prompt) return;

  addMessage('user', prompt);
  input.value = '';

  try {
    const reply = await askAgent(prompt);
    addMessage('agent', reply);
  } catch (error) {
    addMessage('agent', `error: ${error.message}`);
  }
});

window.addEventListener('online', setConnectionState);
window.addEventListener('offline', setConnectionState);
setConnectionState();

addMessage('agent', 'Agent is ready. Wire /api/agent to your backend model runtime.');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.error('service worker registration failed', error);
  });
}
