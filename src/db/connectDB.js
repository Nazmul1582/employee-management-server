const mongoose = require("mongoose")
require("dotenv").config();

const getConnectionString = () => {
    let connectionUrl;
    if(process.env.NODE_ENV === "development"){
        connectionUrl = process.env.DB_LOCAL
        connectionUrl = connectionUrl.replace("<username>", process.env.DB_LOCAL_USER)
        connectionUrl = connectionUrl.replace("<password>", process.env.DB_LOCAL_PASSWORD)
    }else{
        connectionUrl = process.env.DB_PROD
    }
    return connectionUrl
}

const connectDB = async() => {
    console.log("connecting to database...");
    const mongodbUrl = getConnectionString();
    await mongoose.connect(mongodbUrl)
    console.log('connected to database');
}

module.exports = connectDB;