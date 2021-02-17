const mongoose = require('mongoose');

const CreatItem = new mongoose.Schema({
  itemsName: String,
  numberOfItem: Number,
  postedDate: { type: Date, default: Date.now },
  itemSold: Boolean,
  itemPrice: Number,
  body: String,
  location:String,
  keywords: [String],
});

const Create = mongoose.model('Create', CreatItem);

module.exports = Create;