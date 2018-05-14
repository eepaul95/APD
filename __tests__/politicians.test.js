const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/politicians/S001150').then((response) => {
            expect(response.statusCode).toBe(200);
        });
    });
});
