"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING(100), allowNull: false },
      price: { type: Sequelize.DECIMAL(4, 2), allowNull: false },
      urlImage: {
        type: Sequelize.STRING(200),
        allowNull: false,
        defaultValue: "",
        field: "url_image"
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
