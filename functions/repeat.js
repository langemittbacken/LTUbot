function sendRepeatMsg(bot, channelID, message) {
  bot.sendMessage({
    to: channelID,
    message: message
});
}

module.exports = sendRepeatMsg