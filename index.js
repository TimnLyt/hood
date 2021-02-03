const express = require("express");
const app = express();
const port = 4000;
const HomeRouters = require("./routers/home")
const itemRouter = require("./routers/ItemPage");



app.use(logger)
app.use(express.json());
app.use("/v0",HomeRouters);
app.use("/v1", itemRouter);

app.get('/', (req, res) => {
  console.log("home")
  res.send("201")
  res.status("201")
});

app.get("/v1/item", (req, res) => {
   console.log("item")
   res.send("201")
   res.status("201")
});

 function logger (req, res, next) {
  console.log("log ")
  next()
  return
}
app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}")
})