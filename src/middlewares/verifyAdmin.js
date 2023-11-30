const User = require("../models/User");

const verifyAdmin = async(req, res, next) => {
    const email = req.decoded.email;
    console.log(email);
    const query = { email: email }
    const user = await User.findOne(query);
    if(user?.userRole !== "admin"){
        return res.status(403).send({message: "Forbidden access"})
    }
    next();
}

module.exports = verifyAdmin;