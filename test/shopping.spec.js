const { expect } = require('chai');
const OrderDetail = require('../server/db/models/shopping/orderDetail');

const app = require('supertest')(require('../server/index'));

describe('Testing the Orders Details', async () => {
  const order1 = await OrderDetail.build({ total: 14.5 });
  const order2 = await OrderDetail.build({ total: 18.5 });
  const order3 = await OrderDetail.build({ total: 290.5 });
  describe('/api/orders exists', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/orders');
      expect(response.status).to.equal(200);
    });
  });
});
