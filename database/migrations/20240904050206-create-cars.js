"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("car-table", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Make: {
        type: Sequelize.STRING,
      },
      Model: {
        type: Sequelize.STRING,
      },
      Year: {
        type: Sequelize.INTEGER,
      },
      Price: {
        type: Sequelize.INTEGER,
      },
      Location: {
        type: Sequelize.STRING,
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
