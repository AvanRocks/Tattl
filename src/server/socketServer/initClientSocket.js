const getUserId = require("../../db/utils/getUserId");

async function setUserId(socket) {
  let token = socket.handshake.auth.token;
  const userId = await getUserId("token", token);
  console.log(`user connected with userId: ${userId}`);
  socket.userId = userId;
}

function initClientSocket(io) {
  io.on("connection", setUserId);
}

module.exports = initClientSocket;
