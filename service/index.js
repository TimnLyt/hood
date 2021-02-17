const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');

 
const mongoose = require("mongoose");
require("dotenv").config({ path: '../.env'});

const detailRouter = require("./routes/detailRouter");
const messageRouter = require('./routes/messageRoute')

 const navRouter = require('./navRouter');
 const userRouter = require('./userRouter');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.k6vfw.mongodb.net/MockOfferUP?retryWrites=true&w=majority`;
 
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Connected successfully");
    },
    (err) => {
      console.log(`Connection failed with ${err}`);
    }
  );

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;

db.on("error", () => console.log("MongoDB connection error:"));
db.on("close", () => {
  console.log("MongoDB connection closed");
});
app.use(express.json())
app.use(cors());

app.use("/v1/detail", detailRouter);
app.use('/v1/details',messageRouter);
app.use("/v1/item", itemRouter);
app.use('/v1/nav', navRouter);
app.use('/v1/user', userRouter);

 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
