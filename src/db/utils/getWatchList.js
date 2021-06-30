const db = require("../");

async function getWatchList(userId) {
  let dbRes = await db.query("SELECT * from watch_list WHERE userId = $1", [
    userId,
  ]);
  let watchList = [];
  dbRes.rows.forEach((entry) => {
    watchList.push(entry.watchurl);
  });
  return watchList;
}

module.exports = getWatchList;
