const db = require("..");
const format = require("pg-format");

async function getUserId(colName, value) {
  let queryStr = format(
    "SELECT userId FROM user_accounts WHERE %I = %L",
    colName,
    value
  );
  let dbRes = await db.query(queryStr);
  if (dbRes.rows[0]) {
    return dbRes.rows[0].userid;
  } else {
    return null;
  }
}

module.exports = getUserId;
