import { EmbedBuilder } from "discord.js";

export const name = 'illika';
export const description = 'Este es el nombre de illika = "Steve"';
export const execute = async (message, args) => {
    const embed = new EmbedBuilder()
                        .setColor(0xff2d00)
                        .setTitle('IllikaBot')
                        .setDescription('Este es un mensaje con **estilo** 😎')
                        .setFooter({ text: "EjemploFooter" })
                        .setTimestamp();
    await message.channel.send({ embeds: [embed]});
    

}

