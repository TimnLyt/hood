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
      const images = req.file;
       
      if (!images) {
        res.status(400);
        res.send({ error: 'No file selected' });
      } else {
         return res.json({ Successs:true, image:images.path,
        filename: images.fieldname })
        console.log(images)
        }
    } catch (err) {
      next(err);
    }
     
  });

module.exports = uploadsRouter;
