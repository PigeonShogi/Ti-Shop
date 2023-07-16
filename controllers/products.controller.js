const { fetchProductsByConditions } = require("../db/productsDao");

module.exports = {
  getProducts: async (req, res) => {
    try {
      const { productName, priceGte, priceLte } = req.query;

      const products = await fetchProductsByConditions({
        productName,
        priceGte,
        priceLte,
      });

      res.status(200).json({
        status: "200 (OK)",
        products,
      });
    } catch (error) {
      console.error("Error in getting products:", error);
      res.status(500).json({
        status: "500 (Internal Server Error)",
        message: "An error occurred while fetching products.",
      });
    }
  },
};
