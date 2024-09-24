const express = require("express");
const router = express.Router();
const { Cars, Sequelize, sequelize } = require("../database/models");

router.get("/:carId", async (req, res) => {
  const carId = req.params.carId;
  try {
    const car = await Cars.findOne({ where: { carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.status(200).json({ car });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
