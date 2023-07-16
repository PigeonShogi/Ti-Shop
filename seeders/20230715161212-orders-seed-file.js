"use strict";
const orderData = require("./orders.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 從 Users 表單中擷取 id 及 role，以利生成 Orders 的外鍵。
    const users = await queryInterface.sequelize.query(
      "SELECT id, role FROM Users;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // users 只保留身分為買家的資料。
    const buyers = users.filter((user) => user.role === "buyer");
    const buyersCount = buyers.length;

    // 在 orderData 當中添增外鍵 user_id
    orderData.forEach((order, index) => {
      // 希望種子資料當中有一位買家未曾下單
      let buyerIndex = index % buyersCount;
      if (buyerIndex === 0) buyerIndex++;
      order.user_id = buyers[buyerIndex].id;
    });

    await queryInterface.bulkInsert(
      "Orders",
      Array.from(orderData, (value) => ({
        user_id: value.user_id,
        order_status: value.order_status,
        created_at: new Date(),
        updated_at: new Date(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
