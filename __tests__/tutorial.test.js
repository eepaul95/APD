const request = require('supertest');
const app = require('../app');

describe('Test the tutorial path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/tutorial').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
