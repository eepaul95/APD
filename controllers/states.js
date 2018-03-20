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
  const politicians = {};
  client.membersCurrentByStateOrDistrict({
  	chamber: 'senate',
  	state: stateAbbr
  }).then((senatorInfo) => {
  		client.membersCurrentByStateOrDistrict({
  			chamber: 'house',
  			state: stateAbbr,
  			district: 1
  		}).then((representativeInfo) => {
  		res.render('states/single', {senators: senatorInfo.results, representatives: representativeInfo.results, state: stateName});
  })
  }).catch((e) => {
  	console.log(e);
  	res.redirect('/');
  })


});


module.exports = router;
