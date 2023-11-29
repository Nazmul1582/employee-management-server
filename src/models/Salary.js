const { Schema, model } = require("mongoose")

const salarySchema = new Schema({
    name: String,
    email: String,
    image: String,
    designation: String,
    salary: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    transactionId: String,
})

const Salary = model("salary", salarySchema)

module.exports = Salary;