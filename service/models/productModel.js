const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id:Number,
  name:  String,
  price: Number,
  Location: String,
  date: { type: Date, default: Date.now, }
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;