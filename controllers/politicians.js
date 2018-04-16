const express = require('express');
const Congress = require( 'propublica-congress-node' );
const apiKey = 'kKAb1hU4oGSoUjqN5P3NJVUhd0PDWV0r4PizmlGe';
const client = new Congress( apiKey );

const router = express.Router();

router.get('/:id', (req, res) => {
  client.memberBioAndRoles({
  	memberId: req.params.id
  }).then((politician) => {
  	res.render('politician/single');
  }).catch((err) => {
  		console.log(err);
  		res.render('/');
  })
});

module.exports = router;