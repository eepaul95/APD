const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/states', require('./states'));
router.use('/trending', require('./trending'));
router.use('/politicians', require('./politicians'));

module.exports = router;
