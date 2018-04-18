const express = require('express');
const router = express.Router();
const helpers = require('../middlewares/viewHelpers');
const madison = require('madison');
const zipcode = require('zipcode');


router.get('/', (req, res) => {
    const q = req.url.split('=')[1].replace(/\+/g,' '); // /?q=blah+asdf => blah asdf
    var stateAbbr, stateName;
    
    // Check if all numbers
    if (!isNaN(q)) {
        const qn = parseInt(q);
        // Check if five digits
        if (qn > 0 && qn < 99999) {
            // Zipcode
            const res = zipcode.lookup(q); // [city, state]
            if (res !== null) {
                // Valid zipcode
                stateAbbr = res[1]
                stateName = madison.getStateNameSync(stateAbbr);
            } else {
                stateName = "";
            }
        }
    }
    else { // Must be state name?!
        stateName= helpers.checkStateWithSpace(q);
        stateAbbr = madison.getStateAbbrevSync(stateName);
    }
    
    const isNotState = (!stateAbbr);


    res.render('search', {query: q, isNotState: isNotState, state: stateName, stateAbbr: stateAbbr});
});


module.exports = router;
