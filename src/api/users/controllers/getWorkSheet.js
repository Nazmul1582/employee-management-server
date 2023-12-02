const WorkSheet = require("../../../models/WorkSheet");

const getWorkSheet = async(req, res) => {
    let query = {};
    const email = req?.query?.email
    if(email){
        query.email = email;
    }
    const result = await WorkSheet.find(query).sort({timestamp: -1})
    res.send(result)
}

module.exports = getWorkSheet;