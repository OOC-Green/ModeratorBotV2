module.exports = {
    name: "RRmsgJátékok", //Reaction Role message Játékok
    description: "Ez a reaction role message része (Játékok).",
    execute(bot, Discord, invEmoji) {
        bot.on("message", async message => {    
            const prefix = "m2/";
            const messageArray = message.content.split(" ");
            const cmd = messageArray[0];
            const args = message.content.substring(message.content.indexOf(" ")+1);

            if(message.author.bot) return;
            if(cmd === `${prefix}react`) {
                const JATEKOK = new Discord.MessageEmbed()
                .setTitle("Játékok")
                .setDescription("Megkapod a rangot, ha az adott emojival reagálsz!")
                .setColor("GREEN")
                .addField(":blue_square:  Fortnite", invEmoji)
                .addField(":red_square:  Valorant", invEmoji)
                .addField(":yellow_square:  Among Us", invEmoji)
                .addField(":orange_square:  Apex Legends", invEmoji)
                .addField(":green_square:  Minecraft", invEmoji)
                let msgJATEKOK = await message.channel.send(JATEKOK)
                msgJATEKOK.react("🟦")
                msgJATEKOK.react("🟥")
                msgJATEKOK.react("🟨")
                msgJATEKOK.react("🟧")
                msgJATEKOK.react("🟩"); 
            };
        })
    }
}