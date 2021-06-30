let botChannel = null;

async function initBotChannel() {
  botChannel = await require("./getBotChannel")();
}
initBotChannel();

function sendMsg(msgContent) {
  if (botChannel) {
    return botChannel.send(msgContent);
  } else {
    console.log("Cannot send message because client is not ready");
    return;
  }
}

module.exports = {
  sendMsg,
};
