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
  let senatorsInfo = {};
  let representativesInfo = [];
  let districtArray = helpers.arrayOfDistrict(stateAbbr);

 const reps = districtArray.map( async districtnum => {
       
        const getRepresentatives = await client.membersCurrentByStateOrDistrict({
                                      chamber: 'house',
                                      state: stateAbbr,
                                      district: districtnum
                                    })

        return {
            results: getRepresentatives.results[0]
        }
      })

  const resultRepresentatives = Promise.all(reps);


  Promise.all([
    client.membersCurrentByStateOrDistrict({
     chamber: 'senate',
     state: stateAbbr
    }),
    
    resultRepresentatives

  ]).then(([senatorInfo, resultRepresentatives]) => {

       senatorsInfo = senatorInfo.results;
       resultRepresentatives.forEach((resultRepresentative) => {
          if(resultRepresentative.results !== undefined) representativesInfo.push(resultRepresentative.results);
       })
       res.render('states/single', {senators: senatorsInfo, representatives: representativesInfo, state: stateName});
    }).catch((e) => {
    console.log(e);
    res.redirect('/');
  })

});


module.exports = router;
