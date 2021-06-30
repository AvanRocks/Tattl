const router = require("express").Router();
const users = require("./users");
const event = require("./event");

router.use("/users", users);
router.use("/event", event);
router.options("/", (req, res) => res.send());

module.exports = router;
