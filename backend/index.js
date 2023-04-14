import server from "./config/server.js"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const port = process.env.PORT1 ?? process.env.PORT2
mongoose.set("strictQuery", false);
server.listen(port, async ()=>{
    console.log("listening on port " + port)
    try {
        await mongoose.connect(process.env.DATABASE_URL)

        console.log("Database Connected")
    } catch (err) {
        console.log(err)
    }
})