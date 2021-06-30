const express = require("express");
const router = require("express").Router();

const createUser = require("../controllers/user/createUser");
const updateUser = require("../controllers/user/updateUser");
const getUser = require("../controllers/user/getUser");
const deleteUser = require("../controllers/user/deleteUser");
const auth = require("../middleware/authenticate");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/loadProfile", auth, getUser);
router.post("/", createUser);
router.put("/", auth, updateUser);
router.delete("/", auth, deleteUser);

module.exports = router;
