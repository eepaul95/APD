const about = require('../controllers/about');
const request = require('request');
const supertest = require('supertest');
const httpMocks = require('node-mocks-http');


describe('About test', () => {
  test('It should response the GET method', async () => {
    // const req = httpMocks.createRequest();
    // const res = httpMocks.createResponse();

    // const response = await supertest(about).get('/');
    // expect(response.statusCode).toBe(200);

    return about.router.get(req, res).then((response) => {
  // response.message
  assert.equal(typeof response.message, 'string', 'message is a string')});
});


  test('Test: Error != 404', () =>{
    request('http://localhost:8000/about' , function(error, response, body) {
    expect(error).not.toBe(404);
    });
  });

});
