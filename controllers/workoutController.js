const db = require("../model");

module.exports = {
  getLastWorkout: async (_req, res) => {
    try {
      const workouts = await db.Workout.find();
      const sortedWorkouts = workouts.sort((a, b) => b.day - a.day).reverse();
      return res.json(sortedWorkouts).status(200);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  addExercise: async (req, res) => {
    const { id } = req.params;
    try {
      const workout = await db.Workout.findById(id);
      console.log(workout);
      workout.exercises.push(req.body);
      await workout.save();
      return res.send(workout).status(200);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  createWorkout: async (_req, res) => {
    try {
      const workout = await db.Workout.create({ type: "Workout" });
      workout.save();
      return res.json(workout).status(200);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  getWorkoutsInRange: async (_req, res) => {
    try {
      const workouts = await db.Workout.find();
      const sortedWorkouts = workouts.sort((a, b) => b.day - a.day);
      return res.json(sortedWorkouts.slice(0, 7)).status(200);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};
