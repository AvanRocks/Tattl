const { Pool } = require("pg");
const config = require("./config");
const pool = new Pool(config);
console.log(pool);

async function test() {
  try {
    const dbRes = await pool.query("SELECT * from user_accounts");
    console.log("worked");
    console.log(dbRes);
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
}
test();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
