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
                .setThumbnail(message.author.displayAvatarURL())
                .addField("Megvannak az infók! (Spoiler mentes!) Ahhoz, hogy megtudd, és szeretnél részt venni a közös event nézésen, reagálj egy 👾 emojival erre az üzenetre, és hozzáférést kapsz a titkos #𝗘𝗫𝗖𝗟𝗨𝗦𝗜𝗩𝗘║ᴇᴠᴇɴᴛ csatornához és az Event nézés 👀 hangcsatornához!", "Utoljára frissítve: 2020. 11. 19.")

                let msgFNE = await message.channel.send(FNE);
                msgFNE.react("👾")
            };
        });
    }
}
