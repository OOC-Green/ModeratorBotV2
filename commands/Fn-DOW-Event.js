module.exports = {
    name: "Fn-DOW-Event",
    description: "A Fortnite Devourer Of Worlds Event leírásának parancsa",
    execute(bot, Discord) {
        bot.on("message", async message => {
            if(message.author.bot) return;
            if(message.content.startsWith("m2/fortnite-event/DOW")) {
                message.delete();
                if(!message.member.permissions.has("ADMINISTRATOR")) return;
                
                const FNDOW = new Discord.MessageEmbed()
                .setTitle("Fortnite - Devourer Of Worlds Event")
                .setColor("BLUE")
                .setThumbnail(message.author.displayAvatarURL)
                .addField("Téma:", "Galactus VS Bosszúállok (+ szigetlakók?)")
                .addField("Helyszín:", "Az egész sziget (?)")
                .addField("Időpont:", "2020. 12. 01. 22:00-kor (a közös event nézés elmarad 😔)")
                .addField("Egyéb:", "Lehet, hogy el fogjuk hagyni ezt a szigetet. Az event 4GB-os lesz (Az előző legnagyobb event volt 650MB)! Sok régi dolog visszatér. Nem szeretnék mindent leírni, ha szeretnétek tudni mindet, akkor itt megtudhatjátok (SPOILER MENTESEN!): https://youtu.be/3Vz9nRas_r8")
                
                message.channel.send(FNDOW);
            };
        });
    }
}