const User = require("../../../models/User");

const firedUser = async(req, res) => {
    const id = req.params.id;
    const isFired = req.body;
    const result = await User.updateOne({ _id: id}, {$set: {isFired: isFired.isFired}}, {upsert: true})
    res.send(result)
}

module.exports = firedUser;
