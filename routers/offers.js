const {json}= require('express');
const express = require('express');

const offersRouter=express.Router();
//offersRouter.use(express.json());
const product=[
    {name:"pen",id:1,"soled":false},
    {name:"phone",id:2,"soled":false},
    {name:"egg",id:3,"soled":false}
];
 

offersRouter.route('/')
.get((req,res,next)=>{
    res.status(200),
    res.send(product);
})
.put((req,res,next)=>{
    res.json({
        status:200,
        message:'products changed'
    })
})

offersRouter.route('/:id')
.put((req, res,next)=>{
    const id=req.params.id;
     
    if(product[id]["soled"]=req.body.soled){
        res.json(product);
    }
    
     
     
})

 
 
 






module.exports=offersRouter;