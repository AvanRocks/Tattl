const express = require("express");
const app = express();
const router = require("./routes");
const rejectHttp = require("./middleware/rejectHttp");

app.use(rejectHttp);
app.use("/", router);

module.exports = app;
