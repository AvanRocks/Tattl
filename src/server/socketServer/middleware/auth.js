const isTokenValid = require("../../../db/utils/isTokenValid");

function initAuth(io) {
  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error("Missing token"));
    }

    let tokenIsValid = await isTokenValid(token);
    if (!tokenIsValid) {
      return next(new Error("Invalid token"));
    }

    socket.token = token;
    next();
  });
}

module.exports = initAuth;
