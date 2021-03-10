const mongoose = require('mongoose');

const ProductPostSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  title: { type: String, required: true },
  discription: { type: String, required: false },
  selling:{ type: Boolean, required: true },
  date: { type: Date,default: Date.now, required: true },
  image: { type: String, required: true },
  condition:{ type: String, required: false }
});

const ProductPost = mongoose.model('ProductPost', ProductPostSchema);

module.exports = ProductPost;