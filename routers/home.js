
const express = require("express")
const HomeRouters = express.Router()


HomeRouters.route('/Home')
.get((req, res) => {
  console.log("home page ")
 CreateRouterHomepage
  res.json(user)
  
})

HomeRouters.get('/Home/:id', (req, res) => {
  console.log("home page id ")

  //res.json(null) still workin on that 
  res.send("home page")
})

HomeRouters.get('/Home/:id', (req, res) => {
  console.log(" git home page id ")

  res.send("id")
})

HomeRouters.post('/Home/:id', (req, res) => {
  console.log(" post home page id ")
  res.send("id")
})

module.exports = HomeRouters
