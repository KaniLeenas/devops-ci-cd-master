const request = require('supertest');
const app = require('../server');

describe('App endpoints', () => {
  test('GET / should return app message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('DevOps CI/CD App Running');
  });

  test('GET /health should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});