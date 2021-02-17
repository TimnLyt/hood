const mongoose = require('mongoose');

const CreatItem = new mongoose.Schema({
  itemsName: String,
  numberOfItem: Number,
  postedDate: { type: Date, default: Date.now },
  itemSold: Boolean,
  summary: String,
  body: String,
  keywords: [String],
});

const Create = mongoose.model('Create', CreatItem);

module.exports = Create;