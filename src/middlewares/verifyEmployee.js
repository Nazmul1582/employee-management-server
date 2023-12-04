const User = require("../models/User");

const verifyEmployee = async(req, res, next) => {
    const email = req.decoded.email;
    const query = { email: email }
    const user = await User.findOne(query);
    if(user?.userRole !== "employee"){
        return res.status(403).send({message: "Forbidden Access!"})
    }
    next();
}

module.exports = verifyEmployee