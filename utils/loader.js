import { readdir } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

const __dirname = import.meta.dirname;

export const loadCommands = async (client) => {

    const commandsPath = path.join(__dirname, '../commands');
    const commandsFile = await readdir(commandsPath);

    for(const file of commandsFile) {
        
        const filePath = path.join(commandsPath, file);
        const commandURL = pathToFileURL(filePath).href;

        const {default: command} = await import(commandURL);
        if(!command?.name || typeof command.execute !== "function") {
            console.warn(`El archivo ${file} no exporta un comando válido`);
            continue;
        }
        client.commands.set(command.name, command);
    }
    console.log(`Cargados ${client.commands.size} comandos.`);
}


