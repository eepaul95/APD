const express = require('express');
const router = express.Router();

var myHome = require('./myHome');
router.get('/', myHome);


//Elie's code
/*
router.get('/', (req, res) => {
  res.render('home');
});
*/

module.exports = router;
