const express = require("express");
const { getUsers, createUser, verifyUser, getSingleUser } = require("../../api/users/controllers");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getSingleUser)

router.post("/users", createUser)

router.patch("/users/:id", verifyUser)

module.exports = router;