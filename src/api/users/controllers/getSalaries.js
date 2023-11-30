const Salary = require("../../../models/Salary")

const getSalaries = async(req, res) => {
    let query = {}
    const email = req?.query?.email;
    if(email){
        query.email = email;
    }
    const result = await Salary.find(query)
    res.send(result)
}

module.exports = getSalaries;