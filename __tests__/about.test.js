const about = require('../controllers/about');
const request = require('request');


describe('About test', () => {
  /*
  test('Test: about render', ()=> {
    var res, req, spy;
    req = res = {};
    spy = res.render = jest.fn();
    about.router.get(req,res);
    expect(spy).toBeCalled();
  });
  */
  test('Test: Error != 404', () =>{
    request('http://localhost:8000/about' , function(error, response, body) {
    expect(error).not.toBe(404);
    });
  });

});
