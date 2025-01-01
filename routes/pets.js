import express from "express";
import petController from "../controllers/pets.js";

const route = express.Router();

route.post("/", petController.create);
route.get("/:id", petController.getOne);
route.get("/", petController.getAll);
route.put("/:id", petController.update);
route.delete("/:id", petController.delete);

export default route;