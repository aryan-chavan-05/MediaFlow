import dotenv from "dotenv"
dotenv.config();

if(!process.env.MONGO_URI){
    console.log("MONGO_URI env have an error")
}

if(!process.env.PORT){
    console.log("PORT env have an error")
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT
}

export default config;