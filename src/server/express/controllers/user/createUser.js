const crypto = require("crypto");
const db = require("../../../../db");
const isDiscordNameValid = require("../../../../db/utils/isDiscordNameValid");

async function createUser(req, res) {
  const { name, discordName } = req.body;

  if (!name || !discordName) {
    return res.status(400).send("Please provide a name and discordName");
  }

  let discordNameIsValid = await isDiscordNameValid(discordName);
  if (!discordNameIsValid) {
    return res.status(400).send("Discord username taken");
  }

  let token = crypto.randomBytes(40).toString("hex");

  await db.query(
    "INSERT INTO user_accounts (name, discordName, token) VALUES ($1, $2, $3)",
    [name, discordName, token]
  );

  res.send(token);
}

module.exports = createUser;
