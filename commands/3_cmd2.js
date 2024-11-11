/**
 * Command 2 module.
 */
module.exports = {
    /**
     * @property {string} name - The name of the command.
     */
    name: "cmd2",
  
    /**
     * @property {string} description - A brief description of what the command does.
     */
    description: "command description text",
  
    /**
     * @property {Array<String>} aliases - A list of alias for the command.
     */
    aliases: [],
  
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
      // Provide a response for cmd2
      ctx.reply(`Replace with message that the bot replies with when /cmd2 is called`, {
      reply_to_message_id: ctx.message.message_id
  });},
  };
  