import { Router } from "express";
import {
  createHabit,
  deleteHabit,
  getHabit,
  getHabits,
  pendingHabits,
  updateHabit,
} from "../controllers/habitController.js";
const routes = Router();

// create habit
routes.post("/", createHabit);

// get habits
routes.get("/", getHabits);

// get habit by id
routes.get("/:id", getHabit);

// update habit by id
routes.patch("/:id", updateHabit);

// delete habit by id
routes.delete("/:id", deleteHabit);

// get pending habits
routes.get("/pending/:userId", async (req, res) => {
  const habits = pendingHabits(req.params.userId);
  return res.status(200).json(habits);
});

export default routes;
