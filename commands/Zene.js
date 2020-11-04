/*
module.exports = {
    name: "Zene",
    description: "A zene parancs.",
    execute(bot, Discord) {
        const { Player } = require("discord-player");
        const player = new Player(bot);
        bot.player = player;
        
        bot.on("message", async (message) => {
            const prefix = "m2/";
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            if(command === "play") {
                let track = await bot.player.play(message.member.voice.channel, args[0], message.member.user.tag);
                message.channel.send(`Jelenleg a(z) ${track.name} megy! - Kérte: ${track.requestedBy}`);
            }

            if(command === "stop") {
                let track = await bot.player.stop(message.guild.id);
                message.channel.send("A zene leállítva!")
            }
    });
    }
}
*/

//VALAMILYEN OKBÓL NEM MŰKÖDIK! AMÍG NEM KAPUNK DASHCRUFT-TÓL NEM KAPUNK ÚJ VIDEÓT A MUSIC BOTRÓL, ADDIG ÁTMENETILEG NEM MŰKÖDIK EZ A FUNKCIÓ!