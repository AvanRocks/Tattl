const { client } = require("../client");

const descriptionList = [];

client.commands.forEach((commandFunc, commandName) => {
  const { description } = require(`./${commandName}`);
  descriptionList.push(`${commandName}\t\t${description}`);
});

function help(msg) {
  msg.send(`\`\`\`${descriptionList.join("\n")}\`\`\``);
}

module.exports = {
  name: "help",
  description: "Display a help message",
  execute: help,
};
