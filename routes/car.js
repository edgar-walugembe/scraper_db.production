let express = require("express");
let router = express.Router();

/* GET CAR REQUESTS */

/* GENERAL FILTERS */
router.get("/", function (req, res) {
  res.json({ message: "cars route accessed" });
});

//All cars
router.get("/getAllCars", function (req, res, next) {
  // res.send("respond with all cars resource");
  res.render("all-cars", { title: "All Cars" });
});

//Body-type
router.get("/getCarBodyType", function (req, res, next) {
  // res.send("respond with a car body type resource");
  res.render("car-body-type", { title: "Cars basing on selected Body type" });
});

//Make
router.get("/getCarMake", function (req, res, next) {
  // res.send("respond with a car make resource");
  res.render("car-make", { title: "Cars basing on selected Makes" });
});

//Model
router.get("/getCarModel", function (req, res, next) {
  // res.send("respond with a car model resource");
  res.render("car-model", { title: "Cars basing on selected Models" });
});

//Year
router.get("/getCarYear", function (req, res, next) {
  // res.send("respond with a car year resource");
  res.render("car-year", { title: "Cars basing on selected Years" });
});

//Fuel-type
router.get("/getCarFuelType", function (req, res, next) {
  // res.send("respond with a car fuel type resource");
  res.render("car-fuel-type", { title: "Cars basing on selected Fuel type" });
});

//Price-range
router.get("/getCarPriceRange", function (req, res, next) {
  // res.send("respond with a car price range resource");
  res.render("car-price-range", {
    title: "Cars basing on selected Price range",
  });
});

/* POST CAR REQUESTS*/

module.exports = router;
