const express = require('express');
const router = express.Router();
const helpers = require('../middlewares/viewHelpers');
const madison = require('madison');
const apiHelpers = require('../middlewares/apiHelpers');





router.get('/:statename', (req, res) => {
  const stateName = helpers.checkStateWithSpace(req.params.statename);
  const stateAbbr = madison.getStateAbbrevSync(stateName);
  let representativesInfo = [];
  let districtArray = helpers.arrayOfDistrict(stateAbbr);

 const reps = districtArray.map( async districtnum => {
            return apiHelpers.getRepresentativeByDistrict(stateAbbr, districtnum);
      })

  const resultRepresentatives = Promise.all(reps);


  Promise.all([
    apiHelpers.getAllSenateByState(stateAbbr),
    
    resultRepresentatives

  ]).then(([senatorsInfo, resultRepresentatives]) => {
      representativesInfo = resultRepresentatives.map((resultRepresentative) => {
        if(resultRepresentative !== undefined) return resultRepresentative;
      });
       res.render('states/single', {senators: senatorsInfo, representatives: representativesInfo, state: stateName});
    }).catch((e) => {
    console.log(e);
    res.redirect('/');
  })

});


module.exports = router;
