const { Schema, model } = require("mongoose")

const salarySchema = new Schema({
    employee: String,
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