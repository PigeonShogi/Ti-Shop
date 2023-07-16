const express = require("express");
const router = express.Router();
const { getProducts } = require("../../controllers/products.controller");

// GET /api/products 使用者可以瀏覽所有商品
router.get("/", getProducts);

module.exports = router;
