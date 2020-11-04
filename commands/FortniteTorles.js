module.exports = {
    name: "FortniteTorles",
    description: "A Fortnite letörlésének parancsa.",
    execute(message, Discord, invEmoji) {
        const FNT = new Discord.MessageEmbed()
        .setTitle("Fortnite letörlése")
        .setColor("BLUE")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("1. Lépj be az Epic Games Launcher-be!", invEmoji)
        .addField("2. Menj a Library fülre!", invEmoji)
        .addField("3. Keresd meg a Fortnite-ot!", invEmoji)
        .addField("4. Keresd meg a 3 pontot az ikon alatt és nyomj rá!", invEmoji)
        .addField("5. Majd nyomj rá az *Uninstall* részre és kész.", invEmoji)
        
        message.channel.send(FNT);
    }
}