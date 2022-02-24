require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
var fs = require('fs');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); //create new client
const coinflipFunction = require('./functions/coinflip.js');
const commandsFunction = require('./functions/commands.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {

  if (message.content.substring(0, 1) == '!') {

    var args = message.content.substring(1).split(' ');
    var cmd = args[0];
    args = args.splice(1);

    switch(cmd) {

        // !ping
        case 'ping':
          message.reply('Pong!')
        break;

        case 'coinflip':
          coinflipFunction(message, args[0])
        break;

        case 'commands':
          commandsFunction(message, args[0])
        break;

        case 'repeat':
          message.reply(message.content.split(' ').slice(1).join(' '))//looks messy, but removes '!repeat' from message.content
          //repeatFunction(bot, channelID, message.split(' ').slice(1).join(' '))
        break;



        default://commandbestmatch
          message.reply(cmd + "\n" + args)
          message.reply("pokemon")

            //matchingFunction(bot, channelID, message.content.substring(1), commandsArray)  

     }

 }
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token