import habitModel from "../models/HabitModel.js";
import habbitTempleteModel from "../models/habitTempleteModel.js";
import userModel from "../models/userModel.js";

// get all users (only users not admins)
export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({ role: "user" });

    if (!users) {
      return res.status(404).json({
        message: "Users not founds",
        success: false,
      });
    }

    return res.status(200).json({
      users: users,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error! get all users",
      error: error.message,
      success: false,
    });
  }
};

// get user by id
export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
        success: false,
      });
    }

    return res.status(200).json({
      user: user,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error! get user",
      error: error.message,
      success: false,
    });
  }
};

// get habits of user by id
export const getUserHabits = async (req, res) => {
  try {
    const habits = await habitModel.find({ user: req.params.userId });

    if (!habits) {
      return res.status(404).json({
        message: "habits not found!",
        success: false,
      });
    }

    return res.status(200).json({
      habits,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error!",
      error: error.message,
      success: false,
    });
  }
};

// Create habit templete
export const createHabitTemplete = async (req, res) => {
  try {
    const { name, description, frequency } = req.body;

    if (!name || !description || !frequency) {
      return res.status(404).json({
        message: "All fields are required!",
        success: false,
      });
    }

    const newTemplete = {
      name,
      description,
      frequency,
    };

    const habitTemplate = await habbitTempleteModel.create(newTemplete);

    return res.status(201).json({
      message: "Habit Template created successfully.",
      habitTemplate,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error! Create fitness program",
      error: error.message,
      success: false,
    });
  }
};
