const express = require('express');
const daitailRouter = express.Router();

const Product = require('../models/productModel');
//get all products
daitailRouter
.route('/')
.get((req, res, next) => {
  Product.find({})
  .then((data)=>{
     
    res.json(data)
  })
  .catch((error)=>{
    console.log('error',daerrorta)
  })

});
//creat new product
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
// get one product by id
daitailRouter
  .route('/:id')
  .get((req, res, next) => {
    Product.findById(req.params.id)
    .then((Product)=>{
       
      res.json(Product)
    })
    .catch((error)=>{
      console.log('error, no product with that id')
    })
  })
module.exports = daitailRouter;