const User = require("../models/User");

const verifyHR = async(req, res, next) => {
    const email = req.decoded.email;
    const query = { email: email }
    const user = await User.findOne(query);
    if(user?.userRole !== "hr"){
        return res.status(403).send({message: "Forbidden access"})
    }
    next();
}

module.exports = verifyHR;