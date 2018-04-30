const express = require('express');
const router = express.Router();

const myHome = require('./myHome');

router.get('/', myHome);

module.exports = router;

/*
const express = require('express');

const myHome = {
  registerRouter(){
    const router = express.Router();
    router.get('/', this.index);

    return router;
  },

  index(req, res){
    res.render('home');
  }
};

module.exports = myHome.registerRouter();
*/
