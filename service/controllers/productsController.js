const Product = require("../models/productModel");

exports.creatProduct=(req,res,next)=>{


    const product={
        title:req.body.title,
        discription:req.body.discription ,
        price:req.body.price,
        selling: req.body.selling,
        date:req.body.data  ,
         
    };
    Product.create(product)
    .then((newProduct) => {
        res.send({ productId: newProduct._id });
      })
      .catch((err) => {
        next(err);
      });
}