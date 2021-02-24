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



module.exports = itemRouter;