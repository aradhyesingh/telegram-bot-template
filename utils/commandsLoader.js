/**
 * @dev Telegram Bot Setup Module. Main bot is setup and initialized.
 *
 * Initializes the Telegram bot with the Telegraf framework, loading and registering command handlers
 * dynamically from the 'commands' directory. This setup facilitates easy management and scalability
 * of bot commands.
 *
 * @module bot
 */
async function commandsLoader(bot, commands) {
  // Dynamically register command handlers
  Object.values(commands).forEach((command) => {
    const aliases = Array.isArray(command.aliases)
      ? command.aliases.filter((alias) => typeof alias === "string")
      : [];
    if (typeof command.name === "string") {
      bot.command([command.name, ...aliases], async (ctx) => {
        await command.execute(ctx, commands);
      });
    } else {
      console.warn(
        `Command name is not a string for the command: ${JSON.stringify(
          command
        )}`
      );
    }
  });
}

module.exports = commandsLoader;
