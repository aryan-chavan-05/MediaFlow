import app from "./app.js"
import config from "./config/env.js"
import connectDB from "./config/db.js"

connectDB();

app.listen(config.PORT, () => {
    console.log("Server is running on port 5000");
});