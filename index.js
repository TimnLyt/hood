const express = require("express");
const app = express();
const port = 4000;
/** 
 * The naming in your app should show consistent casing, use of semicolons as 
 * delimiters, quotation marks, and the organization of import statements.
*/
const homeRouter = require("./routers/homeRouter");
const offerRouter = require('./routers/offerRouter');
const itemRouter = require("./routers/itemRouter");
const navRouter = require("./routers/navRouter");

/** 
 * There was an uncommented variable/thing here that prevented your app from 
 * even running 
*/

/** Formatting your code matters */
const user = [
  {id: "1", place: "Seattle WA", item: "Book" , price: 80 , sold: true},
  {id: "2", place: "Los Angloes CA", item: "Car" , price: 9000, sold: true},
  {id: "3", place: "Houstan TX", item: "phone", price: 300, sold: false}
]

function logger (req, res, next) {
  console.log("log ");
  next();
  return
}

/** Excessive newlines and spacing makes it very hard to read the code */
app.use(logger);
app.use(express.json());

/** 
 * You're using routers inconsistently. Path naming should be consistent among
 * your different routes.
 */

app.use("/v1/items", itemRouter);
app.use("/v1/home", homeRouter);
app.use("/v1/offers", offerRouter);
app.use("/v1/nav", navRouter);
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});