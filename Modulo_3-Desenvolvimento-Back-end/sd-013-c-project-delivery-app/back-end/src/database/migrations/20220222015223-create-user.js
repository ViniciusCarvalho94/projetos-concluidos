"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING(100), allowNull: false },
      email: { type: Sequelize.STRING(100), allowNull: false },
      password: { type: Sequelize.STRING(32), allowNull: false },
      role: { type: Sequelize.STRING(20), allowNull: false },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
