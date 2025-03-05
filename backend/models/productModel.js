const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true }, // e.g., Electronics, Clothing, Furniture
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    supplier: {
      name: { type: String, required: true },
      contactEmail: { type: String, required: true },
      contactPhone: { type: String, required: true },
      rating: { type: Number, min: 1, max: 5 },
    },
  });
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product;