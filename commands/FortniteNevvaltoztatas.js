module.exports = {
    name: "fortniteNevvaltoztatas",
    description: "A Fortnite-os neved megváltoztatásának parancsa.",
    execute(message, Discord, invEmoji) {
        const FNNV = new Discord.MessageEmbed()
        .setTitle("Fortnite névváltoztatás")
        .setColor("BLUE")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Fontos, hogy hitelesítened kell az e-mail-edet!")
        .addField("1. Nyisd meg ezt a linket: https://www.epicgames.com/account/personal?sessionInvalidated=true", invEmoji)
        .addField("2. Jelentkezz be a fiókodba!", invEmoji)
        .addField("3. A *DISPLAY NAME*-nél van a neved és kattints a kék négyzetben lévő tollra.", invEmoji)
        .addField("4. Írd be az új nevet, amit szeretnél, utána újra be kell írnod, ki kell pipálnod a négyzetet és rá kell nyomnod a *CONFIRM* gombra.", "A nevedet 2 hetente tudod változtatni.")
        
        message.channel.send(FNNV);
    }
}