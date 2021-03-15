const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  title: { type: String, required: true },
  discription: { type: String, required: false },
  selling:{ type: Boolean, required: true },
  date: { type: Date,default: Date.now, required: true },
  image:{ type: String, required: false },
  
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;