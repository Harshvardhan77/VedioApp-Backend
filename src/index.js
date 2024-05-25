import connectDB from "./db/index.js";
import dotenv from 'dotenv'

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


// import express from 'express'

// const app =express();

// ;(async () =>{
// try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",()=>{
//         console.log(error)
//         throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//         console.log(`app is listening on port ${process.env.PORT}`)
//     })

// } catch (error) {
//     console.log(error);
//     throw error;
// }

// })();