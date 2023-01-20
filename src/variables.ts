import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") dotenv.config();

export const botToken = process.env.BOT_TOKEN;
export const openaiApiKey = process.env.OPENAI_KEY;
