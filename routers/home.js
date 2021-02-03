
const express = require("express")
const HomeRouters = express.Router()


HomeRouters.route('/Home')
.get((req, res) => {
  console.log("home page ")
  res.json(user)
  
})

HomeRouters.get('/Home/:id', (req, res) => {
  console.log("home page id ")
  res.send("id")
})

HomeRouters.post('/Home/:id', (req, res) => {
  console.log(" post home page id ")
  res.send("id")
})

module.exports = HomeRouters