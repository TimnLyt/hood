const express = require("express");
const itemRouter = express.Router();

const ItemInfo = require('../models/ItemInfo');

itemRouter.route("/")
  .get((req, res, next) => {
    ItemInfo.find({}, (err, info) => {
      if (err) { next(err) }
      res.send(info);
    });
});

itemRouter.route('/:id')
  .get((req, res, next)=>{
    ItemInfo.findById(req.params.id, (err, item) => {
      if (err){
        next(err);
      } else if (item){
        res.send(item);
      } else {
        res.sendStatus(404)
      }

    }); 
  });



module.exports = itemRouter;