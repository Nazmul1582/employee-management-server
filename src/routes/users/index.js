const express = require("express");
const User = require("../../models/User");
const { getUsers, createUser, verifyUser } = require("../../api/users/controllers");
const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser)
router.patch("/users/:id", verifyUser)

module.exports = router;