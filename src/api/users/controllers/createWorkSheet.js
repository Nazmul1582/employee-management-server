const WorkSheet = require("../../../models/WorkSheet");

const createWorkSheet = async(req, res) => {
    const sheet = req.body;
    const result = await WorkSheet.create(sheet)
    res.send(result);
}

module.exports = createWorkSheet;