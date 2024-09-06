"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    static associate(models) {
      // define relationship here
    }
  }
  Cars.init(
    {
      car_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      carId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Make: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Trim: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Mileage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      BodyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Exterior_Color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Interior_Color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Transmission: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DriveTrain: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FuelType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CoverImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OtherCarImages: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      VIN: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Doors: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Seats: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Engine: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Stock_Number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Cars",
      tableName: "car-table",
      timestamps: true,
    }
  );
  return Cars;
};
