const express = require('express');
const daitailRouter = express.Router();

const { products } = require('../../client/src/components/Product');

daitailRouter
  .route('/')
  .get((req, res) => {
    res.send(products);
  });

module.exports = daitailRouter;