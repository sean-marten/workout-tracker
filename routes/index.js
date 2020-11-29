const router = require("express").Router();
const apiRoutes = require("./workoutRoutes");
const htmlRoutes = require("./htmlRoutes");

// /api/users
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
