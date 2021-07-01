const getDiscordName = require("../../../../db/utils/getDiscordName");
const getUserId = require("../../../../db/utils/getUserId");
const msgRouter = require("../../../../handlers");

async function handleEvent(req, res) {
  let { type, token, url, title } = req.body;

  if (!type || !token || !url) {
    res.status(400).send("Please provide all event parameters");
  }

  let userId = await getUserId("token", token);

  let discordName = await getDiscordName(userId);

  const msg = {
    type,
    discordName,
    url,
    title,
  };

  msgRouter(msg);

  res.send();
}

module.exports = handleEvent;
