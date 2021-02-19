const express = require("express");
const createItemsRouter = express.Router();
const createItem = require("../models/createItems");

createItemsRouter.route("/").get((req, res, next) => {
  createItem.find({}, (err, posts) => {
    if (err) {
      next(err);
    }
    res.send(createItem);
  });
});
createItemsRouter.route("/").post((req, res) => {
  const itemsName = req.body.itemsName;
  const numberOfItem = req.body.nanumberOfItemme;
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

module.exports = createItemsRouter;
