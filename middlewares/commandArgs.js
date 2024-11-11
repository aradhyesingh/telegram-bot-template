/**
 * Middleware for parsing command arguments.
 *
 * This middleware extracts arguments from the command text and attaches them to the Telegraf context
 * under ctx.state.command, making them easily accessible in command handlers.
 *
 * @param {Telegraf.Context} ctx - The context of the incoming message.
 * @param {function} next - The function to pass control to the next middleware.
 */
module.exports = async (ctx, next) => {
  if (ctx.updateType === "message" && ctx.update.message.text) {
    const text = ctx.update.message.text;
    const parts = text.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (!ctx.state) ctx.state = {};
    ctx.state.command = { base: command, args };
  }
  await next();
};
