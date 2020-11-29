const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

router
  .route("/workouts")
  .get(workoutController.getLastWorkout)
  .post(workoutController.createWorkout);
router.route("/workouts/:id").put(workoutController.addExercise);
router.route("/workouts/range").get(workoutController.getWorkoutsInRange);

module.exports = router;
