const express = require('express')
const app     = express()
const port = 4000
const HomeRouters = require("./routers/home")
const offersRouters=require('./routers/offers')

app.use(express.json());
app.use(logger)
app.use("/v0",HomeRouters)
app.use("/offers",offersRouters)

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
app.use((req,res,next)=>{
  res.status(404);
  res.send({
      error:'not found'
  });
})
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})