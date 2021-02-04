const express = require("express");
const homeRouter = express.Router();
/** 
 * I'm not sure what the purpose of this file is. What is the 'home' 
 * resource.
 */

/** Again, you need to be consistent in your path naming */
homeRouter.route('/')
  .get((req, res) => {
    console.log("home page ")
    CreateRouterhomepage
    res.json(user)

  })

/** If you use .route above you should use it consistently */
homeRouter.route('/:id')
  .get((req, res) => {
    console.log("home page id ")

    //res.json(null) still workin on that 
    res.send("home page")
  })
  .post((req, res) => {
    console.log(" post home page id ")
    res.send("id")
  });

/** Routes that duplicate the path and method exactly will not be recognized */

module.exports = homeRouter
