import { Client, GatewayIntentBits } from "discord.js";

import { readdir } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log("Comunicación Exitosamente");
})

client.on('messageCreate', async (message) => {
    if (message.content !== "!illika" || message.author.bot) return;
    
    const __dirname = import.meta.dirname;
    const commandsPath = path.join(__dirname, 'commands')
    const commandsFile = await readdir(commandsPath);

    for(const file of commandsFile) {
        const filePath = path.join(commandsPath, file);
        const commandUrl = pathToFileURL(filePath).href;

        const { execute } = await import(commandUrl);
        await execute(message);
    }
});

