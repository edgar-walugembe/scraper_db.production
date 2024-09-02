var express = require("express");
var router = express.Router();

/* GET CAR REQUESTS */

/* GENERAL FILTERS */
//All cars
router.get("/getAllCars", function (req, res, next) {
  res.send("respond with all cars resource");
});

//Body-type
router.get("/getCarBodyType", function (req, res, next) {
  res.send("respond with a car body type resource");
});

//Make
router.get("/getCarMake", function (req, res, next) {
  res.send("respond with a car make resource");
});

//Model
router.get("/getCarModel", function (req, res, next) {
  res.send("respond with a car model resource");
});

//Year
router.get("/getCarYear", function (req, res, next) {
  res.send("respond with a car year resource");
});

//Fuel-type
router.get("/getCarFuelType", function (req, res, next) {
  res.send("respond with a car fuel type resource");
});

//Price-range
router.get("/getCarPriceRange", function (req, res, next) {
  res.send("respond with a car price range resource");
});

/* POST CAR REQUESTS*/

module.exports = router;
