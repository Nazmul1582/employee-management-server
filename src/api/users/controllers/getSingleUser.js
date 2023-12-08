const User = require("../../../models/User");

const getSingleUser = async(req, res) => {
    const email = req.params.email;
    const result = await User.findOne({ email: email})
    res.send(result);
}

module.exports = getSingleUser;
