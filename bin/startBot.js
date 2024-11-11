#!/usr/bin/env node

/**
 * Bot Execution Script.
 *
 * This script imports the configured Telegram bot from the src/bot module,
 * launches it, and sets up handling for graceful shutdown signals.
 */
const bot = require("../bot");

/**
 * Asynchronously starts the Telegram bot.
 */
async function startBot() {
  try {
    await bot.launch();
    console.log("Bot started successfully.");
  } catch (err) {
    console.error("Failed to start the bot:", err);
  }
}

startBot();

/**
 * Gracefully stops the bot when the SIGINT signal is received.
 */
process.once("SIGINT", async () => {
  await bot.stop("SIGINT");
  console.log("Bot stopped gracefully.");
});

/**
 * Gracefully stops the bot when the SIGTERM signal is received.
 */
process.once("SIGTERM", async () => {
  await bot.stop("SIGTERM");
  console.log("Bot stopped gracefully.");
});
