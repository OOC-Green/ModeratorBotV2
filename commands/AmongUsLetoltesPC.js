module.exports = {
    name: "AmongUsLetoltesPC",
    description: "Az Among Us letöltése PC-re parancs.",
    execute(message, Discord, invEmoji) {
        const PC = new Discord.MessageEmbed()
            .setTitle("Among Us letöltése")
            .setColor("GOLD")
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription("PC-re")
            .addField("1. Tölts le egy android emulator-t, jelen esetben a Bluestacks-et ( https://www.bluestacks.com )!", "Ha nem tudod, mi az, hogy emulátor, akkor írd be, hogy *m2/emulator*")
            .addField("2. Nyisd meg és nyomj az *Install now* gombra!", invEmoji)
            .addField("3. A letöltés után jelentkezz be a Google Play fiókodba!", invEmoji)
            .addField("4. Ha nem dobta fel alapból a Google Play Áruházat, akkor nyisd meg a *My games* fülön!", invEmoji)
            .addField("5. Írd be az áruház keresőjébe, hogy *Among Us* !", invEmoji)
            .addField("6. Töltsd le!", invEmoji)
            message.channel.send(PC);
    }
}