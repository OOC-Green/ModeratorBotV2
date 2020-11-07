module.exports = {
    name: "Fn-NexusWar-Event",
    description: "A Fortnite Nexus War Event leírásának parancsa",
    execute(bot, Discord) {
        bot.on("message", async message => {
            if(message.author.bot) return;
            if(message.content.startsWith("m2/fortnite-event/NW")) {
                message.delete();
                if(!message.member.permissions.has("ADMINISTRATOR")) return;
                
                const FNNW = new Discord.MessageEmbed()
                .setTitle("Fortnite - Nexus War Event")
                .setColor("BLUE")
                .setThumbnail(message.author.displayAvatarURL)
                .addField("Téma:", "Nexus War - Galactus VS Bosszúállok (+ szigetlakók?)")
                .addField("Helyszín:", "???")
                .addField("Időpont:", "2020. 11. 21. után (pontos dátum még nincs)")
                .addField("Egyéb:", "Lehet, hogy el fogjuk hagyni ezt a szigetet.")
                
                message.channel.send(FNNW);
            };
        });
    }
}