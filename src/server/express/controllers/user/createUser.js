const crypto = require("crypto");
const db = require("../../../../db");
const isDiscordNameValid = require("../../../../db/utils/isDiscordNameValid");

async function createUser(req, res) {
  const { name, discordName } = req.body;
  console.log(name);
  console.log(discordName);

  if (!name || !discordName) {
    return res.status(400).send("Please provide a name and discordName");
  }

  console.log("here");
  let discordNameIsValid = await isDiscordNameValid(discordName);
  console.log("there");
  if (!discordNameIsValid) {
    return res.status(400).send("Discord username taken");
  }

  let token = crypto.randomBytes(40).toString("hex");

  console.log("over here");
  await db.query(
    "INSERT INTO user_accounts (name, discordName, token) VALUES ($1, $2, $3)",
    [name, discordName, token]
  );
  console.log("over there");

  res.send(token);
  console.log("done");
}

module.exports = createUser;
