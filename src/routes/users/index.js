const express = require("express");
const User = require("../../models/User");
const { getUsers, createUser } = require("../../api/users/controllers");
const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser)

module.exports = router;