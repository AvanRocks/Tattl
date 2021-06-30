const Discord = require("discord.js");
const client = new Discord.Client();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

client.login(process.env.TOKEN);

module.exports = {
  client,
};
