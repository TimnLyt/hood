const express = require("express")
const itemRouter = express.Router();

itemRouter.route('/')
    .get(function(req, res, next) {
        // The term page here is a misnomer. We're not returning pages.
       console.log("items page")
       res.send("request items page")
    })
    .post(function(req,res, next) {
        res.sendStatus(404);
    });

itemRouter.route('/:id')
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