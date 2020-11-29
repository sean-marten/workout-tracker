const { Schema, model } = require("mongoose");

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: [true, "Exercise type is required"],
      },
      name: {
        type: String,
        trim: true,
        required: [true, "Exercise name is required"],
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;
