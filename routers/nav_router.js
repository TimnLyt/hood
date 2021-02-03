const express = require("express")
const NavRouters = express.Router()


NavRouters.route('/Sell')
.get((req, res) => {
  console.log("sell page ")
  res.send("sell page")
})

NavRouters.get('/Sell/:id', (req, res) => {
  console.log(" get sell page id ")
  res.send("id")
})

NavRouters.post('/Sell/:id', (req, res) => {
  console.log(" post sell page id ")
  res.send("id")
})


NavRouters.route('/About')
.get((req, res) => {
  console.log("about page ")
  res.send("about page")
})

NavRouters.get('/About/:id', (req, res) => {
  console.log(" get about page id ")
  res.send("id")
})

NavRouters.post('/About/:id', (req, res) => {
  console.log(" post about page id ")
  res.send("id")
})


NavRouters.route('/Log In')
.get((req, res) => {
  console.log("log in page ")
  res.send("log in page")
})

NavRouters.get('/Log In/:id', (req, res) => {
  console.log(" get log in page id ")
  res.send("id")
})

NavRouters.post('/Log In/:id', (req, res) => {
  console.log(" post log in page id ")
  res.send("id")
})


NavRouters.route('/Sign In')
.get((req, res) => {
  console.log("sign in page ")
  res.send("sign in page")
})

NavRouters.get('/Sign In/:id', (req, res) => {
  console.log(" get sign in page id ")
  res.send("id")
})

NavRouters.post('/Sign In/:id', (req, res) => {
  console.log(" post sign in page id ")
  res.send("id")
})

module.exports = NavRouters
