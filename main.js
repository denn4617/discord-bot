const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '\#';

require("dotenv").config();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on("message", message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    let inputString = message.content.slice(prefix.length).split(/ +/);
    const command = inputString.shift().toLowerCase();
    
    
    if (command === 'h2b') {
        if (message.author.id === '617984320639860746') {
            client.commands.get('randers').execute(message, inputString);
        } else
        client.commands.get('h2b').execute(message, inputString);
    }else if (command === 'b2h') {
        if (message.author.id === '617984320639860746') {
            client.commands.get('randers').execute(message, inputString);
        } else
        client.commands.get('b2h').execute(message, inputString); 
    }else if(command === 'help') {
        if (message.author.id === '617984320639860746') {
            client.commands.get('randers').execute(message, inputString);
        } else
        client.commands.get('help').execute(message, inputString, Discord);
    }else if(command === 'vibecat') {
        if (message.author.id === '617984320639860746') {
            client.commands.get('randers').execute(message, inputString);
        } else
        client.commands.get('vibeCat').execute(message, inputString);
    }else if(command === 'php') {
        if (message.author.id === '617984320639860746') {
            client.commands.get('randers').execute(message, inputString);
        } else
        client.commands.get('php').execute(message, inputString);
    }else if(command === 'phplover') {
        message.channel.send('fuck dig kenneth <:fuckphp:808110722482438204>');
    }
});


client.login(process.env.TOKEN);