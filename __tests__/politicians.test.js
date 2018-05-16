const request = require('supertest');
const app = require('../app');

describe('Test Individual an Politician Page', () => {
    test('Response Status Code should = 200', () => {
        return request(app).get('/politicians/S001150').then((response) => {
            expect(response.statusCode).toBe(200);
        });
    });
});
