const express = require('express');
const router = express.Router();

const Nav = require('../models/NavBar')

router.route('/').post((req, res)=>{
    const content=req.body.content;
    const newNav= new Nav({
        content
    });
    newNav.save();
})
router.route('/').get((req, res)=>{
    res.json('The router works')
})
module.exports = router;