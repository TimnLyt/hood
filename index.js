const express = require('express')
const app     = express()
const port = 4000
const HomeRouters = require("./routers/home")

const user= [{id: "1", place: "Seattle WA", item: "Book" , price: 80 , sold: true},
             {id: "2", place: "Los Angloes CA", item: "Car" , price: 9000, sold: true},
             {id: "3", place: "Houstan TX", item: "phone", price: 300, sold: false}
]

app.use(logger)
app.use("/v0",HomeRouters)

app.get('/', (req, res) => {
  console.log("home")
  res.send("201")
  res.status("201")
})

 function logger (req, res, next) {
  console.log("log ")
  next()
  return
}
app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}")
})