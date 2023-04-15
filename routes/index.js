var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Landing-Todo" });
});

router.get("/default", function (req, res, next) {
  return res.render("default", { title: "Todos - List" });
});
module.exports = router;
