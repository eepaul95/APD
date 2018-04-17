const express = require('express');
const router = express.Router();
const helpers = require('../middlewares/viewHelpers');
const madison = require('madison');


router.get('/', (req, res) => {
    var q = req.url.split('=')[1].replace(/\+/g,' '); // /?q=blah+asdf => blah asdf
    
    const stateName = helpers.checkStateWithSpace(q);
    const stateAbbr = madison.getStateAbbrevSync(stateName);
    const isNotState = (!stateAbbr);


    res.render('search', {query: q, isNotState: isNotState,state: stateName, stateAbbr: stateAbbr});
});


module.exports = router;
