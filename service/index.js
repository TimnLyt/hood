const express = require("express");
const app = express();
const port = 5000;
 

const detailRouter = require('./detailRouter');
 

 

app.use('/v1/detail', detailRouter);
 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});