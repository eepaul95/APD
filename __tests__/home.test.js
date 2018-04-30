const home = require('../controllers/home');

describe('Home test', () => {
  test('basic home test', ()=> {
    var res, req, spy;
    req = res = {};
    spy = res.render = jest.fn();
    const index = home.index(req, res);
    expect(spy).toBeCalled();
  });
});
