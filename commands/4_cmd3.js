module.exports = {
    name: "cmd3", //Replace with command name
    description: "description text", //Replace with command description
    aliases: [],
    params: [],
    flags: [],
    async execute(ctx) {
        // Provide a response for cmd3
        ctx.reply(`Replace with message that the bot replies with when /cmd3 is called`, {
            reply_to_message_id: ctx.message.message_id
        }
        );
    },
};
