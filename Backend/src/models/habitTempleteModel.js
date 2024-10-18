import mongoose from "mongoose";

const habbitTempletaSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const habbitTempleteModel = mongoose.model(
  "HabbitTemplete",
  habbitTempletaSchema
);

export default habbitTempleteModel;
