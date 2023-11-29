const User = require("../../../models/User");

const verifyUser = async(req, res) => {
    const id = req.params.id;
    const verifiedUser = req.body;
    const result = await User.updateOne({ _id: id}, {$set: {isVerified: verifiedUser.isVerified}}, {upsert: true})
    res.send(result)
}

module.exports = verifyUser;
