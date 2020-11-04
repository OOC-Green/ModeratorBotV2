module.exports = {
    name: "AmongUsLetoltesTELEFON",
    description: "Az Among Us letöltése telefonra parancs.",
    execute(message, Discord, invEmoji) {
        const TELEFON = new Discord.MessageEmbed()
        .setTitle("Among Us letöltése")
        .setColor("GOLD")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Telefonra")
        .addField("1. Nyisd meg a Google Play Áruházat!", invEmoji)
        .addField("2. Írd be az áruház keresőjébe, hogy *Among Us* !", invEmoji)
        .addField("3. Töltsd le!", invEmoji)
        
        message.channel.send(TELEFON);
    }
}