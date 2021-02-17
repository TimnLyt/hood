const express = require("express");
const app = express();
const port = 5000;

const mongoose = require('mongoose');
require('dotenv').config();

 const detailRouter = require('./detailRouter');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.49ssl.mongodb.net/emerald?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { debug('Connected successfully'); },
    (err) => { debug(`Connection failed with ${err}`); },
  );

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;
db.on('error', () => debug('MongoDB connection error:'));
db.on('close', () => { debug('MongoDB connection closed'); });

 

 

app.use('/v1/detail', detailRouter);
 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});