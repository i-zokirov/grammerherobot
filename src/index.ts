import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { fixGrammar } from "./openai";
import { botToken } from "./variables";

const bot = new Telegraf(botToken!);
const app = express();

bot.start((ctx) => {
    console.log(ctx.from);
    ctx.reply("Welcome");
});

bot.on(message("text"), async (ctx) => {
    const userInput = ctx.message.text;
    try {
        const { choices, usage } = await fixGrammar(userInput);
        if (choices[0].text) ctx.reply(choices[0].text);
    } catch (error) {
        console.error(error);
    }
});

bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port", port));
