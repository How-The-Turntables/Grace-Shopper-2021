const { expect } = require('chai');
const OrderDetail = require('../server/db/models/shopping/orderDetail');
const db = require('./../server/db/db');

const app = require('supertest')(require('../server/index'));

describe('Testing the Orders Details', () => {
  // beforeEach(async () => {
  //   await db.sync({ force: true });
  // });
  describe('/api/orders exists', () => {
    // const [order1, order2, order3] = await Promise.all([
    //   OrderDetail.create({ total: 14.5 }),
    //   OrderDetail.create({ total: 18.5 }),
    //   OrderDetail.create({ total: 290.5 }),
    // ]);
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/orders');
      expect(response.status).to.equal(200);
    });
  });
});
