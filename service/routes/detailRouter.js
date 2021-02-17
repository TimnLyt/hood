const express = require('express');
const daitailRouter = express.Router();

const Product = require('../models/productModel');

daitailRouter
  .route('/')
  .get((req, res, next) => {
    Product.find({}, (err, posts) => {
      if (err) { next(err) }
      res.send(Product);
    });
});
daitailRouter.route('/').post((req, res)=>{
  const id=req.body.id;
  const name=req.body.name;
  const price=req.body.price;
  const Location=req.body.Location;
  const newProduct= new Product({
      id,
      name,
      price,
      Location
  });
  newProduct.save();
})


module.exports = daitailRouter;