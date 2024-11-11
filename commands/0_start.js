/**
 * Start command module.
 *
 * This module exports the start command for the Telegram bot, which
 * sends a welcome message to the user and instructs them on how to
 * access the list of available commands.
 */
module.exports = {
    /**
     * @property {string} name - The name of the command.
     */
    name: "begin",
  
    /**
     * @property {string} description - A brief description of what the command does.
     */
    description: "Get started with the bot",
  
    /**
     * @property {Array<String>} aliases - A list of alias for the command.
     */
    aliases: ["go","start"],
  
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
     * Executes the command.
     *
     * @param {Telegraf.Context} ctx - The Telegraf context object for the command.
     */
    async execute(ctx) {
      // Check if the bot is in a group or in a personal chat
      if (ctx.chat.type === 'private') {
          // If in a personal chat, reply with a generic welcome message
          await ctx.reply("Hello! Type /helpmenu to see available commands.");
      } else {
          // If in a group, retrieve the group name and reply with a group-specific welcome message
          const groupName = ctx.chat.title;
          const msg = `Welcome to ${groupName}! Type /helpmenu to see available commands.`;
          await ctx.reply(msg, {
              reply_to_message_id: ctx.message.message_id,
          });
      }
  }
  
  };