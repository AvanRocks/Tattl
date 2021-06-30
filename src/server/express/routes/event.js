const express = require("express");
const router = require("express").Router();

const handleEvent = require("../controllers/event/handleEvent");
const auth = require("../middleware/authenticate");

router.use(express.json());

router.post("/", auth, handleEvent);

module.exports = router;
