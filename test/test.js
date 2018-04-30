/*
=============================================================================================================
NOTE:
These tests are based on the following tutorials:
- https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai#automating-mocha-and-chai-tests
- http://www.designsuperbuild.com/blog/unit_testing_controllers_in_express/
- https://www.terlici.com/2015/09/21/node-express-controller-testing.html
=============================================================================================================
*/


var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var sinon = require('sinon');
//var http_mocks = require('node-mocks-http');


var request = require('request');
var viewHelpers = require('../middlewares/viewHelpers');

/*
//helper function to create mock HTTP response
function buildResponse(){
  return http_mocks.createResponse({eventEmitter: require('events').EventEmitter});
}
*/

describe('middleware tests', function(){
  it('Test: state name with space', function(done){
    assert.equal(viewHelpers.checkStateWithSpace('newyork'), 'New York');
    done();
  });

  it('Test: state name without space', function(done){
    assert.equal(viewHelpers.checkStateWithSpace('nevada'), 'Nevada');
    done();
  });
});
