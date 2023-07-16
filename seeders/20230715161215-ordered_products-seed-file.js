"use strict";
const orderedProductData = require("./ordered_products.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 從 orders 表單中擷取 id，以利生成 OrderedProduct 的外鍵。
    const orders = await queryInterface.sequelize.query(
      "SELECT id FROM Orders;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // 從 products 表單中擷取 id，以利生成 OrderedProduct 的外鍵。
    const products = await queryInterface.sequelize.query(
      "SELECT id FROM Products;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert(
      "OrderedProducts",
      Array.from(orderedProductData, (orderedproduct, index) => ({
        order_id: orders[index].id,
        product_id: products[index].id,
        amount: orderedproduct.amount,
        created_at: new Date(),
        updated_at: new Date(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderedProducts", null, {});
  },
};
