const { Cars, Sequelize, sequelize } = require("../database/models");
require("dotenv").config();

async function createNewCars(req, res) {
  try {
    const { cars } = req.body;

    if (!Array.isArray(cars) || cars.length === 0) {
      return res.status(400).send({ error: "No car data provided" });
    }

    const savedCars = [];

    for (let car of cars) {
      const existingCar = await Cars.findOne({
        where: { car_url: car.car_url },
      });

      if (!existingCar) {
        // Only create and save the car if it does not already exist
        const savedCar = await Cars.create({
          car_url: car.car_url,
          carId: car.car_id,
          Location: car.Location || "Not Available",
          Make: car.Make || "Not Available",
          Model: car.Model || "Not Available",
          Year: car.Year || "Not Available",
          Price: car.Price ? car.Price.replace(/,/g, "") : "Not Available",
          BodyType: car.BodyType || "Not Available",
          Transmission: car.Transmission || "Not Available",
          DriveTrain: car.Drivetrain || "Not Available",
          FuelType: car.FuelType || "Not Available",
          CoverImage: car.CoverImage || "Not Available",
          OtherCarImages: car.otherCarImages || "Not Available",
          Trim: car.Trim || "Not Available",
          Mileage: car.Mileage || "Not Available",
          Exterior_Color: car.ExteriorColor || "Not Available",
          Interior_Color: car.InteriorColor || "Not Available",
          Description: car.Description || "Not Available",
          VIN: car.VIN || "Not Available",
          Doors: car.Doors || "Not Available",
          Seats: car.Seats || "Not Available",
          Engine: car.Engine || "Not Available",
          Stock_Number: car.Stock_Number || "Not Available",
        });

        savedCars.push(savedCar);
      } else {
        console.log(`Car with url: ${car.car_url} already exists in database`);
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
  createNewCars,
  fetchAllCars,
  getSelectedCars,
};
