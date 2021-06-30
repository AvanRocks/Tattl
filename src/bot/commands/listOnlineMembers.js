const getName = require("../../db/utils/getName");
const getDiscordName = require("../../db/utils/getDiscordName");
const getConnectedUsers = require("../../server/socketServer/util/getConnectedUsers");
const sendPaginatedMsg = require("../utils/sendPaginatedMsg");

async function listOnlineMembers(msg, args) {
  if (args.length > 0) {
    msg.channel.send("Error: Too many arguments");
    return;
  }

  const users = getConnectedUsers();
  if (users.length === 0) {
    msg.channel.send("There are no online users");
  } else {
    const nameData = [];
    await Promise.all(
      users.map(async (userId) => {
        const name = await getName(userId);
        const discordName = await getDiscordName(userId);
        nameData.push([name, discordName]);
      })
    );

    const header = ["Name", "Discord username"];

    const options = {
      entriesPerPage: 15,
      tabular: {
        header: header,
      },
    };

    await sendPaginatedMsg(msg, nameData, options);
  }
}

module.exports = {
  name: "listOnlineMembers",
  description:
    "List all the members whose tattle browser extension is connected",
  execute: listOnlineMembers,
};
