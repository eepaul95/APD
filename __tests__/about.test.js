const about = require('../controllers/about');
const request = require('request');
const supertest = require('supertest');
const httpMocks = require('node-mocks-http');


describe('About test', () => {
/*

============== TO DO: try to figure out how to test anonymous functions. Please ask Shateesh to explain
  test('It should response the GET method', async () => {
    // const req = httpMocks.createRequest();
    // const res = httpMocks.createResponse();

    // const response = await supertest(about).get('/');
    // expect(response.statusCode).toBe(200);


    var res, req, spy;
    req = res = {};
    spy = res.render = jest.fn();
    return about.get('/', spy).then((response) => {
  // response.message
  expect(spy).toBeCalled()});

});
*/

  test('Test: Error != 404', () =>{
    request('http://localhost:8000/about' , function(error, response, body) {
    expect(error).not.toBe(404);
    });
  });

});
