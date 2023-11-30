const User = require("../../../models/User");

const makeHR = async(req, res) => {
    const id = req.params.id;
    const userRole = req.body;
    const result = await User.updateOne({ _id: id}, {$set: {userRole: userRole.role}}, {upsert: true})
    res.send(result)
}

module.exports = makeHR;