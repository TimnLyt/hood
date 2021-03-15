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
    Product.findById(req.params.id)
    .then((Product)=>{
       
      res.json(Product)
    })
    .catch((error)=>{
      console.log('error, no product with that id')
    })
  })

   
module.exports = ProductRouter;