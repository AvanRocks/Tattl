function rejectHttp(req, res, next) {
  console.log(req.protocol);
  if (req.protocol !== "https") {
    return res.status(403).send({ message: "SSL required" });
  }

  next();
}

module.exports = rejectHttp;
