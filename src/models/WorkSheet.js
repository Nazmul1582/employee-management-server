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
    name: String,
    email: String,
    date: Date,
    timestamp: { type: Date, default: Date.now }
})

const WorkSheet = model("WorkSheet", workSheetSchema);

module.exports = WorkSheet;