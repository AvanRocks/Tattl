const { client } = require("./client");

require("discord-buttons")(client);

client.on("ready", async () => {
  await require("./utils/getBotChannel")();
});
