const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/states', require('./states'));
router.use('/trending', require('./trending'));
router.use('/politicians', require('./politicians'));
router.use('/about', require('./about'));
router.use('/search', require('./search'));
router.use('/search/autocomplete', require('./autocomplete'));
router.use('/tutorial', require('./tutorial'));

module.exports = router;
