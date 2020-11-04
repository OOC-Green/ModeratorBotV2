module.exports = {
    name: "Angol",
    description: "A Valorant letörlésének parancsa angol nyelven.",
    execute(message, Discord, invEmoji) {
        const ANGOL = new Discord.MessageEmbed()
        .setTitle("Valorant letörlése")
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Angol Windows")
        .addField("1. Nyisd meg a Fájlkezelőt.", invEmoji)
        .addField("2. Írd be a kereső részébe ezt: *Control Panel\\Programs\\Programs and Features\\VALORANT*", ":exclamation:VIGYÁZZ:exclamation: HA ELVÉGZET EZT A MŰVELETET, AKKOR LETÖRLŐDIK EGYBŐL!")

        message.channel.send(ANGOL);
    }
}