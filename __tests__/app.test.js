const request = require('supertest');
const app = require('../app');

describe('Application endpoints', () => {
  test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Health check should return UP status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('UP');
  });

  test('POST /greet should return greeting message', async () => {
    const response = await request(app)
      .post('/greet')
      .send({ name: 'DevOps' })
      .set('Content-Type', 'application/x-www-form-urlencoded');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello, DevOps!');
  });
});