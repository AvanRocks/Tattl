const db = require("../../../db");
const isTokenValid = require("../../../db/utils/isTokenValid");

async function authenticate(req, res, next) {
  let { token } = req.body;

  if (!token) {
    return res.status(400).send("Please provide a token");
  }

  if (await isTokenValid(token)) {
    next();
  } else {
    return res.status(400).send("Please provide a valid token");
  }
}

module.exports = authenticate;
