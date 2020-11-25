const Discord = require("discord.js");
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const parancsok = require("./commands/parancsok.json").PARANCSOK;
const kivetel =  ["m2/clear"]

const invEmoji = "<:Lathatatlankarakter:764231280413376532>";      //invEmoji = láthatatlanEmoji

//parancsok
const fs = require("fs");
bot.commands = new Discord.Collection();
const parancsMappa = fs.readdirSync("./commands/").filter(file => file.endsWith("js"));

for(const file of parancsMappa) {
    const parancs = require(`./commands/${file}`);
    bot.commands.set(parancs.name, parancs);
};

bot.on("message", async message => {
    if(message.author.bot) return;

    //Clear parancs
    if(message.content.startsWith("m2/clear")) {
        bot.commands.get("Clear").execute(message);
    };

    //Csatorna szűrő
    const {channel} = message
    const szuksegesCsatorna = "segítség-kérés"
    
    for(let i = 0; i < kivetel.length; i++) {
        if (message.content.split(" ").includes(kivetel[i], 0)) {
            return;
            }
        };
    
    for(let i = 0; i < parancsok.length; i++) {
        if (message.content.split(" ").includes(parancsok[i], 0)) {
            if (szuksegesCsatorna !== channel.name) {
                channel.name === szuksegesCsatorna;
    
                message.delete();
                message.reply(`Kérlek a <${"#742392355369517186"}> csatornára írjad!`).then(r =>r.delete({timeout: 5000}));
                return;
            }
        }
    }

    //Help parancs
    if(message.content.startsWith("m2/help")) {
        bot.commands.get("Help").execute(message, Discord, invEmoji);
    };
        //nem
        if(message.content.startsWith("m2/nem")) {
            message.delete();
            message.delete();
        };
        
        //igen
        if(message.content.startsWith("m2/igen")) {
            message.channel.send(message.author.toString() + " A segítségkérésedet elküldtem az Adminnak!");
            const channel01 = bot.channels.cache.find(channel => channel.name === "segitsegek")
            channel01.send(`<${"@592359930112114689"}>, a segítségedet kérik!`);
        };
    
    //Fortnite törlés
    if(message.content.startsWith("m2/fortnite-torles")) {
        bot.commands.get("FortniteTorles").execute(message, Discord, invEmoji);
    };
    
    //Fortnite névváltoztatás parancs
    if(message.content.startsWith("m2/fortnite-nevvaltoztatas")) {
        bot.commands.get("FortniteNevvaltoztatas").execute(message, Discord, invEmoji);
    };
     
    //Valorant letörlése parancs
    if(message.content.startsWith("m2/valorant-torles")) {
        bot.commands.get("ValorantTorles").execute(message, Discord, invEmoji);
    };
        //magyar
        if(message.content.startsWith("m2/magyar")) {
            bot.commands.get("Magyar").execute(message, Discord, invEmoji);
        };
        //angol
        if(message.content.startsWith("m2/angol")) {
            bot.commands.get("Angol").execute(message, Discord, invEmoji);
        };
    //Valorant névváltoztatás parancs
    if(message.content.startsWith("m2/valorant-nevvaltoztatas")) {
        bot.commands.get("ValorantNevvaltoztatas").execute(message, Discord, invEmoji);
    };
    //Among Us letöltése parancs
    if(message.content.startsWith("m2/among-us-letoltes")) {
        bot.commands.get("AmongUsLetoltes").execute(message, Discord, invEmoji);
    };
        //pc
        if(message.content.startsWith("m2/pc")) {
            bot.commands.get("AmongUsLetoltesPC").execute(message, Discord, invEmoji);
        };
            //emulator
            if(message.content.startsWith("m2/emulator")) {
                bot.commands.get("Emulator").execute(message, Discord, invEmoji);
            };

        //telefon
        if(message.content.startsWith("m2/telefon")) {
            bot.commands.get("AmongUsLetoltesTELEFON").execute(message, Discord, invEmoji);
        };
});

//Ismeretlen parancsok

//Reaction Role
    //Játékok
    bot.commands.get("RRmsgJátékok").execute(bot, Discord, invEmoji);

    //Fortnite Event
    bot.commands.get("Fn-DOW-Event").execute(bot, Discord);

bot.commands.get("ReactionRole").execute(bot, Discord);

// ♫ ZENE ♫
//bot.commands.get("Zene").execute(bot, Discord);

bot.on("ready", () => {
    console.log(`A ${bot.user.username} elindult!`);
    bot.user.setActivity("Discord chat", {type: "WATCHING"})
});

bot.login(process.env.TOKEN);
