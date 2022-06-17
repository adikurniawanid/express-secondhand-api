("use strict");
const { faker } = require("@faker-js/faker");
const generateUUID = require("../../api/helpers/generateUUID");

module.exports = {
  async up(queryInterface, Sequelize) {
    const dummyProdukData = [];

    for (let index = 1; index < 21; index++) {
      dummyProdukData.push({
        publicId: await generateUUID(),
        nama: faker.commerce.product(),
        deskripsi: faker.commerce.productDescription(),
        harga: faker.commerce.price(),
        userId: faker.datatype.number({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    dummyProdukData[0].publicId = "0225dec5-33a1-467f-8567-592628c2ec5f";

    await queryInterface.bulkInsert("Produk", dummyProdukData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Produk", null, {});
  },
};
