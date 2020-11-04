module.exports = {
    name: "Emulator",
    description: "Mi az az emulator parancs.",
    execute(message, Discord, invEmoji) {
        const EMULATOR = new Discord.MessageEmbed()
        .setTitle("Emulator")
        .setColor("DEFAULT")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Az emulátor egy olyan számítógépes program, amivel egy virtuális telefont kezelhetsz. Így telefonos játékokkal is tudsz játszani!", invEmoji)
            
        message.channel.send(EMULATOR);
    }
}