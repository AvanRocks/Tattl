const { client } = require("../client");
const { sendMsg } = require("../utils/sendMsg");

const helpTxt = `
help                Display a help message
check               Check if the bot is running
listMembers         List all users registered with accountability bot
listOnlineMembers   List all the members whose tattle browser extension is connected
allowGee   Allow George to send url previews
blockGee   Block George from sending url previews
`;

async function help(msg) {
  await sendMsg(`\`\`\`${helpTxt}\`\`\``);
}

module.exports = {
  name: "help",
  description: "Display a help message",
  execute: help,
  numArgs: 0,
};
