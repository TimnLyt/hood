const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CreatItemSchema = new mongoose.Schema({
  itemsName: String,
  numberOfItem: Number,
  date: { type: Date, default: Date.now },
  itemSold: Boolean,
  itemPrice: Number,
  location: String,
  keywords: [String],
});

const Create = mongoose.model("createItem", CreatItemSchema);

module.exports = Create;
