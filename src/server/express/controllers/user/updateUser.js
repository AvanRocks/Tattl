const format = require("pg-format");
const db = require("../../../../db");
const getUserId = require("../../../../db/utils/getUserId");
const isDiscordNameValid = require("../../../../db/utils/isDiscordNameValid");

async function updateName(name, token) {
  await db.query("UPDATE user_accounts SET name = $1 WHERE token = $2", [
    name,
    token,
  ]);
}
async function updateDiscordName(discordName, token) {
  await db.query("UPDATE user_accounts SET discordName = $1 WHERE token = $2", [
    discordName,
    token,
  ]);
}

async function updateWatchlist(watchList, token) {
  let userId = await getUserId("token", token);

  await db.query("DELETE FROM watch_list WHERE userId = $1", [userId]);

  if (watchList.length) {
    let watchListArray = Object.entries(watchList);
    watchListArray.forEach((entry) => (entry[0] = userId));
    let query = format(
      "INSERT INTO watch_list (userId, watchUrl) VALUES %L",
      watchListArray
    );
    await db.query(query);
  }
}

async function updateUser(req, res) {
  const { name, discordName, watchList, token } = req.body;

  if (name) {
    updateName(name, token);
  }

  if (discordName) {
    let discordNameIsValid = await isDiscordNameValid(discordName, token);
    if (discordNameIsValid) {
      updateDiscordName(discordName, token);
    } else {
      res.status(400).send("Discord username taken");
    }
  }

  if (watchList) {
    updateWatchlist(watchList, token);
  }

  res.send();
}

module.exports = updateUser;
