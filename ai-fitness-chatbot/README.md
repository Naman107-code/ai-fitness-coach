# AI Fitness Chatbot

A fully functional AI-powered fitness chatbot with a ChatGPT-style interface, built as a single HTML file with a live Anthropic API backend.

## Features

- **Login Page** — Email/password login with Google sign-in option
- **Sidebar** — New chat, navigation, chat history, user profile
- **Chat Interface** — Welcome screen, quick-start prompts, message history
- **Live AI Backend** — Powered by Claude (claude-sonnet-4-20250514) via Anthropic API
- **Markdown Rendering** — Bold, lists, headers, code blocks, blockquotes
- **Copy & Regenerate** — On every AI response
- **Sample Conversations** — 7 pre-loaded fitness chat examples

## Project Structure

```
ai-fitness-chatbot/
├── index.html       ← Main app (login + chat UI + API backend)
├── README.md        ← This file
└── assets/
    └── (no external assets required — fully self-contained)
```

## How to Run

### Option 1 — Open directly in browser
Just double-click `index.html` — no server needed.

### Option 2 — Local server (recommended)
```bash
# Python
python -m http.server 3000

# Node.js (npx)
npx serve .
```
Then open http://localhost:3000

## Login
Use any email and password to log in (e.g. `user@fitness.ai` / `password123`).  
Authentication is local/demo only — no real auth backend.

## API Configuration

The chatbot calls the **Anthropic API** directly from the browser.

> **Note:** The API key is handled by the claude.ai environment when running inside Claude artifacts. To deploy this independently, add your API key:

In `index.html`, find the `fetch` call and add the header:
```javascript
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_ANTHROPIC_API_KEY',
  'anthropic-version': '2023-06-01',
  'anthropic-dangerous-direct-browser-access': 'true'
}
```

Get your API key at: https://console.anthropic.com

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Fonts:** Sora + DM Mono (Google Fonts)
- **AI Model:** claude-sonnet-4-20250514 (Anthropic)
- **No build step** — pure static file

## Customization

- Change the system prompt in the `SYSTEM` constant at the top of the `<script>` tag
- Add more quick-start chips in the `.quick-grid` section
- Modify colors via CSS variables in `:root`

## License
MIT — free to use and modify.
