const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/trending", (req, res) => {
  res.render("trending");
});

module.exports = router;
