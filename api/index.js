const router = require("express").Router();

// Mount
router.use("/employees", require("./Employees"));
router.use("/jobs", require("./jobs"));
router.use("/locations", require("./locations"));
router.use("/employeesstats", require("./stats"));

// Handling 404
router.use("*", (req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next();
});

module.exports = router;
