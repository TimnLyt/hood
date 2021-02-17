
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: Number,
  item:  String,
  price: String,
  location: String,
});

const itemInfo = mongoose.model('itemInfo', itemInfoSchema);

module.exports = itemInfo;