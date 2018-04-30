const home = require('../controllers/home');
const myHome = require('../controllers/myHome');

describe('Home test', () => {
  test('basic home test', ()=> {
    var res, req, spy;
    req = res = {};
    spy = res.render = jest.fn();
    myHome(req, res);
    expect(spy).toBeCalled();
  });
});
