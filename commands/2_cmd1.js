async function cmd1(ctx) {
    // Provide a response for cmd1
    ctx.reply(`Replace with message that the bot replies with when /cmd1 is called`, {
        reply_to_message_id: ctx.message.message_id
    });
}

module.exports = {
    name: "cmd1", //Replace this with command name
    description: "description text", //Replace this with command description
    aliases: [], //Set aliases for command name
    params: [],
    flags: [],
    execute: cmd1,
};
