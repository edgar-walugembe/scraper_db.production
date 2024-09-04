"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarMake extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CarMake.init(
    {
      Make: DataTypes.STRING,
      Model: DataTypes.STRING,
      carMakeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CarMake",
      tableName: "car_make-table",
    }
  );
  return CarMake;
};
