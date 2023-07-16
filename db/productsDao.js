const knex = require("./db");

async function fetchProducts() {
  try {
    const products = await knex.select("*").from("products");
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    await knex.destroy();
  }
}

module.exports = {
  fetchProducts,
};
