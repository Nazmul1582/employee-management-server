const User = require("../../../models/User");

const getSingleUser = async(req, res) => {
    const id = req.params.id;
    const result = await User.findOne({ _id: id})
    res.send(result);
}

module.exports = getSingleUser;
