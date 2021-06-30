const { sendMsg } = require("../bot/utils/message");

async function expose(url) {
  //await sendMsg("Avan is watching YouTube");
  //await sendMsg(url);
}

module.exports = {
  type: "youtube",
  execute: expose,
};
