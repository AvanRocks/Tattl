const isUser = require("../utils/isUser");
const { sendMsg } = require("../utils/sendMsg");
const handlerBlockGee = require("../../handlers/general").blockGee;

function blockGee(msg) {
  if (!isUser(msg.author, "Leon")) {
    sendMsg("You are not authorized to do that");
    return;
  }

  handlerBlockGee();
}

module.exports = {
  name: "blockGee",
  description: "Block George from sending url previews",
  execute: blockGee,
  numArgs: 0,
};
