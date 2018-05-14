const request = require('supertest');
const app = require('../app');

describe('Test the about path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/about').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
