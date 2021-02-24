
const mongoose = require('mongoose');

const ItemInfoSchema = new mongoose.Schema({
  id: Number,
  item:  String,
  price: String,
  location: String,
});

const ItemInfo = mongoose.model('ItemInfo', ItemInfoSchema);

module.exports = ItemInfo;