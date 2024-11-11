const { Telegraf } = require('telegraf');
const dotenv = require("dotenv");
const commands = require("./commands");
const commandsLoader = require("./utils/commandsLoader");
const events = require("./events");
const eventsLoader = require("./utils/eventsLoader");

// Load environment variables from .env file
dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

//bot.loadCommands("./examples/BasicBot/commands/");
// Dynamically register telegram command handlers
commandsLoader(bot, commands);

// Dynamically register telegram event handlers
eventsLoader(bot, events);

module.exports = bot;
