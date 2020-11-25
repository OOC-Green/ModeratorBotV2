const { User } = require("discord.js")

module.exports = {
    name: "ReactionRole",
    description: "Ez a reaction role alapja.",
    execute(bot, Discord) {
        //rang adás
        bot.on("messageReactionAdd", async (reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch();
            
            //Játékok
            if(user.bot) return;
            if(reaction.emoji.name === "🟦") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("720598830646689882")
            };
            if(reaction.emoji.name === "🟥") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("708378731961647114")
            };
            if(reaction.emoji.name === "🟨") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("755804324264935536")
            };
            if(reaction.emoji.name === "🟧") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("707290628685430826")
            };
            if(reaction.emoji.name === "🟩") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("708380912488022027")
            };

            //Fortnite Event
            if(reaction.emoji.name === "👾") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("773167633054564385")
            };
        });
        //rang elvétel
        bot.on("messageReactionRemove", async (reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch();
            
            //Játékok
            if(user.bot) return;
            if(reaction.emoji.name === "🟦") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("720598830646689882")
            };
            if(reaction.emoji.name === "🟥") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("708378731961647114")
            };
            if(reaction.emoji.name === "🟨") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("755804324264935536")
            };
            if(reaction.emoji.name === "🟧") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("707290628685430826")
            };
            if(reaction.emoji.name === "🟩") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("708380912488022027")
            };

            //Fortnite Event
            if(reaction.emoji.name === "👾") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("773167633054564385")
            };
        });
    }
}
