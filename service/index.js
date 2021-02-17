const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
require("dotenv").config();

const detailRouter = require("./detailRouter");

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.k6vfw.mongodb.net/<dbname>?retryWrites=true&w=majority`;
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
console.log("mongo Connected");
db.on("error", () => console.log("MongoDB connection error:"));
db.on("close", () => {
  console.log("MongoDB connection closed");
});

app.use("/v1/detail", detailRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
