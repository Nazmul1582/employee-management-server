require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
const port = process.env.PORT || 5000;
const http = require("http")
const server = http.createServer(app)


const main = async() => {
  await connectDB();

  server.listen(port, () => {
      console.log(`Talent Pulse is running on PORT ${port}`);
  })
  
}
main();