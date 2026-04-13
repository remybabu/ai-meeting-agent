import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";
dotenv.config();
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



const app = express();
app.use(cors());   
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const { text } = req.body;

 const prompt = `
You are a product manager assistant.

Analyze the meeting notes and return ONLY valid JSON in this format:

{
  "summary": "...",
  "action_items": ["..."],
  "decisions": ["..."]
}

Meeting Notes:
${text}
`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

   const output = response.choices[0].message.content;

// Convert string → JSON
const parsedOutput = JSON.parse(output);

res.json(parsedOutput);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI request failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});