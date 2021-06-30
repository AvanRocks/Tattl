//const { sendMsg } = require("./utils/sendMsg");
require("./init");
require("./commands");

async function onExit() {
  //await sendMsg("Exiting");
  process.exit(0);
}

process.on("SIGINT", onExit);
process.on("SIGTERM", onExit);
