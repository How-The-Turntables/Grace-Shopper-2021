const { expect } = require('chai');
const OrderDetail = require('../server/db/models/shopping/orderDetail');
const db = require('./../server/db/db');

const app = require('supertest')(require('../server/index'));

describe('Testing the Orders Details', () => {
  describe('/api/orders exists', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/orders');
      expect(response.status).to.equal(200);
    });
  });
});
