module.exports = {
    name: "ValorantTorles",
    description: "A Valorant letörlésének a nyelvkiválasztó parancsa.",
    execute(message, Discord, invEmoji) {
        const VT = new Discord.MessageEmbed()
        .setTitle("Valorant letörlése")
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Válaszd ki a Windows-od nyelvét:")
        .addField("m2/magyar", invEmoji)
        .addField("m2/angol", invEmoji)
        
        message.channel.send(VT);
    }
}