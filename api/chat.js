app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  console.log("🔹 Messages received from frontend:", messages);

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

    console.log("🔹 OpenAI raw response:", JSON.stringify(data, null, 2)); // ⭐ Add this line

    if (!data.choices || !data.choices[0]) {
      console.error("❌ OpenAI API Error:", data);
      return res.status(500).json({ error: "Unexpected OpenAI response" });
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error("❌ Fetch to OpenAI failed:", err);
    res.status(500).json({ error: "Failed to get response from OpenAI." });
  }
});
