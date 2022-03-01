require('dotenv').config(); //initialize dotenv
const { Client, Collection, Intents, Message } = require('discord.js'); //import discord.js
var fs = require('node:fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //create new client

client.commands = new Collection();
const commandFiles = fs.readdirSync('./functions').filter(file => file.endsWith('.js'));

const coinflipFunction = require('./functions/coinflip.js');
const commandsFunction = require('./functions/commands.js');

for (const file of commandFiles) {
	const command = require(`./functions/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {

	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// client.on('messageCreate', message => {

//   if (message.content.substring(0, 1) == '!') {

//     var args = message.content.substring(1).split(' ');
//     var cmd = args[0];
//     args = args.splice(1);

//     switch(cmd) {

//         // !ping
//         case 'ping':
//           message.reply('Pong!')
//         break;

//         case 'coinflip':
//           coinflipFunction(message, args[0])
//         break;

//         case 'commands':
//           commandsFunction(message, args[0])
//         break;

//         case 'repeat':
//           message.reply(message.content.split(' ').slice(1).join(' '))//looks messy, but removes '!repeat' from message.content
//           //repeatFunction(bot, channelID, message.split(' ').slice(1).join(' '))
//         break;



//         default://commandbestmatch
//           message.reply(cmd + "\n" + args)
//           message.reply("pokemon")

//             //matchingFunction(bot, channelID, message.content.substring(1), commandsArray)  

//      }

//  }
// });

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token