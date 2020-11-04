module.exports = {
    name: "ValorantNevvaltoztatas",
    description: "A Valorant-os neved megváltoztatásának parancsa.",
    execute(message, Discord, invEmoji) {
        const VNV = new Discord.MessageEmbed()
        .setTitle("Valorant névváltoztatás")
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Fontos, hogy hitelesítened kell az e-mail-edet!")
        .addField("1. Nyisd meg ezt a linket: https://account.riotgames.com/riot-id", invEmoji)
        .addField("2. Jelentkezz be a fiókodba!", invEmoji)
        .addField("3. Menj rá a *RIOT ID* fülre!", "Ha a link alapból nem vinne oda.")
        .addField("4. A nevedet (azaz a Riot ID-at) a neved melletti kis ceruzánál tudod megváltoztatni", "A nevedet 30 naponként tudod változtatni.")
        
        message.channel.send(VNV);
    }
}