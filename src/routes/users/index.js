const express = require("express");
const { getUsers, createUser, verifyUser, getSingleUser, paySalary } = require("../../api/users/controllers");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getSingleUser)

router.post("/users", createUser)
router.post("/users/employee/pay-salary", paySalary)

router.patch("/users/:id", verifyUser)

module.exports = router;