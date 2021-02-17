const mongoose = require("mongoose");
require("dotenv").config();

const mockCreateItem = require("./mockCreateItem");

const createItems = require("../models/createItems");

mockCreateItem.items.forEach((item) => {
  itemData.create(item).catch((err) => console.log(err));
});

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = ` mongodb+srv://<username>:<password>@cluster0.k6vfw.mongodb.net/MockOfferUp?retryWrites=true&w=majority `;
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
