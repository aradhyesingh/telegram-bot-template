/**
 * Event handler for new chat members.
 *
 * Automatically sends a welcome message whenever a new user joins a chat.
 * This module exports an object that includes the event type and the execution logic
 * for handling new chat member events.
 */
module.exports = {
    eventType: "new_chat_members",
    async execute(ctx) {
      // Retrieve the name of the Telegram group
      const groupName = ctx.chat.title;
  
      // Welcome each new chat member individually
      for (const member of ctx.message.new_chat_members) {
          const username = member.username ? `@${member.username}` : 'new member';
          await ctx.reply(`Welcome ${username} to ${groupName}!\n\nUse /begin or /helpmenu to get started.`);
      }
    }
};