const http = require("http");
const app = require("./express");
const httpServer = http.createServer(app);
require("./socketServer").initSocketIo(httpServer);

require("dotenv").config();
const port = process.env.PORT;

// you can provide a callback as the second
// argument if needed
httpServer.listen(port);
