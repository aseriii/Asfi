const Discord = require('discord.js')
const bot = new Discord.Client();

const BOT_TOKEN = 'NTg1NjM4MDAxNDM1MDgyNzU1.XPcdLg.xRcjJylUQp6riliE3WF2BesqEnw';

const PREFIX = '-';

var version = 'Version 1.0.7';
var commands = '-ping, -twitch, -info version, -clear(number), -invitelink, -asustatus, -avatar';

bot.on('ready', () =>{
    console.log('Asfi is online!');
    bot.user.setActivity('aseri code me'), {
        type: 'Watching'
    }).catch(console.error)
})

bot.on('message', message=>{
    if(message.content.startsWith('-') == false) return
    let args = message.content.substring(PREFIX.length).split(" ");
    const embed = new Discord.RichEmbed()

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong');
            break;
        case 'twitch':
            message.channel.sendMessage('https://twitch.tv/smotheryyy')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage(version);
            }else{
                message.reply('Error! Please specify an info command')
            }
            break;
        case 'clear':
            if(!args[1])return message.reply('Error, please define a number of messages')
            message.channel.bulkDelete(args[1]);
            break;
        case 'invitelink':
            message.reply('Use this link to invite me to your lame servers https://discordapp.com/oauth2/authorize?client_id=585638001435082755&scope=bot&permissions=8')
            break;
        case 'asustatus':
            message.reply('Well! Asu is doing one of three things, he is either coding me, studying for finals, or listening to music')
            break;
        case 'avatar':
        if(args[1])return message.reply('Sorry, only your avatar can be fetched!')   
        embed
        .setTitle('Here is your Avatar!')
        .setImage(message.author.avatarURL)
        .setColor(0xAA15FF)
        message.channel.sendEmbed(embed);
            break;
        case 'commands':
            embed
            .setTitle('Bot Command List')
            .addField('Player Requesting', message.author.username)
            .addField('Current Server', message.guild.name)
            .addField('Commands', commands)
            .setThumbnail(message.guild.iconURL)
            .setColor(0xAA15FF)
            message.channel.sendEmbed(embed);
            break;

    }
})

bot.login(process.env.BOT_TOKEN);

