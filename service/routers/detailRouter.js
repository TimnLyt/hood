const express = require('express');
const daitailRouter = express.Router();
let items = 'mongodb://localhost:6000/items';

const { products } = require('../data/mockProduct');
const Product = require('../models/Product')

daitailRouter
  .route('/')
  .get((req, res) => {
    res.send(items);
  });

module.exports = daitailRouter;