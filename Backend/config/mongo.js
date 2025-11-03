const mongoose=require('mongoose')
require('dotenv').config()

const connectDB= async()=>{
    mongoose.connection.on("connected",()=>{console.log("mongodb connected")})
    await mongoose.connect(`${process.env.MONGO_URI}/Tourism`)
}

module.exports=connectDB