const home = require('../controllers/home');
const myHome = require('../controllers/myHome');
const request = require('request');


describe('Home test', () => {
  test('Test: home render', ()=> {
    var res, req, spy;
    req = res = {};
    spy = res.render = jest.fn();
    myHome(req, res);
    expect(spy).toBeCalled();
  });

  test('Test: Error != 404', () =>{
    request('http://localhost:8000' , function(error, response, body) {
    expect(error).not.toBe(404);
    });
  });

});
