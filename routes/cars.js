var express = require("express");
var router = express.Router();

/* GET CAR REQUESTS */

/* GENERAL FILTERS */
//All cars
router.get("/getAllCars", function (req, res, next) {
  res.send("respond with all cars resource");
  res.render("index", { title: "Express" });
});

//Body-type
router.get("/getCarBodyType", function (req, res, next) {
  res.send("respond with a car body type resource");
  res.render("index", { title: "Express" });
});

//Make
router.get("/getCarMake", function (req, res, next) {
  res.send("respond with a car make resource");
  res.render("index", { title: "Express" });
});

//Model
router.get("/getCarModel", function (req, res, next) {
  res.send("respond with a car model resource");
  res.render("index", { title: "Express" });
});

//Year
router.get("/getCarYear", function (req, res, next) {
  res.send("respond with a car year resource");
  res.render("index", { title: "Express" });
});

//Fuel-type
router.get("/getCarFuelType", function (req, res, next) {
  res.send("respond with a car fuel type resource");
  res.render("index", { title: "Express" });
});

//Price-range
router.get("/getCarPriceRange", function (req, res, next) {
  res.send("respond with a car price range resource");
  res.render("index", { title: "Express" });
});

/* POST CAR REQUESTS*/

module.exports = router;
