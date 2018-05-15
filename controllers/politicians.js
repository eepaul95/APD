const express = require('express');
const apiHelpers = require('../middlewares/apiHelpers');
const cache = require('../middlewares/cache');

const Congress = require('propublica-congress-node');
const apiKey = 'kKAb1hU4oGSoUjqN5P3NJVUhd0PDWV0r4PizmlGe';
const client = new Congress(apiKey);

const router = express.Router();

router.get('/:id', cache(7),  (req, res) => {

  apiHelpers.getCongressMemberById(req.params.id).then((politician) => {

  let congressp =  {
      member_id: politician.member_id,
      first_name: politician.first_name,
      last_name: politician.last_name,
      gender: politician.gender,
      url: politician.url,
      twitter: politician.twitter_account,
      facebook: politician.facebook_account,
      youtube: politician.youtube_account

    };


  let congressrole = {
      title: politician.roles[0].title,
      party: politician.roles[0].party,
      district: politician.roles[0].district,

      state: politician.roles[0].state,
      office: politician.roles[0].office,
      start_date: politician.roles[0].start_date,
      end_date: politician.roles[0].end_date,
      phone: politician.roles[0].phone,
      bills_sponsored: politician.roles[0].bills_sponsored,
      bills_cosponsored: politician.roles[0].bills_cosponsored
    };

    apiHelpers.getIntroducedBillsByMemberId(req.params.id).then((bills_introduced) => {
        congressrole.recent_bills_introduced = bills_introduced[0].short_title;
      }).then((done) => {
        apiHelpers.getUpdatedBillsByMemberId(req.params.id).then((bills_updated) => {
          congressrole.recent_bills_updated = bills_updated[0].short_title;
          res.render('politicians/single', {politician: congressp, role: congressrole});
        })
      }).catch((err) => {
        console.log(err);
        res.redirect('/');
      })

  })

});

module.exports = router;
