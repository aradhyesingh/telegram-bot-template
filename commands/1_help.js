/**
 * Help command module for the Telegram bot.
 *
 * Exports the help command, providing users with a comprehensive list of all available commands,
 * their descriptions, and any aliases. This enhances user experience by offering quick access to
 * command information.
 */
module.exports = {
  /**
   * @property {string} name - The name of the command.
   */
  name: "helpmenu",

  /**
   * @property {string} description - A brief description of what the command does.
   */
  description: "Show this help menu",

  /**
   * @property {Array<String>} aliases - A list of alias for the command.
   */
  aliases: ["commands"],

  /**
   * @property {Array<Object>} params - The named parameters accepted by the command.
   * Each parameter object should have properties: name, description, and aliases.
   */
  params: [],

  /**
   * @property {Array<Object>} flags - The flags accepted by the command.
   * Each flag object should have properties: name, description, and aliases.
   */
  flags: [],

  /**
   * Executes the help command.
   *
   * Constructs and sends a dynamically generated message listing all available commands,
   * their descriptions, and aliases, if any. This function iterates through the commands
   * object, extracting relevant information for each command to include in the help message.
   *
   * @param {Telegraf.Context} ctx - The Telegraf context object for the command, providing access to the message and chat details.
   * @param {Object} commands - An object containing all available command modules, keyed by command name.
   */
  async execute(ctx, commands) {
    let helpMessage = "Here are the commands you can use:\n";
    Object.values(commands).forEach((cmd) => {
      // Format aliases, if any, for display
      const aliasesText =
        cmd.aliases.length > 0 ? `(aliases: /${cmd.aliases.join(", /")})` : "";
      helpMessage += `/${cmd.name} ${aliasesText} - ${cmd.description}\n`;

      // Include usage and examples, if available
      if (cmd.usage) helpMessage += `Usage: ${cmd.usage}\n`;
      if (cmd.examples && cmd.examples.length > 0) {
        helpMessage += `Examples:\n${cmd.examples.join("\n")}\n`;
      }

      // Format and include options, if any
      if (cmd.options && cmd.options.length > 0) {
        const optionsText = cmd.options
          .map(
            (option) => `${option.alias || option.name} - ${option.description}`
          )
          .join("\n");
        helpMessage += `Options:\n${optionsText}\n`;
      }
    });

    await ctx.reply(helpMessage, {
      reply_to_message_id: ctx.message.message_id,
    });
  },
};
