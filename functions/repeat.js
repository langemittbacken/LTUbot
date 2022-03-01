// function sendRepeatMsg(bot, channelID, message) {
//   bot.sendMessage({
//     to: channelID,
//     message: message
// });
// }

// module.exports = sendRepeatMsg

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('repeat')
		.setDescription('Copycat')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('The input to send back')
        .setRequired(true)),
	async execute(interaction) {
		await interaction.reply({
      content: interaction.options.getString('input')
      //ephemeral: true
  });
	},
};