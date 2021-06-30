const { client } = require("../client");
const { botChannelId } = require("../../../config.json");

let botChannel = null;

async function getBotChannel() {
  return new Promise(async (resolve, reject) => {
    if (botChannel !== null) {
      resolve(botChannel);
    } else {
      client.on("ready", async () => {
        botChannel = await client.channels.fetch(botChannelId);
        resolve(botChannel);
      });
    }
  });
}

/*
async function init() {
  botChannel = await client.channels.fetch(botChannelId);
}
*/

/*
function getBotChannel() {
  return client.channels.fetch(botChannelId);
}
*/

module.exports = getBotChannel;
