const express = require("express");
const createItemsRouter = express.Router();

const createItem = require("../models/createItems");
createItemsRouter.get("/",(req, res, next) => {
  createItem.find({}, (err, newItem) => {
    if (err) {
      next(err);
    }
    res.status(200)
    .json({newItem});
  });
});
createItemsRouter.route("/:id").post((req, res) => {
  const itemsName = req.body.itemsName;
  const numberOfItem = req.body.numberOfItem;
  const date = req.body.date;
  const itemSold = req.body.itemSold;
  const location = req.body.location;

  const newcreateItem = new createItem({
    itemsName,
    numberOfItem,
    date,
    itemSold,
    location,
  });
  newcreateItem.save();
});

createItemsRouter.route('/:id')
  .get((req, res, next) => {
    createItem.findById(req.params.id)
    .then((createItem)=>{
       
      res.json(createItem)
    })
    .catch((error)=>{
      console.log('error, no product with that id')
    })
  })

module.exports = createItemsRouter;
