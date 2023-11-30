const getUsers = require("./getUsers")
const getSingleUser = require("./getSingleUser")
const getSalaries = require("./getSalaries")
const createUser = require("./createUser")
const verifyUser = require("./verifyUser")
const paySalary = require("./paySalary")

module.exports = {
    getUsers,
    createUser,
    verifyUser,
    getSingleUser,
    paySalary,
    getSalaries
}