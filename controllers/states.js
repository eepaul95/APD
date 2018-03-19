const express = require('express');
const helpers = require('../middlewares/viewHelpers');
const madison = require('madison');
const Congress = require( 'propublica-congress-node' );
const apiKey = 'kKAb1hU4oGSoUjqN5P3NJVUhd0PDWV0r4PizmlGe';
const client = new Congress( apiKey );
const router = express.Router();


router.get('/:statename', (req, res) => {
  const stateName = helpers.checkStateWithSpace(req.params.statename);
  const stateAbbr = madison.getStateAbbrevSync(stateName);
  client.membersCurrentByStateOrDistrict({
  	chamber: 'senate',
  	state: stateAbbr
  }).then((stateInfo) => {
  	res.render('states/single', {politicians: stateInfo.results, state: stateName});
  }).catch(() => {
  	res.render('home');
  })
  
});


module.exports = router;
