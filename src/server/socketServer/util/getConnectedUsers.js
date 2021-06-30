const { io } = require("../");

function getConnectedUsers() {
  const users = [];
  io.of("/").sockets.forEach((socket, id) => {
    users.push(socket.userId);
  });
  return users;
}

module.exports = getConnectedUsers;
