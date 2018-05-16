const express = require('express');
const router = express.Router();
const url = require('url');
const apiPreloaded = require('../middlewares/api-preloaded');


router.get('/', (req, res) => {
    const q = url.parse(req.url, true).query;
    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify(apiPreloaded.getCandidatesFromPartial(q.q)));
});


module.exports = router;
