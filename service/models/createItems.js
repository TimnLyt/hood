const mongoose = require("mongoose");
//const Schema = mongoose.Schema

const CreatItemSchema = new mongoose.Schema({
  itemsName: String,
  numberOfItem: Number,
  date: { type: Date, default: Date.now },
  itemSold: Boolean,
  itemPrice: Number,
  location: String,
 
});

const createItem = mongoose.model("createItem", CreatItemSchema);

module.exports = createItem;
