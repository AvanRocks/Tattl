const Discord = require("discord.js");
const getUserId = require("../../db/utils/getUserId");
const dbGetWatchList = require("../../db/utils/getWatchList");
const sendPaginatedMsg = require("../utils/sendPaginatedMsg");

async function getWatchList(msg, args) {
  if (args.length === 0) {
    msg.channel.send(
      "Please provide a member's name or Discord username as the first argument"
    );
    return;
  } else if (args.length > 1) {
    msg.channel.send("Too many arguments");
    return;
  }

  let user = args[0];
  let userId = null;
  if (!userId) {
    userId = await getUserId("discordname", user);
  }
  if (!userId) {
    userId = await getUserId("name", user);
  }
  if (!userId) {
    msg.channel.send("Please provie a valid member's name or Discord username");
    return;
  }

  const watchList = await dbGetWatchList(userId);

  const watchListData = [];
  watchList.forEach((url, index) => {
    if (url.startsWith("*://*.") && url.endsWith("/*")) {
      url = url.slice(6, -2);
    }

    watchListData.push(url);
  });

  const options = {
    entriesPerPage: 20,
    tabular: false,
  };

  await sendPaginatedMsg(msg, watchListData, options);
}

module.exports = {
  name: "getWatchList",
  description:
    "Show a member's watchList (i.e. the list of urls they are tracking)",
  execute: getWatchList,
};
