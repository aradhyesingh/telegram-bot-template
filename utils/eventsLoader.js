/**
 * @dev Telegram Bot Setup Module. Main bot is setup and initialized.
 *
 * Initializes the Telegram bot with the Telegraf framework, loading and registering command handlers
 * dynamically from the 'commands' directory. This setup facilitates easy management and scalability
 * of bot commands.
 *
 * @module bot
 */
async function eventsLoader(bot, events) {
  // Dynamically register event handlers
  Object.entries(events).forEach(([eventType, handlers]) => {
    handlers.forEach((handler) => {
      bot.on(eventType, async (ctx) => {
        await handler.execute(ctx);
      });
    });
  });
}

module.exports = eventsLoader;
