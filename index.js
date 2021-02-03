const express = require("express");
const app = express();
const port = 4000;
const HomeRouters = require("./routers/home")

CreateRouterHomepage
const user= [{id: "1", place: "Seattle WA", item: "Book" , price: 80 , sold: true},
             {id: "2", place: "Los Angloes CA", item: "Car" , price: 9000, sold: true},
             {id: "3", place: "Houstan TX", item: "phone", price: 300, sold: false}
]

const itemRouter = require("./routers/ItemPage");

const NavRouters = require("./routers/nav_router")





app.use(logger)

app.use(express.json());
app.use("/v1", itemRouter);

app.use("/v0",HomeRouters)
app.use("/nav",NavRouters)


app.get('/', (req, res) => {
  console.log("home")
  res.send("201")
  res.status("201")
});

app.get("/item", (req, res) => {
   console.log("item")
   res.send("201")
   res.status("201")
});

app.get('/sell', (req, res) => {
  console.log("sell")
  res.send("sell")
  res.status("sell")
})

app.get('/about', (req, res) => {
  console.log("about")
  res.send("about")
  res.status("about")
})

app.get('/login', (req, res) => {
  console.log("log in")
  res.send("log in")
  res.status("log in")
})

app.get('/signin', (req, res) => {
  console.log("sign in")
  res.send("sign in")
  res.status("sign in")
})

 function logger (req, res, next) {
  console.log("log ")
  next()
  return
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})