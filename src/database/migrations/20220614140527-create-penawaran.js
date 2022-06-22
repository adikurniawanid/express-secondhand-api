"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Penawaran", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      penawarId: {
        type: Sequelize.INTEGER,
      },
      produkId: {
        type: Sequelize.INTEGER,
      },
      harga: {
        type: Sequelize.INTEGER,
      },
      statusPenawaranId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Penawaran");
  },
};
