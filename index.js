const express = require("express")
const app     = express()
const port = 4000
const setInterval = require ("/seller")


app.use(logger)
app.use("/seller",sellerPageRouters)


app.get('/', (req, res) => {
  
})



const logger =( (req, res, next) => {
  next()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})