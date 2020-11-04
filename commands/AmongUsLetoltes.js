module.exports = {
    name: "AmongUsLetoltes",
    description: "A platform kiválaztása az Among Us letöltésére parancs.",
    execute(message, Discord, invEmoji) {
        const AUL = new Discord.MessageEmbed()
        .setTitle("Among Us letöltése")
        .setColor("GOLD")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Válaszd ki, hogy mire szeretnéd letölteni:")
        .addField("m2/pc", invEmoji)
        .addField("m2/telefon", invEmoji)
        
        message.channel.send(AUL);
    }
}