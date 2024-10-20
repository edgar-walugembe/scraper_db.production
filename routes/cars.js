const express = require("express");
const router = express.Router();
const axios = require("axios");
const cron = require("node-cron");
const {
  createNewCars,
  fetchAllCars,
  getSelectedCars,
} = require("../controllers/car-controller");

router.get("/", fetchAllCars);

router.get("/getCar", getSelectedCars);

router.get("/body-type", function (req, res, next) {
  res.render("car-body-type", { title: "Cars basing on selected Body type" });
});

router.get("/make", function (req, res, next) {
  res.render("car-make", { title: "Cars basing on selected Makes" });
});

router.get("/model", function (req, res, next) {
  res.render("car-model", { title: "Cars basing on selected Models" });
});

router.get("/year", function (req, res, next) {
  res.render("car-year", { title: "Cars basing on selected Years" });
});

router.get("/fuel-type", function (req, res, next) {
  res.render("car-fuel-type", { title: "Cars basing on selected Fuel type" });
});

router.get("/price-range", function (req, res, next) {
  res.render("car-price-range", {
    title: "Cars basing on selected Price range",
  });
});

router.post("/new-cars", createNewCars);

module.exports = router;
