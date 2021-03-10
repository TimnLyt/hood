const express = require("express");
const dateFns = require('date-fns');
const creatProductRouter = express.Router();

const ProductPost = require("../models/ProductPost");
//save product posts to databse
creatProductRouter.route("/").post((req, res) => {
    
    const title = req.body.title;
    const price = req.body.price;
    const discription = req.body.discription;
    const selling = req.body.selling;
    const date = req.body.date;
    const newProduct= new ProductPost({
        title,
        price,
        discription,
        selling,
        date
    });
    newProduct.save();
  })

  //get product pased on params
  creatProductRouter
  .route('/:id')
  .get((req, res, next) => {
    ProductPost.findById(req.params.id)
    .then((ProductPost)=>{
       
      res.json(ProductPost)
    })
    .catch((error)=>{
      console.log('error, no product with that id')
    })
  })



module.exports = creatProductRouter;