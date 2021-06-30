const { client } = require("../client");
const { guildId } = require("../../../config.json");

let users = new Map();
async function initGuild() {
  const guild = await client.guilds.fetch(guildId);
  if (guild.available) {
    let members = await guild.members.fetch();
    members.each((member) => {
      users.set(member.user.username, member.user);
      if (member.nickname) {
        users.set(member.nickname, member.user);
      }
    });
  }
}

client.on("ready", async () => {
  await initGuild();
});

function getUser(username) {
  if (users.size) {
    return users.get(username);
  }
}

module.exports = { getUser };
