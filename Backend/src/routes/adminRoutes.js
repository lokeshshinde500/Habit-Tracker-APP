import { Router } from "express";
import {
  createHabitTemplete,
  getUser,
  getUserHabits,
  getUsers,
} from "../controllers/adminController.js";
const routes = Router();

// admin functionality

// get all users - only user not admin
routes.get("/users", getUsers);

// get single user by id
routes.get("/:id/user", getUser);

// get user habits by id
routes.get("/:userId/habit", getUserHabits);

// create habit template
routes.post("/habitTemplete", createHabitTemplete);

export default routes;
