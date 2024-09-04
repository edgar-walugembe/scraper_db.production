"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    static associate(models) {
      // define association here
    }
  }
  CarModel.init(
    {
      modelId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      Model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Make: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      makeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CarModel",
      tableName: "car_model-table",
      timestamps: true,
    }
  );
  return CarModel;
};
