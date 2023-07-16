const express = require("express");
const router = express.Router();
const {
  getProducts,
} = require("../../controllers/products.controller");

// GET /api/products 使用者可以瀏覽所有商品
// GET /api/products?name={name}
// 使用者可根據商品名稱搜尋特定商品。若未提供商品名稱，則顯示所有商品。
router.get("/", getProducts);

module.exports = router;
