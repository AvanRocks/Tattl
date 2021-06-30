const { sendMsg } = require("../bot/utils/sendMsg");
const { getUser } = require("../bot/utils/getUser");

async function expose(msg) {
  let { discordName, url } = msg;
  let user = getUser(discordName);
  await sendMsg(`${user} visited: ${url}`);
}

module.exports = {
  type: "general",
  execute: expose,
};
