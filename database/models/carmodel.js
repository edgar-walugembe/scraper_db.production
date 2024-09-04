"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CarModel.init(
    {
      Model: DataTypes.STRING,
      carModelId: DataTypes.INTEGER,
      carMake: DataTypes.STRING,
      carMakeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CarModel",
      tableName: "car_model-table",
    }
  );
  return CarModel;
};
