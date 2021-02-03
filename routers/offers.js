const {json}= require('express');
const express = require('express');

const offersRouter=express.Router();

const product=[
    {name:"pen",id:1,"soled":false},
    {name:"phone",id:2,"soled":false},
    {name:"egg",id:3,"soled":false}
]