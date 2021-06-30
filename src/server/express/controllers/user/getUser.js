const getUserId = require("../../../../db/utils/getUserId");
const getWatchList = require("../../../../db/utils/getWatchList");
const getName = require("../../../../db/utils/getName");
const getDiscordName = require("../../../../db/utils/getDiscordName");

async function getUser(req, res) {
  let { token } = req.body;

  let userId = await getUserId("token", token);
  let name = await getName(userId);
  let discordName = await getDiscordName(userId);
  let watchList = await getWatchList(userId);

  let ret = {
    name: name,
    discordName: discordName,
    watchList: watchList,
  };

  res.json(ret);
}

module.exports = getUser;
