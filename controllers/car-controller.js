const { Cars, Sequelize, sequelize } = require("../database/models");
const axios = require("axios");
require("dotenv").config();

//Create New Car
const cities = [
  {
    name: "Calgary",
    urls: [
      process.env.API_MASERATI_CALGARY,
      process.env.API_AUTOTRADER_CALGARY,
    ],
  },
  { name: "Seattle", urls: [process.env.API_MASERATI_SEATTLE] },
  { name: "Vancouver", urls: [process.env.API_MASERATI_VANCOUVER] },
  { name: "Victoria", urls: [process.env.API_MASERATI_VICTORIA] },
];

async function createNewCar(req, res) {
  try {
    const savedCars = [];

    for (let city of cities) {
      for (let url of city.urls) {
        const response = await axios.get(url);
        const carData = response.data;

        for (let car of carData) {
          // Check if the car_url already exists in the database
          const existingCar = await Cars.findOne({
            where: { car_url: car.car_url },
          });

          if (!existingCar) {
            // Only create and save the car if it does not already exist
            const savedCar = await Cars.create({
              car_url: car.car_url,
              carId: car.car_id,
              Location: car.Location || "",
              Make: car.Make || "",
              Model: car.Model || "",
              Year: parseInt(car.Year) || "",
              Price: car.Price ? car.Price.replace(/,/g, "") : "",
              BodyType: car.BodyType || "",
              Transmission: car.Transmission || "",
              DriveTrain: car.Drivetrain || "",
              FuelType: car.FuelType || "",
              CoverImage: car.CoverImage || "",
              OtherCarImages: car.otherCarImages || "",
              Trim: car.Trim || "", // Consistent with your preference
              Mileage: car.Mileage || "",
              Exterior_Color: car.ExteriorColor || "",
              Interior_Color: car.InteriorColor || "",
              Description: car.Description || "",
              VIN: car.VIN || "",
              Doors: car.Doors || "",
              Seats: car.Seats || "",
              Engine: car.Engine || "",
              Stock_Number: car.Stock_Number || "",
            });

            savedCars.push(savedCar);
          }
        }
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
    return res.status(200).json(cars);
    // res.render("all-cars", { title: "All Cars" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

//Get Selected Car
async function getSelectedCars(req, res) {
  try {
    const { carId } = req.query;

    if (!carId) {
      return res
        .status(400)
        .json({ message: "carId query parameter is required" });
    }

    const car = await Cars.findOne({ where: { carId: carId } });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    return res.status(200).json(car);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching car", error });
  }
}

module.exports = {
  createNewCar,
  fetchAllCars,
  getSelectedCars,
};
