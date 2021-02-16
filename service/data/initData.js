const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
 
const mockProducts = require('./Product');
 
const Product = require('../models/mockProduct');
 

mockProducts.products.forEach((prod) => {
    
    Product.create(prod).catch(err => console.log(err));
    if(error){
        console.long("something went wrong");
}});

 

const user = process.env.MONGO_USER;
 
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.zqmmw.mongodb.net/offerupclone?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log("Connected successfully") },
    (err) => { console.log(`Connection failed with ${err}`) }
  );