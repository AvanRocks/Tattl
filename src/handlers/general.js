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
  let { discordName, url } = msg;
  let user = getUser(discordName);
  if (isUser(user, "George") && !geeIsAllowed) {
    await sendMsg(`${user} visited: <${url}>`);
  } else {
    await sendMsg(`${user} visited: ${url}`);
  }
}

module.exports = {
  type: "general",
  execute: expose,
  allowGee,
  blockGee,
};
