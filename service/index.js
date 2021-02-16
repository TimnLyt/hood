const express = require("express");
const app = express();
const port = 6000;
app.use(express.json())

require('dotenv').config({ path: '../.env' });
//const data= require('../../hood/.env')

const detailRouter = require('./routers/detailRouter');




const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
 
const mongoDB = `mongodb+srv://AGT:crud21@cluster0.zqmmw.mongodb.net/offerupclone?retryWrites=true&w=majority`;;
 
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log("Connected successfully") },
    (err) => { console.log(`Connection failed with ${err}`) }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 
  'MongoDB connection error:'));
db.on('close', () => { console.log("MongoDB connection closed") });

 
 

 

app.use('/v1/detail', detailRouter);
 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});