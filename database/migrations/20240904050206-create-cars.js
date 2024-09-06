"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("car-table", {
      car_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      Location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Make: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Trim: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Mileage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      BodyType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Exterior_Color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Interior_Color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Transmission: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DriveTrain: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      FuelType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CoverImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      OtherCarImages: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      Description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      VIN: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Doors: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Seats: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Engine: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Stock_Number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("car-table");
  },
};
