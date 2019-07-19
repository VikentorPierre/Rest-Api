var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("get is working");
  res.json({
    message: "welcome to my practice Rest Api"
  });
});

module.exports = router;
