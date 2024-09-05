const { Cars, Sequelize, sequelize } = require("../database/models");
const axios = require("axios");
require("dotenv").config();

//Create New Car
const cities = [
  { name: "Calgary", url: process.env.API_CALGARY },
  { name: "Seattle", url: process.env.API_SEATTLE },
  { name: "Vancouver", url: process.env.API_VANCOUVER },
  { name: "Victoria", url: process.env.API_VICTORIA },
];

async function createNewCar(req, res) {
  try {
    const savedCars = [];

    for (let city of cities) {
      const response = await axios.get(city.url);
      const carData = response.data;

      for (let car of carData) {
        const savedCar = await Cars.create({
          car_url: car.car_url,
          carId: car.car_id,
          Location: car.Location || "",
          Make: car.Make || "",
          Model: car.Model || "",
          Year: parseInt(car.Year) || "",
          Price: car.Price ? car.Price.replace(/,/g, "") : "",
          BodyType: "",
          Transmission: "",
          DriveTrain: "",
          FuelType: "",
          CoverImage: car.Image || "",
          OtherCarImages: JSON.stringify([]),
          // Optional fields, setting to blank
          Trim: "",
          Mileage: "",
          Exterior_Color: "",
          Interior_Color: "",
          Description: "",
          VIN: "",
          Doors: "",
          Seats: "",
          Engine: "",
          Stock_Number: "",
        });

        savedCars.push(savedCar);
      }
    }

    return res.status(200).send({ savedCars });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

//Get All Cars
async function fetchAllCars(req, res) {
  try {
    const cars = await Cars.findAll();
    return res.status(200).send({ cars });
    // res.render("all-cars", { title: "All Cars" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

module.exports = {
  createNewCar,
  fetchAllCars,
};
