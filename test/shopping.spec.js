const { expect } = require('chai');
const OrderDetail = require('../server/db/models/shopping/orderDetail');

const app = require('supertest')(require('../server/index'));

describe('Testing the Orders Details', () => {
  describe('/api/orders exists', async() => {
    const [order1, order2, order3] = await Promise.all([
      OrderDetail.create({ total: 14.5 }),
      OrderDetail.create({ total: 18.5 }),
      OrderDetail.create({ total: 290.5 }),
    ]);
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/orders');
      expect(response.status).to.equal(200);
    });
  });
});
