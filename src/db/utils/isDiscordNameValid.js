const db = require("../");

async function isDiscordNameValid(discordName, token) {
  let dbRes;
  if (token) {
    dbRes = await db.query(
      "SELECT * FROM user_accounts WHERE discordName = $1 AND token != $2",
      [discordName, token]
    );
  } else {
    dbRes = await db.query(
      "SELECT * FROM user_accounts WHERE discordName = $1",
      [discordName]
    );
  }
  return dbRes.rowCount === 0;
}

module.exports = isDiscordNameValid;
