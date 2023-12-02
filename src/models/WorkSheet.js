const { Schema, model} = require("mongoose")

const workSheetSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    name: String,
    email: String
})

const WorkSheet = model("WorkSheet", workSheetSchema);

module.exports = WorkSheet;