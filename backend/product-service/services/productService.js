const Product = require("../models/Product");

// Get all products from DB
const getAllProducts = async () => {
  return await Product.find();
};

// Get product by ID from DB
const getProductById = async (id) => {
  return await Product.findById(id);
};

// Create and save new product to DB
const createNewProduct = async ({ name, price, description, image }) => {
  const product = new Product({
    name,
    price,
    description,
    image,
  });
  await product.save();
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
};
