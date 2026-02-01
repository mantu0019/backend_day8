const app = require("./src/app")
require("dotenv").config()
const connectToDb = require("./src/config/database")

connectToDb()

 

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})