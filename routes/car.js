const express = require("express");
const router = express.Router();
const { getSelectedCars } = require("../controllers/car-controller");

router.get("/", async (req, res) => {
  return res.status(200).json({ message: "Selected car route opened" });
});

router.get("/:carId", getSelectedCars);

module.exports = router;
