/*
=============================================================================================================
NOTE:
These tests are based on the following tutorials:
- https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai#automating-mocha-and-chai-tests
- http://www.designsuperbuild.com/blog/unit_testing_controllers_in_express/
- https://www.terlici.com/2015/09/21/node-express-controller-testing.html
=============================================================================================================
*/

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const sinon = require('sinon');
const express = require('express');
//const app = express();

const request = require('request');
const myHome = require('../controllers/myHome');
const registerRouter = require('../controllers/home');



describe('home tests', function(){
  it('Test: error != 404', function(done) {
    //does the main page produce an error?
    request('http://localhost:8000' , function(error, response, body) {
        expect(error).to.not.equal(404);
        done();
    });
  });
/*
  it('Test: Home render', function(done){
    var req, res, spy;
    req = res = {};
    spy = res.render = sinon.spy();
    myHome(req, res);
    expect(spy.calledOnce).to.equal(true);
    done();
  });
  */

  it('Test: Home render', function(done){
    var req, res, spy;
    req = res = {};
    spy = res.render =  sinon.spy();
    myHome(req, res);
    expect(spy.calledOnce).to.equal(true);
    done();
  });
});
