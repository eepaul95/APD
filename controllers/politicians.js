const express = require('express');
const Congress = require('propublica-congress-node');
const apiKey = 'kKAb1hU4oGSoUjqN5P3NJVUhd0PDWV0r4PizmlGe';
const client = new Congress(apiKey);

const router = express.Router();

router.get('/:id', (req, res) => {
  client.memberBioAndRoles({
    memberId: req.params.id
  }).then((politician) => {
    //res.json(politician);
    let congressp =  {
      member_id: politician.results[0].member_id,
      first_name: politician.results[0].first_name,
      last_name: politician.results[0].last_name,
      gender: politician.results[0].gender,
      url: politician.results[0].url,
      twitter: politician.results[0].twitter_account,
      facebook: politician.results[0].facebook_account,
      youtube: politician.results[0].youtube_account
    };
    //res.json(congressp);
    let congressrole = {
      title: politician.results[0].roles[0].title,
      party: politician.results[0].roles[0].party,
      district: politician.results[0].roles[0].district,

      state: politician.results[0].roles[0].state,
      office: politician.results[0].roles[0].office,
      start_date: politician.results[0].roles[0].start_date,
      end_date: politician.results[0].roles[0].end_date,
      phone: politician.results[0].roles[0].phone,
      bills_sponsored: politician.results[0].roles[0].bills_sponsored,
      bills_cosponsored: politician.results[0].roles[0].bills_cosponsored

    }
    res.render('politicians/single', {politician: congressp, role: congressrole});
  }).catch((err) => {
      console.log(err);
      res.render('/');
  })
});

module.exports = router;
