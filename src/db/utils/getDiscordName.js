const db = require("../");

async function getDiscordName(userId) {
  let dbRes = await db.query(
    "SELECT discordName FROM user_accounts WHERE userId = $1",
    [userId]
  );
  return dbRes.rows[0].discordname;
}

module.exports = getDiscordName;
