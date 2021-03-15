const express = require("express");
const multer = require('multer');
const path=require('path')
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, '../resources/uploads');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage});
 
const uploadsRouter = express.Router();

uploadsRouter.route('/')
  .post(upload.single('image'), (req, res, next) => {
    try {
      const image = req.file;
       
      if (!image) {
        res.status(400);
        res.send({ error: 'No file selected' });
      } else {
        res.send({ message: 'Success' });
        console.log(image)
        }
    } catch (err) {
      next(err);
    }
     
  });

module.exports = uploadsRouter;
