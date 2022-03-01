const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
//const { clientId, guildId, token } = require('./config.json');

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.CLIENT_TOKEN;

const commands = [];
const commandFiles = fs.readdirSync('./functions').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./functions/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);