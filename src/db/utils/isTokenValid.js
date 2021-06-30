const db = require("../");

async function isTokenValid(token) {
  let dbRes = await db.query(
    "SELECT EXISTS ( SELECT 1 FROM user_accounts WHERE token = $1 )",
    [token]
  );
  return dbRes.rows[0].exists === true;
}

module.exports = isTokenValid;
