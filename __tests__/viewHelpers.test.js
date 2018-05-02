const request = require('request');
const viewHelpers = require('../middlewares/viewHelpers');

describe('middleware tests', () => {
  global.console = {
    log: jest.fn()
  };

  test('Test: state name with space', () => {
    expect(viewHelpers.checkStateWithSpace('newyork')).toBe('New York');
  });

  test('Test: state name without space', () => {
    expect(viewHelpers.checkStateWithSpace('nevada')).toBe('Nevada');
  });

  test('Test: Abbreviation in arrayOfDistrict', () => {
    expect(viewHelpers.arrayOfDistrict('NY')).toContain(27);
  });

  test('Test: Abbreviation is not in arrayOfDistrict', () => {
    viewHelpers.arrayOfDistrict('XX');
    expect(global.console.log).toHaveBeenCalledWith('The given input is not a state abbreviation');
  });

});
