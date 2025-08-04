import { EmbedBuilder } from "discord.js";

export const name = 'illika';
export const description = 'Este es el nombre de illika = "Steve"';
export const execute = async (message, args) => {
    const { guild } = message;
    console.log(guild);
    const embed = new EmbedBuilder()
                        .setColor(0xff2d00)
                        .setTitle('IllikaBot')
                        .setDescription('Información del Servidor')
                        .addFields(
                            {name: 'Dueño', value: `<@${guild.ownerId}>`, inline: true},
                            {name: 'Dueño sin <@NUMBER>', value: `${guild.ownerId}`, inline: true},
                            {name: '\u200B', value: '\u200B' }, // espacio en blanco
                            {name: 'Miembros', value: `${guild.memberCount}`, inline: true}
                        )
                        .setThumbnail(guild.iconURL({dynamic: true}))
                        .setFooter({ text: "Comando Ejecutado por " + message.author.tag})
                        .setTimestamp();
    await message.channel.send({ embeds: [embed]});
    

}

