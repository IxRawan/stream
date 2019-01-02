const Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "AR"



client.on('message', function(message) {
    const myID = "516307527806484490";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتبي اي اسم ياسطورة يا روان.');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "s")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتبي اي حالة يا اسطورة يا روان.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Streaming,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "p")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتبي اي حالة يا اسطورة يا روان.');
        client.user.setGame(args);
        message.channel.send('**تم ياسطورة يا روان صرتي بلاينق**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "l")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتبي اي حالة يا اسطورة يا روان.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**تم ياسطورة يا روان صرتي لستنق**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "w")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**تم يا اسطورة يا روان صرتي واتشنق**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتبي الحالة الي تريديها ياسطورة يا روان.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.login(process.env.BOT_TOKEN);
