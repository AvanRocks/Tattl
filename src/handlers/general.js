const { sendMsg } = require("../bot/utils/sendMsg");
const { getUser } = require("../bot/utils/getUser");
const isUser = require("../bot/utils/isUser");

let geeIsAllowed = true;

function allowGee() {
  if (geeIsAllowed) {
    sendMsg("Gee is already allowed");
  } else {
    geeIsAllowed = true;
    sendMsg("Gee is now allowed");
  }
}

function blockGee() {
  if (!geeIsAllowed) {
    sendMsg("Gee is already blocked");
  } else {
    geeIsAllowed = false;
    sendMsg("Gee is now blocked");
  }
}

async function expose(msg) {
  let { discordName, url, title } = msg;
  let user = getUser(discordName);
  let logStr = "";
  if (user && isUser(user, "George") && !geeIsAllowed) {
    logStr = `${user} visited: <${url}>`;
  } else {
    logStr = `${user} visited: ${url}`;
  }
  logStr += `\n${title}`;
  await sendMsg(logStr);
}

module.exports = {
  type: "general",
  execute: expose,
  allowGee,
  blockGee,
};
