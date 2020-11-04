# ModeratorBotV2

***Használat:***
Fő file: [index.js]: https://github.com/OOC-Green/ModeratorBotV2/blob/main/index.js
A fő file a [commands]: https://github.com/OOC-Green/ModeratorBotV2/tree/main/commands mappát is használja

***Felismerés:***
[index.js]: https://github.com/OOC-Green/ModeratorBotV2/blob/main/index.js :
```    
1  const Discord = require("discord.js");
....
41    //Help parancs
42    if(message.content.startsWith("m2/help")) {
43        bot.commands.get("Help").execute(message, Discord, invEmoji);
44    };
```
Ez azt jelenti, hogy a *Help* nevű modul-t keresi, ami a [commands/Help.js]: https://github.com/OOC-Green/ModeratorBotV2/tree/main/commands/Help.js -ben van:
```
1 module.exports = {
2     name: "Help",
...
28     }
29  }
```
