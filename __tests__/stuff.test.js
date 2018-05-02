const stuff = require('../middlewares/stuff.js');

describe('This is just a test', () => {
 const sum = stuff.sum;

 test('sum(2,2)', () => {
 	expect(sum(2, 2)).toEqual(4);
 });


});