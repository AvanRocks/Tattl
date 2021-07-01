const isUser = require("../utils/isUser");
const { sendMsg } = require("../utils/sendMsg");
const handlerAllowGee = require("../../handlers/general").allowGee;

function allowGee(msg) {
  if (!isUser(msg.author, "Leon")) {
    sendMsg("You are not authorized to do that");
    return;
  }

  handlerAllowGee();
}

module.exports = {
  name: "allowGee",
  description: "Allow George to send url previews",
  execute: allowGee,
  numArgs: 0,
};
