const express = require('express')
const app     = express()
const port = 4000
const HomeRouters = require("./routers/home")
const offersRouter=require('./routers/offers')


app.use(logger)
app.use("/v0",HomeRouters)
app.use('/api/v1/offers',offersRouter)

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