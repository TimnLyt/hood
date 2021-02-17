const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
 
require('dotenv').config({ path: '../../my-app/.env' });
//const da= require('../../my-app/.env')

 

const detailRouter = require('./routers/detailRouter');
const messageRouter = require('./routers/messageRoute')
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

app.use(express.json())
app.use(cors());

app.use('/v1/detail', detailRouter);
app.use('/v1/details', messageRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
