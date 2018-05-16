const express = require('express');
const router = express.Router();
const url = require('url');
const helpers = require('../middlewares/viewHelpers');
const apiPreloaded = require('../middlewares/api-preloaded');
const madison = require('madison');
const zipcode = require('zipcode');


router.get('/', (req, res) => {
    const q = url.parse(req.url, true).query.q;
    var stateAbbr, stateName, bioguide, badQuery, redirect, interpret;
    
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
        stateName = helpers.checkStateWithSpace(q);
        stateAbbr = madison.getStateAbbrevSync(stateName);
    }
    
    if (!stateAbbr) { // Not a state name; try politican by full name
        var index = apiPreloaded.getIndexFromFullName(q);
        if(index !== undefined) {
            bioguide = apiPreloaded.getBioguideFromIndex(index);
            badQuery = false;
            redirect = "/politicians/" + bioguide;
            interpret = q;
        } else {
            badQuery = true;
        }
    } else {
        badQuery = false;
        redirect = "/states/" + stateName;
        interpret = stateName;
    }

    res.render('search', {query: q, interpret: interpret, badQuery: badQuery, href: redirect});
});


module.exports = router;
