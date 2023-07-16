"use strict";

const bcrypt = require("bcrypt");
const userData = require("./users.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // userData 的密碼需加密處理
    for (const user of userData) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
    }

    const userBulkData = Array.from(userData, (value) => ({
      email: value.email,
      password: value.password,
      role: value.role,
      buyer_phone: value.buyer_phone,
      shipping_address: value.shipping_address,
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert("Users", userBulkData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
