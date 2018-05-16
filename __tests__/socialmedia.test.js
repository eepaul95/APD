const request = require('supertest');
const app = require('../app');

describe('Social media widgets', () => {
  test('Social Media div visible on the politician list', done => {
    request(app).get('/states/Texas').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('social-media');
        done();
      });
  });
  test('Social Media div visible on individual politician page', done => {
    request(app).get('/politicians/G000555').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('social-media');
        done();
      });
  });
});
