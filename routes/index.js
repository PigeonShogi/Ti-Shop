const express = require("express");
const router = express.Router();
const products = require("./modules/products");
const { getRoot } = require("../controllers/index.controller");

router.use("/api/products", products);
router.get("/", getRoot);

module.exports = router;
