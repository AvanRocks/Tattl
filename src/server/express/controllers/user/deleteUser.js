const db = require("../../../../db");
const getUserId = require("../../../../db/utils/getUserId");
const dbDeleteUser = require("../../../../db/utils/deleteUser");

async function deleteUser(req, res) {
  const { token } = req.body;

  const userId = await getUserId("token", token);
  await dbDeleteUser(userId);

  res.send();
}

module.exports = deleteUser;
