const { Cars, Sequelize, sequelize } = require("../database/models");
require("dotenv").config();

//Create New Car
async function createNewCar(req, res) {
  try {
    const cars = await Cars.findAll();
    return res.status(200).send({ cars });
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
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

module.exports = {
  createNewCar,
  fetchAllCars,
};
