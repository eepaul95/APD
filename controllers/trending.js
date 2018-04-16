const express = require('express');

const router = express.Router();

router.get('/trending', (req, res) => {
  res.render('trending');
});

module.exports = router;
