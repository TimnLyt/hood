const express = require("express");
const router = express.Router();

const User = require("../models/UserProfile");

router.post("/users/profile").post((req, res) => {
  const content = req.body.content;
  const newUser = new User({
    content,
  });
  newUser.save();
});
router.route("/").get((req, res) => {
  res.json("The router works");
});
module.exports = router;
