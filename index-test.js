import { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } from 'discord.js';
import 'dotenv/config';


// Crea una nueva instancia del bot con los intents que necesita
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,               // Necesario para conectarse a los servidores
    GatewayIntentBits.GuildMessages,        // Para escuchar mensajes enviados en canales
    GatewayIntentBits.MessageContent        // Para acceder al contenido del mensaje (prefijo)
  ],
});

// Define el comando slash '/ping'
const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Devuelve Pong'),
].map(cmd => cmd.toJSON()
);

// Instancia REST para registrar los comandos con Discord
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
await rest.put(
  Routes.applicationCommands(process.env.CLIENT_ID),
  { body: commands } // Envía los comandos slash al bot para que estén activos
);

// Evento que se lanza cuando el bot está listo y conectado
client.once('ready', () => {
  console.log(`✅ Bot listo como ${client.user.tag}`);
});

// Comando de texto clásico con prefijo (!ping)
client.on('messageCreate', msg => {
  if (msg.content === '!ping') {
    msg.reply('🏓 Pong!'); // Responde si el mensaje es exactamente '!ping'
  }
});

// Evento para manejar interacciones (como slash commands)
client.on('interactionCreate', async (interaction) => {
  if (interaction.isChatInputCommand() && interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong desde slash!'); // Respuesta al comando /ping
  }
});

// Inicia sesión en Discord con el token del bot
client.login(process.env.TOKEN);



