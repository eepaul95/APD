var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var sinon = require('sinon');
//var http_mocks = require('node-mocks-http');

var request = require('request');
var myHome = require('../controllers/myHome');

function buildResponse(){
  return http_mocks.createResponse({eventEmitter: require('events').EventEmitter});
}
describe('homepage tests', function(){

  it('Test: error != 404', function(done) {
    //does the main page produce an error?
    request('http://localhost:8080' , function(error, response, body) {
        expect(error).to.not.equal(404);
        done();
    });
  });

  it('Test: Home render', function(done){
    var req, res, spy;
    req = res = {};
    spy = res.render = sinon.spy();
    myHome(req, res);
    expect(spy.calledOnce).to.equal(true);
    done();
  });
});
