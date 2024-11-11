/**
 * Event handler for when a member leaves the chat.
 *
 * This module provides functionality to notify the chat when a member leaves,
 * helping maintain an awareness of the group's composition.
 */
module.exports = {
    eventType: "left_chat_member",
    async execute(ctx) {
      // Retrieve the name of the Telegram group
      const groupName = ctx.chat.title;
  
      // Extract the username of the member who left
      const username = ctx.message.left_chat_member.username ? `@${ctx.message.left_chat_member.username}` : 'a member';
  
      // Send a farewell message
      await ctx.reply(`Goodbye ${username}!`);
    },
};
