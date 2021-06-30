function initMiddleware(io) {
  require("./auth")(io);
}

module.exports = initMiddleware;
