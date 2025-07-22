export default {
    name: "ping",
    description: "Responde con pong",
    execute
}

async function execute(message) {
    await message.reply("pong");
}
