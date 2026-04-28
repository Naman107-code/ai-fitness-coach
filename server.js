require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint for Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { system, messages } = req.body;

    // Check if API key is configured
    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'your_api_key_here') {
      return res.status(500).json({ error: { message: 'Groq API key is missing or not configured in .env file' } });
    }

    // Format messages for Groq (OpenAI-compatible)
    const formattedMessages = [];
    if (system) {
      formattedMessages.push({ role: 'system', content: system });
    }
    formattedMessages.push(...messages);

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Using high-quality 70B model to reduce hallucination
        messages: formattedMessages,
        temperature: 0.1, // Low temperature to reduce hallucination
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq API Error:', errorData);
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: { message: 'Internal server error while communicating with AI service' } });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
