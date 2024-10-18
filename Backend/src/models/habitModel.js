import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  frequency: {
    type: String,
    enum: ["daily", "weekly"],
    default: "daily",
  },
  streak: {
    type: Number,
    default: 0,
  },
  lastCompleted: {
    type: Date,
    default: null,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const habitModel = mongoose.model("Habit", habitSchema);

export default habitModel;
