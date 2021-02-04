const express = require("express");
const navRouter = express.Router();

/** Like homeRouter.js I'm not sure what the purpose of this router is. */

navRouter.route('/')
.get((req, res) => {
  res.sendStatus(501);
});

module.exports = navRouter;
