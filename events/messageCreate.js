
import config from "../config/config.js";

export default function(client) {
    client.on('messageCreate', async (message) => {
        
        if(!message.content.startsWith(config.prefix) || message.author.bot) return;
        const args = message.content.slice(config.prefix.length).trim().split(/\s+/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.get(commandName)) return;

        const command = client.commands.get(commandName);
        
        try {
            await command.execute(message, args);
        } catch (error) {
            console.error(`Error al ejecutar el comando  ${commandName}`, error);
            message.reply("Hubo un error al ejecutar el comando");
        }

    });
}