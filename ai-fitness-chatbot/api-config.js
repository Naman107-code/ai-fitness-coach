// =============================================
// AI Fitness Chatbot — api-config.js
// Reference for API configuration
// =============================================

// To run this chatbot independently (outside Claude artifacts),
// add your Anthropic API key to the fetch headers in index.html

// Find this block in index.html:
//
//   const res = await fetch('https://api.anthropic.com/v1/messages', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ ... })
//   });
//
// Replace headers with:
//
//   headers: {
//     'Content-Type': 'application/json',
//     'x-api-key': 'YOUR_ANTHROPIC_API_KEY_HERE',
//     'anthropic-version': '2023-06-01',
//     'anthropic-dangerous-direct-browser-access': 'true'
//   },

// ⚠️  WARNING: Never expose your API key in production frontend code.
//     For production, route API calls through your own backend server.

// Get your API key at: https://console.anthropic.com
// API Docs: https://docs.anthropic.com

// Model used: claude-sonnet-4-20250514
// Max tokens: 1000 (adjustable)
// System prompt: Fitness coaching specialist
