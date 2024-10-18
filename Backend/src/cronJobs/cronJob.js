import cron from "node-cron";
import habitModel from "../models/HabitModel.js";
import { pendingHabits } from "../controllers/habitController.js";

// schedule task reminder every day at 8 AM
const cronExpression = "0 8 * * *";

cron.schedule(cronExpression, async () => {
  const users = await habitModel.distinct("user");

  for (const userId of users) {
    const pendingHabit = await pendingHabits(userId);
    if (pendingHabit.length > 0) {
      console.log(`User ${userId} has pending habits:`, pendingHabit);
      // we can also send email for reminder
    }
  }
});
