import mongoose from "mongoose"
import config from "./env.js"

async function connectDB(){
    try{
        await mongoose.connect(config.MONGO_URI);
        console.log("MongoDB is connected successfully")
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB;