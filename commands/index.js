/**
 * Command loader module.
 *
 * This module dynamically imports all command modules from the current
 * directory (and subdirectories) and exports them as a single object.
 * This allows for easy integration and management of commands within
 * the Telegram bot.
 */
const fs = require("fs");
const path = require("path");

/**
 * Recursively loads command modules.
 *
 * @param {string} directory - The directory to start searching for command modules.
 * @returns {Object} An object containing all loaded command modules.
 */
function loadCommands(directory) {
  const commands = {};

  const readCommands = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach((file) => {
      if (file.isDirectory()) {
        const nestedCommands = readCommands(path.join(dir, file.name));
        Object.assign(commands, nestedCommands);
      } else if (file.name.endsWith(".js") && file.name !== "index.js") {
        const command = require(path.join(dir, file.name));
        if (command.name && typeof command.execute === "function") {
          commands[command.name] = command;
        }
      }
    });
  };

  readCommands(directory);
  return commands;
}

module.exports = loadCommands(__dirname);
