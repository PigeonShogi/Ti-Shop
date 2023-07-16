const { fetchProducts } = require("../db/productsDao");

module.exports = {
  getProducts: async (_req, res) => {
    const products = await fetchProducts();

    res.status(200).json({
      status: "200 (OK)",
      products,
    });
  },
};
