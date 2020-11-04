module.exports = {
    name: "IsmeretlenParancsok",
    description: "Az ismeretlen parancsok felismerése",
    execute(bot, Discord, parancsok) {
        bot.on('message', async message => {
            let ismParancs = new Discord.MessageEmbed()
            .setTitle("Ismeretlen parancs, kérlek ellenőrizd le, hogy jól írtad le!")
            .setColor("DARK_RED");
        
            if (message.author.bot) return;
            for(let i = 0; i < parancsok.length; i++) {
                if (message.content.split(" ").includes(parancsok[i], 0)) {
                return;
                }
            }
            if (message.content.startsWith('m2/')) {
                message.channel.send(ismParancs).then(r =>r.delete(7500));
            }
        });
    }
}