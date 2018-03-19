const express = require('express');
const router = express.Router();


router.use('/', require('./home'));
router.use('/states', require('./states'));


module.exports = router;
