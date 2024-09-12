const express = require("express");
const router = express.Router();
const axios = require("axios");
const cron = require("node-cron");

//importing functions from the controller
const {
  createNewCar,
  fetchAllCars,
  getSelectedCars,
} = require("../controllers/car-controller");

/* GET CAR REQUESTS */

//All cars
router.get("/", fetchAllCars);

//Selected car
router.get("/:carId", getSelectedCars);

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
router.post("/new-cars", createNewCar);

// Schedule to run daily at 6:00 AM
const url = "https://scraper-db.onrender.com/cars/new-cars";

cron.schedule(
  "0 10 * * *",
  async () => {
    try {
      const response = await axios.post(url);
      console.log("Daily car POST request successful", response.data);
    } catch (error) {
      console.error("Error with daily POST request:", error);
    }
  },
  {
    timezone: "America/Toronto",
  }
);

module.exports = router;
