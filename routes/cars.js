var express = require("express");
var router = express.Router();

/* GET CAR REQUESTS */

/* GENERAL FILTERS */
//All cars
router.get("/getAllCars", function (req, res, next) {
  res.send("respond with a resource");
});

//Body-type
router.get("/getCarBodyType", function (req, res, next) {
  res.send("respond with a resource");
});

//Make
router.get("/getCarMake", function (req, res, next) {
  res.send("respond with a resource");
});

//Model
router.get("/getCarModel", function (req, res, next) {
  res.send("respond with a resource");
});

//Year
router.get("/getCarYear", function (req, res, next) {
  res.send("respond with a resource");
});

//Fuel-type
router.get("/getCarFuelType", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST CAR REQUESTS*/

module.exports = router;
