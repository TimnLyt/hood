const express = require('express');
//const { route } = require('./detailRouter');
const router = express.Router();

 
const Message = require('../models/messageModel')
 
router.route('/').post((req, res)=>{
    const content=req.body.content;
    const newMessage= new Message({
        content
    });
    newMessage.save();
})
router.route('/').get((req, res)=>{
    res.json('it works')
})
module.exports = router;