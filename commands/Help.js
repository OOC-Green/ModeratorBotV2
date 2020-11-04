module.exports = {
    name: "Help",
    description: "A help parancs.",
    execute(message, Discord, invEmoji) {
        const SEGITSEG = new Discord.MessageEmbed()
        .setTitle("Választható segítségek")
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("m2/fortnite-torles", "Hogyan tudom letörölni a Fortnite-ot?")
        .addField("m2/fortnite-nevvaltoztatas", "Hogyan tudom megváltozatni a Fortnite-os nevemet?")
        .addField("m2/fortnite-event", "Mikor és milyen Fortnite-os event várható?")
        .addField("m2/valorant-torles", "Hogyan tudom letörölni a Valorant-ot?")
        .addField("m2/valorant-nevvaltoztatas", "Hogyan tudom megváltozatni a Valorant-os nevemet?")
        .addField("m2/among-us-letoltes", "Hogyan tudom letölteni az Among Us-t INGYEN?")
        
        message.channel.send(SEGITSEG);

        const SEGITSEG2 = new Discord.MessageEmbed()
        .setTitle("Nem találod azt, amit szeretnél?")
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Szeretnéd kérni az Admin segítségét?", invEmoji)
        .addField("Nem", "m2/nem")
        .addField("Igen", "m2/igen");

        setTimeout (function () {message.channel.send(SEGITSEG2)}, 15000);
        
    }
}