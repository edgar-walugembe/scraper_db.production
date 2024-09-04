"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarMake extends Model {
    static associate(models) {
      // define association here
    }
  }
  CarMake.init(
    {
      makeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    },
    {
      sequelize,
      modelName: "CarMake",
      tableName: "car_make-table",
      timestamps: true,
    }
  );
  return CarMake;
};
