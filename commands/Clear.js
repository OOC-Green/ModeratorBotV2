module.exports = {
    name: "Clear",
    description: "A clear parancs.",
    execute(message) {
        const messageArray = message.content.split(" ");
        const args = messageArray.slice(1);
    
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Nincs ehhez jogod! " + message.author.toString());
        
        let deleteAmount;
    
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply("Kérlek adj meg egy számot \n (Használat: *m/clear <szám>*)") }
    
        if (parseInt(args[0]) > 100) {
            return message.reply("Egyszerre csak 100 üzenetet törölhetsz")
        } else {
            deleteAmount = parseInt(args[0]);
        }
    
        message.channel.bulkDelete(deleteAmount + 1, true);
        console.log(`${deleteAmount} üzenet sikeresen eltávolítva!`)
    }
}