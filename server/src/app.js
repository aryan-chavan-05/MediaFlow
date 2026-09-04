import express from "express"
import cors from "cors"
import contentRoute from "./routers/contentRoute.js"
import errorMiddleware from "./middlewares/error.middleware.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use(errorMiddleware);

app.use("/api/content", contentRoute)

export default app;