import { config } from "dotenv";
config();

import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';

const openai = new OpenAI({
  apiKey: process.env.API_KEY
});

// Initialize Express and allow CORS
const app = express();
app.use(cors());
app.use(express.json());

// Initialize the conversation history with a strict system message
const conversationHistory = [
  { 
    role: "system", 
    content: "You are a virtual BASKETBALL coach. Only ask questions about the user's basketball skills, on-court techniques, fitness, basketball IQ, motivation, or topics in 'Coach's Corner'. Avoid offering specific tips, drills, or recommendations until after the user has answered at least 30 questions. Focus on gathering information through questions only, one at a time, and always wait for the user's response before asking the next question. Ensure all questions remain strictly within the realm of basketball." 
  }
];

// Counter to track the number of questions asked
let questionCounter = 0;

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  // If userMessage is empty, start the conversation without adding user input
  if (!userMessage) {
    try {
      // Make the initial API call to OpenAI with just the system message for a greeting
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: conversationHistory,
      });
      const assistantMessage = response.choices[0].message.content;

      // Only send the initial message, without incrementing questionCounter or adding to conversation history
      return res.json({ reply: assistantMessage });
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      return res.status(500).send({ error: "Failed to communicate with OpenAI API" });
    }
  }

  // Handle non-empty user messages for ongoing conversation
  conversationHistory.push({ role: "user", content: userMessage });
  questionCounter++;

  try {
    // If 30 questions have been asked, instruct the AI to give recommendations
    if (questionCounter >= 30) {
      conversationHistory.push({
        role: "system",
        content: "You've asked 30 questions. Now, instead of asking another question, provide the user with personalized tips and recommendations based on the conversation so far."
      });
      questionCounter = 0; // Reset the counter for the next round
    }

    // Make the API call with the updated conversation history
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: conversationHistory,
    });

    const assistantMessage = response.choices[0].message.content;
    conversationHistory.push({ role: "assistant", content: assistantMessage });

    // Send response back to the frontend
    res.json({ reply: assistantMessage });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).send({ error: "Failed to communicate with OpenAI API" });
  }
});

// Start the Express server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
