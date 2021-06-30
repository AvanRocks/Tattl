const db = require("../");

function deleteUser(userId) {
  return db.query("DELETE FROM user_accounts WHERE userId = $1", [userId]);
}

module.exports = deleteUser;
