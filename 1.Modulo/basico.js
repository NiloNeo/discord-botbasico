import { Client, GatewayIntentBits } from "discord.js";

export const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log("Bot listo", client.user.tag);
});

