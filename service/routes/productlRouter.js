const express = require('express');
const ProductRouter = express.Router();
const productController= require('../controllers/productsController');

const Product = require('../models/productModel');

//creat new product
ProductRouter.route('/').post(productController.creatProduct)
   
  
 
// get one product by id
ProductRouter
  .route('/:id')
  .get((req, res, next) => {
    Product.findById(req.params.id,(err, products)=>{
    if (err) { next(err) } 
    else if (products) {
      res.send(products);
    } else {
      res.sendStatus(404);
    }
    })
  })

   
module.exports = ProductRouter;