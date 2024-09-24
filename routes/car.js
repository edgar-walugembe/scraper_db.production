const express = require("express");
const router = express.Router();
const { getSelectedCars } = require("../controllers/car-controller");

router.get("/", getSelectedCars);

module.exports = router;
