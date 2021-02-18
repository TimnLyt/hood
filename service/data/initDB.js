const mongoose = require("mongoose");
require("dotenv").config();

 
const mockProducts = require('./mockProduct');
 
const Product = require('../models/mockProduct');
 

mockProducts.products.forEach((prod) => {
    
    Product.create(prod).catch(err => console.log(err));
    if(error){
        console.long("something went wrong");
}});
 

const mockItemInfo = require('./mockItemInfo');

const ItemInfo = require('../models/ItemInfo');

mockItemInfo.info.forEach((info) => {
  ItemInfo.create(info).catch(err => console.log(err));
});

const mockCreateItem = require("./mockCreateItem");

const createItems = require("../models/createItems");

mockCreateItem.items.forEach((item) => {
  itemData.create(item).catch((err) => console.log(err));
});
 

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = ` mongodb+srv://${user}:${password}@cluster0.k6vfw.mongodb.net/MockOfferUp?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Connected successfully");
    },
    (err) => {
      console.log(`Connection failed with ${err}`);
    }
  );
