const { expect } = require('chai');

const app = require('supertest')(require('../server/index'));

// describe('Testing the Orders Details', () => {
//   describe('/api/orders exists', () => {
//     it('should get all orders', async () => {
//       const response = await app.get('/api/orders');
//       expect(response.status).to.equal(200);
//     });
//   });
// });
