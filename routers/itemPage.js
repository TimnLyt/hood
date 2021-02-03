const express = require("express")
const itemRouter = express.Router();



itemRouter.route('v1/item')
    .get(function(req, res, next) {
       console.log("items page")
       res.send("request items page")
    })
    .post(function(req,res, next) {
        res.sendStatus(404);
    });


itemRouter.route('v1/item/:id')
    .get(function (req, res, next) {
        console.log("items id page")
        res.send("request get items id page")
    })
    .put(function(req, res, next) {
        console.log("items id page")
        res.send("request put items id page")
    })
    .delete(function(req, res, next) {
        console.log("items id page")
        res.send("request delete items id page")
    });


module.exports = itemRouter;