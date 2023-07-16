const knex = require("./db");
const fieldNames = [
  "id",
  "name",
  "description",
  "price",
  "inventory",
  "category_id",
];

// 依照 query parameter 查詢商品。conditions 的型別是 object。
async function fetchProductsByConditions(conditions) {
  try {
    let query = knex.select(fieldNames).from("products");

    if (conditions.productName) {
      query = query.where("name", "like", `%${conditions.productName}%`);
    }

    if (conditions.priceGte) {
      query = query.where("price", ">=", conditions.priceGte);
    }

    if (conditions.priceLte) {
      query = query.where("price", "<=", conditions.priceLte);
    }

    const products = await query;

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

module.exports = {
  fetchProductsByConditions,
};
