const applyMiddleware = require("./applyMiddleware")
const verifyToken = require("./verifyToken")
const verifyAdmin = require("./verifyAdmin")
const verifyHR = require("./verifyHR")
const verifyEmployee = require("./verifyEmployee")

module.exports = {
    applyMiddleware,
    verifyToken,
    verifyAdmin,
    verifyHR,
    verifyEmployee
}