module.exports = {
    name: "Magyar",
    description: "A Valorant letörlésének parancsa magyar nyelven.",
    execute(message, Discord, invEmoji) {
        const MAGYAR = new Discord.MessageEmbed()
        .setTitle("Valorant letörlése")
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Magyar Windows")
        .addField("1. Nyisd meg a Fájlkezelőt.", invEmoji)
        .addField("2. Írd be a kereső részébe ezt: *Vezérlőpult\\Programok\\Programok és szolgáltatások\\VALORANT*", ":exclamation:VIGYÁZZ:exclamation: HA ELVÉGZET EZT A MŰVELETET, AKKOR LETÖRLŐDIK EGYBŐL!")

        message.channel.send(MAGYAR);
    }
}