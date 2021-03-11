const express = require("express");
const multer = require('multer');
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
      const productImage = req.file;
       
      if (! productImage) {
        res.status(400);
        res.send({ error: 'No file selected' });
      } else {
        res.send({ message: 'Success' });
      }
    } catch (err) {
      next(err);
    }
  });

module.exports = uploadsRouter;
