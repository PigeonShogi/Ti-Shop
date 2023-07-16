"use strict";

const categoryData = require("./categories.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      Array.from(categoryData, (value) => ({
        name: value.name,
        created_at: new Date(),
        updated_at: new Date(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
