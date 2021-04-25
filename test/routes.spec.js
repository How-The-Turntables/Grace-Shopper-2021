const { expect } = require('chai');

const app = require('supertest')(require('../server/index'));

describe('Testing the Route', () => {
  describe('/api/products exists', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/products');
      expect(response.status).to.equal(200);
    });
  });
});
