const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const User = model('users', userSchema)
module.exports = User;