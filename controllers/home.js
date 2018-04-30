const express = require('express');


const homeController = {
  registerRouter(){
    const router = express.Router();
    router.get('/', this.index);

    return router;
  },

  index(req, res){
    res.render('home');
  }
};



module.exports = homeController;
