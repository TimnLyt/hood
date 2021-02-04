/** Be careful how you're using imports and what you're importing */
const express = require('express');
const offersRouter = express.Router();

// Do not leave code commented out in a submission

const product = [
    { name: "pen", id: 1, "soled": false },
    { name: "phone", id: 2, "soled": false },
    { name: "egg", id: 3, "soled": false }
];

offersRouter.route('/')
    .get((req, res) => {
        res.send(product);
    })
    .put((req, res) => {
        res.json({
            message: 'products changed'
        });
    });

offersRouter.route('/:id')
    .put((req, res) => {
        const id = req.params.id;

        if (product[id]["soled"] = req.body.soled) {
            res.json(product);
        }
    });

module.exports = offersRouter;