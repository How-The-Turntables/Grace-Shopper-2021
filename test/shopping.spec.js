const supertest = require('supertest');
const { db } = require('../server/db/index');
const syncAndSeed = require('../server/db/seed');
const server = require('../server/server');

const app = supertest(server);

describe('Testing the Orders Details', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
    await syncAndSeed();
  });

  afterAll(async () => {
    await db.close();
  });

  describe('/api/orders exists', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/orders');
      expect(response.status).toEqual(200);
    });
  });
});
