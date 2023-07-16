const knex = require("./db");
const fieldNames = [
  "id",
  "name",
  "description",
  "price",
  "inventory",
  "category_id",
];

async function fetchProducts() {
  try {
    const products = await knex.select(fieldNames).from("products");
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function fetchProductsByName(productName) {
  try {
    const products = await knex
      .select(fieldNames)
      .from("products")
      .where("name", "like", `%${productName}%`);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}



module.exports = {
  fetchProducts,
  fetchProductsByName,
};
