const express = require("express");
const router = express.Router();

//importing functions from the controller
const { createNewCar, fetchAllCars } = require("../controllers/car-controller");

/* GET CAR REQUESTS */

//All cars
router.get("/", fetchAllCars);

/* GENERAL FILTERS */
//Body-type
router.get("/body-type", function (req, res, next) {
  res.render("car-body-type", { title: "Cars basing on selected Body type" });
});

//Make
router.get("/make", function (req, res, next) {
  res.render("car-make", { title: "Cars basing on selected Makes" });
});

//Model
router.get("/model", function (req, res, next) {
  res.render("car-model", { title: "Cars basing on selected Models" });
});

//Year
router.get("/year", function (req, res, next) {
  res.render("car-year", { title: "Cars basing on selected Years" });
});

//Fuel-type
router.get("/fuel-type", function (req, res, next) {
  res.render("car-fuel-type", { title: "Cars basing on selected Fuel type" });
});

//Price-range
router.get("/price-range", function (req, res, next) {
  res.render("car-price-range", {
    title: "Cars basing on selected Price range",
  });
});

/* POST CAR REQUESTS*/
router.post("/createNewCar", createNewCar);

module.exports = router;
