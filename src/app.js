const express = require('express');
const applyMiddleware = require('./middlewares/applyMiddleware');
const app = express();

const userRoutes = require("./routes/users")
const authRoutes = require("./routes/authentication/index")

// middleware 
applyMiddleware(app);
app.use(userRoutes)
app.use(authRoutes)

app.get("/", (req, res) => {
    res.send("Talent Pulse Server is running..... ")
})

app.all("*", (req, res, next) => {
    const error = new Error(`The request url(${req.url}) is invalid.`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

// const main = async() => {
//     await connectDB();

//     app.listen(port, () => {
//         console.log(`Talent Pulse is running on PORT ${port}`);
//     })
    
// }
// main();

module.exports = app;