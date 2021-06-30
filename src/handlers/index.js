const { watchHandlersList } = require("../../config.json");

let watchHandlers = new Map();

watchHandlersList.forEach((fileName) => {
  const handler = require(`./${fileName}`);
  watchHandlers.set(handler.type, handler.execute);
});

async function msgRouter(msg) {
  let { type } = msg;

  if (!watchHandlers.has(type)) return;

  const handler = watchHandlers.get(type);

  handler(msg);
}

module.exports = msgRouter;
