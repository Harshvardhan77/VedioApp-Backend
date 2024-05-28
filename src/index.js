import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})


connectDB().
then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongo db ! connection error", error)
})
