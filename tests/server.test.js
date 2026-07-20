const request = require('supertest');
const app = require('../server');

describe('Node.js App Testing', () => {
  it('should return a 200 response on the root route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to Node.js App!');
  });

  it('should return status success on the /api/status route', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toBe('API is running flawlessly.');
  });
});
