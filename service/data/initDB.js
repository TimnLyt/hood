const mongoose = require("mongoose");
require("dotenv").config({path: "./.env"});

const mockProducts = require("./mockProduct");
const mockItemInfo = require("./mockItemInfo");
const mockCreateItem = require("./mockCreateItem");

const Product = require("../models/productModel");
const ItemInfo = require("../models/ItemInfo");
const createItem = require("../models/createItems");

mockProducts.products.forEach((product) => {
  Product.create(product).catch((err) => console.log(err));
  
  
});

mockItemInfo.info.forEach((info) => {
  ItemInfo.create(info).catch((err) => console.log(err));
});

mockCreateItem.items.forEach((item) => {
  createItem.create(item).catch((err) => console.log(err));
});

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = ` mongodb+srv://${user}:${password}@cluster0.k6vfw.mongodb.net/MockOfferUp?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log('Connected successfully from InitDB'); },
    (err) => { console.log(`Connection failed with ${err}`); },
  );

