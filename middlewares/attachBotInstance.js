module.exports = (bot) => (ctx, next) => {
  ctx.bot = bot;
  return next();
};
