const { expect } = require('chai');

const app = require('supertest')(require('../server/index'));

describe('This is a blank test', () => {
  it('should pass', () => {
    expect(1 + 2).to.equal(3);
  });
});

describe('Testing the Route', () => {
  describe('/api/products exists', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/products');
      expect(response.status).to.equal(200);
    });
  });
  describe('/api/products/:id exists', () => {
    it('expects the route with id 3 to be accessible', async () => {
      const response = await app.get('/api/products/3');
      expect(response.status).to.equal(200);
    });
    it('expects the route with id 6 to be accessible', async () => {
      const response = await app.get('/api/products/6');
      expect(response.status).to.equal(200);
    });
    it('expects the route with id 18 to be accessible', async () => {
      const response = await app.get('/api/products/18');
      expect(response.status).to.equal(200);
    });
  });
});
