const express = require("express");
const Product = require("../models/ProductModel");
const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

///////ROUTES/////////
router.post("/", createProduct);
router.get("/:id", getProductById);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
