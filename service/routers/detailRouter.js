const express = require('express');
const daitailRouter = express.Router();
 

const { products } = require('../data/mockProduct');
const Product = require('../models/Product')

daitailRouter
  .route('/:id')
  .get((req, res) => {
    id=req.params.id;
     Product.findById(id),(err, Product) => {
      if (err) { next(err) }
      
      else if (Product) { res.send(Product) }
       
      else { res.sendStatus(404) }
  };
});

module.exports = daitailRouter;