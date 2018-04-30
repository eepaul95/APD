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
//var http_mocks = require('node-mocks-http');


var request = require('request');
var viewHelpers = require('../middlewares/viewHelpers');


describe('middleware tests', function(){
  it('Test: state name with space', function(done){
    assert.equal(viewHelpers.checkStateWithSpace('newyork'), 'New York');
    done();
  });

  it('Test: state name without space', function(done){
    assert.equal(viewHelpers.checkStateWithSpace('nevada'), 'Nevada');
    done();
  });

  it('Test: Abbreviation in arrayOfDistrict', function(done){
    expect(viewHelpers.arrayOfDistrict('NY')).to.include(27);
    done();
  });

  it('Test: Abbreviation is not in arrayOfDistrict', function(done){
    let spy = sinon.spy(console, 'log');
    viewHelpers.arrayOfDistrict('XX');
    assert(spy.calledWith('The given input is not a state abbreviation'));
    done();
  });
  
});
