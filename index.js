const express = require('express')
const app     = express()
const port = 4000
const HomeRouters = require("./routers/home")
const NavRouters = require("./routers/nav_router")



app.use(logger)
app.use("/v0",HomeRouters)
app.use("/nav",NavRouters)

app.get('/', (req, res) => {
  console.log("home")
  res.send("201")
  res.status("201")
})

app.get('/sell', (req, res) => {
  console.log("sell")
  res.send("201")
  res.status("201")
})

app.get('/about', (req, res) => {
  console.log("about")
  res.send("201")
  res.status("201")
})

app.get('/log in', (req, res) => {
  console.log("log in")
  res.send("201")
  res.status("201")
})

app.get('/sign in', (req, res) => {
  console.log("sign in")
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