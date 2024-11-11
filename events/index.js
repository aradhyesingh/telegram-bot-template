/**
 * Event handler loader module.
 *
 * This module dynamically imports all event handler modules from the current
 * directory (and subdirectories) and exports them as a single object.
 * This enables easy integration and management of event handlers within
 * the Telegram bot, allowing for a modular and scalable approach to handling
 * different types of events.
 */
const fs = require("fs");
const path = require("path");

/**
 * Recursively loads event handler modules.
 *
 * Traverses the specified directory (and any subdirectories) to load all
 * event handler modules, skipping the index.js file to avoid circular dependencies.
 * Each event handler module is expected to export an object containing at least
 * an 'eventType' property and an 'execute' function.
 *
 * @param {string} directory - The directory to start searching for event handler modules.
 * @returns {Object} An object containing all loaded event handler modules, keyed by event type.
 */
function loadEventHandlers(directory) {
  const eventHandlers = {};

  const readEventHandlers = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach((file) => {
      if (file.isDirectory()) {
        const nestedEventHandlers = readEventHandlers(
          path.join(dir, file.name)
        );
        Object.assign(eventHandlers, nestedEventHandlers);
      } else if (file.name.endsWith(".js") && file.name !== "index.js") {
        const eventHandler = require(path.join(dir, file.name));
        if (
          eventHandler.eventType &&
          typeof eventHandler.execute === "function"
        ) {
          // Use the eventType as the key to support multiple handlers for the same event type
          if (!eventHandlers[eventHandler.eventType]) {
            eventHandlers[eventHandler.eventType] = [];
          }
          eventHandlers[eventHandler.eventType].push(eventHandler);
        }
      }
    });
  };

  readEventHandlers(directory);
  return eventHandlers;
}

module.exports = loadEventHandlers(__dirname);
