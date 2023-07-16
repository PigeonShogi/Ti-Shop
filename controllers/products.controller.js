const { fetchProductsByConditions } = require("../db/productsDao");

module.exports = {
  getProducts: async (req, res) => {
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
  },
};
