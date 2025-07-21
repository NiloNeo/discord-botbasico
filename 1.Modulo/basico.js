import { Client, GatewayIntentBits } from "discord.js";

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // slash commands
        GatewayIntentBits.GuildMessages, // recibir mensajes
        GatewayIntentBits.MessageContent // leer contenido de mensajes
    ]
});

client.once('ready', () => {
    console.log("Bot listo", client.user.tag);
});

client.on('messageCreate', (message) => {
    //console.log(message);
    if (message.content === '!illika') message.reply('Este es el comando illika, devolviendo respuesta desde el backend');
});

