"use strict";
const userData = require("./users.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      Array.from(userData, (value) => ({
        email: value.email,
        password: value.password,
        role: value.role,
        buyer_phone: value.buyer_phone,
        shipping_address: value.shipping_address,
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
