let io = null;

function initSocketIo(httpServer) {
  this.io = require("socket.io")(httpServer);
  require("./middleware")(this.io);
  require("./initClientSocket")(this.io);
}

module.exports = {
  io,
  initSocketIo,
};
