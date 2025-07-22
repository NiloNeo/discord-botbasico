import "dotenv/config";

//import { client } from "./1.Modulo/basico.js";
//client.login(process.env.TOKEN);

// Forma Modular - test 1
import { Client, GatewayIntentBits } from "discord.js";
import messageCreate from "./events/messageCreate.js";
import { loadCommands } from "./utils/loader.js";

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.commands = new Map();

//cargamos los comandos
await loadCommands(client);

// Evento solo una vez Ready
client.once('ready', () => {
    console.log('El bot esta listo');
});

// Registramos Eventos
messageCreate(client);

// Iniciamos el Login
client.login(process.env.TOKEN);