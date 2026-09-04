import express from "express";
import content from "../controllers/contentController.js";

const route = express.Router();

route.post("/",content.createContent)
route.get("/", content.getallContent)
route.get("/:id", content.getCOntentById)
route.put("/:id", content.updateContent)
route.delete("/:id", content.deleteContent)

export default route;