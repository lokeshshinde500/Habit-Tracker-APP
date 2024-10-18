import { Router } from "express";
import habitRoutes from "./habitRoutes.js";
import {
  getHabitTemplete,
  getHabitTempletes,
} from "../controllers/habitController.js";
const routes = Router();

// habit routes
routes.use("/habit", habitRoutes);

// get habit templetes
routes.get("/habitTemplete", getHabitTempletes);

// get habit templete
routes.get("/:id/habitTemplete", getHabitTemplete);

export default routes;
