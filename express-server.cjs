require("dotenv").config({ path: __dirname + "/.env" });
console.log("Loaded OpenAI Key:", process.env.OPENAI_API_KEY?.slice(0, 6), "...");

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      console.error("OpenAI API Error:", data);
      return res.status(500).json({ error: "Unexpected OpenAI response" });
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ error: "Failed to get response from OpenAI." });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`));
