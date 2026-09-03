import express from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/connection" , (req,res) =>{
    res.json({
        success: true,
        message: "Backend is connected successfully"
    })
})

export default app;