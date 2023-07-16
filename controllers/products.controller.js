const { fetchProducts, fetchProductsByName } = require("../db/productsDao");

module.exports = {
  getProducts: async (req, res) => {
    let products;
    const productName = req.query.name;
    console.log({ productName });

    if (!productName) {
      products = await fetchProducts();
    } else {
      products = await fetchProductsByName(productName);
    }

    res.status(200).json({
      status: "200 (OK)",
      products,
    });
  },
};
