"use strict";
const productData = require("./products.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 從 categories 表單中擷取 id，以利生成 Products 的外鍵。
    const categories = await queryInterface.sequelize.query(
      "SELECT id FROM Categories;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert(
      "Products",
      Array.from(productData, (product, index) => ({
        name: product.name,
        description: product.description,
        price: product.price,
        inventory: product.inventory,
        category_id: categories[index].id,
        created_at: new Date(),
        updated_at: new Date(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
