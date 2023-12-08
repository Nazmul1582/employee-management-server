const express = require("express");
const { getUsers, createUser, verifyUser, getSingleUser, paySalary, getSalaries, firedUser, makeHR, createWorkSheet, getWorkSheet } = require("../../api/users/controllers");
const { verifyToken, verifyAdmin, verifyHR, verifyEmployee } = require("../../middlewares");
const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:email", getSingleUser)
router.get("/users/employee/salaries", verifyToken, getSalaries)
router.get("/users/employee/work-sheet", verifyToken, getWorkSheet);

router.post("/users", createUser)
router.post("/users/employee/work-sheet", verifyToken, verifyEmployee, createWorkSheet)
router.post("/users/employee/pay-salary", verifyToken, verifyHR, paySalary)

router.patch("/users/:id", verifyToken, verifyHR, verifyUser)
router.patch("/users/admin/:id", verifyToken, verifyAdmin, firedUser)
router.patch("/users/admin/make-hr/:id", verifyToken, verifyAdmin, makeHR)

module.exports = router;