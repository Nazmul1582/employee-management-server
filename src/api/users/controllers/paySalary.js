const Salary = require("../../../models/Salary");

const paySalary = async(req, res) => {
    const salaryInfo = req.body;
    const result = await Salary.create(salaryInfo);
    res.send(result)
}

module.exports = paySalary;