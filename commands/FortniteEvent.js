const { MessageFlags } = require("discord.js");

module.exports = {
    name: "FortniteEvent",
    description: "A Fortnite letörlésének parancsa.",
    execute(bot, Discord) {
        bot.on("message", async message => {
            if(message.author.bot) return;
            if(message.content.startsWith("m2/fortnite-event")) {
                const FNE = new Discord.MessageEmbed()
                .setTitle("Fortnite event")
                .setColor("BLUE")
                .setThumbnail(message.author.displayAvatarURL)
                .addField("Hamarosan event lesz. Amint lesz róla info, egy rangot lehet szerezni, amivel hozzá lehet férni a titkos event csatornához!", "Utoljára frissítve: 2020. 11. 03.")

                let msgFNE = await message.channel.send(FNE);
                *****************
            };
        });
    }
}
