const express = require("express")
const itemRouter = express.Router();


itemRouter.route('/item')
    .get(function(req, res, next) {
        console.log("item page")
        res.send("item page")
    })
    .post(function(req,res, next) {
        res.sendStatus(404);
    });


itemRouter.route('/item/:id')
    .get(function (req, res, next) {
        res.sendStatus(503);
    })
    .put(function(req, res, next) {
        res.sendStatus(503);
    })
    .delete(function(req, res, next) {
        res.sendStatus(503);
    });


module.exports = itemRouter;