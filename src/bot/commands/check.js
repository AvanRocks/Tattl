function check(message) {
  message.channel.send("Bot is running");
}

module.exports = {
  name: "check",
  description: "Check if the bot is running",
  execute: check,
  numArgs: 0,
};
