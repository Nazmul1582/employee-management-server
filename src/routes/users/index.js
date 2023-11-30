const express = require("express");
const { getUsers, createUser, verifyUser, getSingleUser, paySalary, getSalaries } = require("../../api/users/controllers");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getSingleUser)
router.get("/users/employee/salaries", verifyToken, getSalaries)

router.post("/users", createUser)
router.post("/users/employee/pay-salary", verifyToken, paySalary)

router.patch("/users/:id", verifyToken, verifyUser)

module.exports = router;