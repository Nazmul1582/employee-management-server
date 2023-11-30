const express = require("express");
const { getUsers, createUser, verifyUser, getSingleUser, paySalary, getSalaries } = require("../../api/users/controllers");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getSingleUser)
router.get("/users/employee/salaries", getSalaries)

router.post("/users", createUser)
router.post("/users/employee/pay-salary", paySalary)

router.patch("/users/:id", verifyUser)

module.exports = router;