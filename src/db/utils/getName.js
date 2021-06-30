const db = require("../");

async function getName(userId) {
  let dbRes = await db.query(
    "SELECT name FROM user_accounts WHERE userId = $1",
    [userId]
  );
  return dbRes.rows[0].name;
}

module.exports = getName;
