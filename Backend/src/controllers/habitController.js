import habitModel from "../models/HabitModel.js";
import habbitTempleteModel from "../models/habitTempleteModel.js";

// create habit
export const createHabit = async (req, res) => {
  try {
    const { name, description, frequency } = req.body;

    // All fields are required!
    if (!name || !description || !frequency) {
      return res.status(400).json({
        message: "All fields are required!",
        success: false,
      });
    }

    // store data
    const newHabit = {
      name,
      description: description,
      frequency,
      user: req.user.id,
    };

    const habit = await habitModel.create(newHabit);

    return res.status(201).json({
      message: "Habit created successfully.",
      habit,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error!",
      success: false,
      error: error.message,
    });
  }
};

// get habits
export const getHabits = async (req, res) => {
  try {
    const habits = await habitModel.find({ user: req.user.id });

    // habit not found
    if (!habits) {
      return res.status(404).json({
        message: "Habits not found!",
        success: false,
      });
    }

    return res.status(200).json({
      habits,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error!",
      success: false,
      error: error.message,
    });
  }
};

// get habit
export const getHabit = async (req, res) => {
  try {
    const habit = await habitModel.findById(req.params.id);

    // habit not found
    if (!habit) {
      return res.status(404).json({
        message: "Habit not found!",
        success: false,
      });
    }

    return res.status(200).json({
      habit,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error!",
      success: false,
      error: error.message,
    });
  }
};

// update habit
export const updateHabit = async (req, res) => {
  try {
    const habit = await habitModel.findById(req.params.id);

    // habit not found
    if (!habit) {
      return res.status(404).json({
        message: "Habit not found!",
        success: false,
      });
    }

    const { name, description, frequency, streak, lastCompleted } = req.body;

    // update data
    habit.name = name || habit.name;
    habit.description = description || habit.description;
    habit.frequency = frequency || habit.frequency;
    habit.streak = streak || habit.streak;
    habit.lastCompleted = lastCompleted || habit.lastCompleted;

    habit.save({ new: true });

    return res.status(200).json({
      message: "Habit updated successfully.",
      habit,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error!",
      success: false,
      error: error.message,
    });
  }
};

// delete habit
export const deleteHabit = async (req, res) => {
  try {
    const habit = await habitModel.findByIdAndDelete(req.params.id);

    // habit not found
    if (!habit) {
      return res.status(404).json({
        message: "Habit not found!",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Habit deleted successfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error!",
      success: false,
      error: error.message,
    });
  }
};

// get habit templetes
export const getHabitTempletes = async (req, res) => {
  try {
    const habitTempletes = await habbitTempleteModel.find();

    // habitTempletes not founds
    if (!habitTempletes) {
      return res.status(404).json({
        message: "Habit Templetes not found!",
        success: false,
      });
    }

    return res.status(200).json({
      habitTempletes,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error!",
      success: false,
      error: error.message,
    });
  }
};

// get habit templete
export const getHabitTemplete = async (req, res) => {
  try {
    const habbitTemplete = await habbitTempleteModel.findById(req.params.id);

    // habbit Templete not found
    if (!habbitTemplete) {
      return res.status(404).json({
        message: "Habbit Templete not found!",
        success: false,
      });
    }

    return res.status(200).json({
      habbitTemplete,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error!",
      success: false,
      error: error.message,
    });
  }
};

// get pending habits
export const pendingHabits = async (userId) => {
  //  start of the day
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  //  more than a week ago
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  const habits = await habitModel.find({ user: userId });

  return habits.filter((habit) => {
    // Determine if the habit is pending based on last completed date
    return habit.lastCompleted < lastWeek || habit.lastCompleted < today;
  });
};
