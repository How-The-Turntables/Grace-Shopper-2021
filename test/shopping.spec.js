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

  describe('GET /api/orders/admin exists', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/orders/admin');
      expect(response.status).toEqual(401);
    });
  });

  // not done
  // describe('POST /api/orders/:id/cart', () => {
  //   it('responds with status 201', async () => {
  //     const response = await app.post('/api/orders/:id/cart').send({
  //       title: 'Escalator To Heaven',
  //       description: 'This is good.',
  //       genre: 'ROCK',
  //       year: 1969,
  //       price: 69.69,
  //       quantity: 8,
  //     });
  //     expect(response.status).toEqual(201);
  //   });
  //   it('checks if we can find new order in the db', async () => {
  //     const response = await app.post('/api/albums').send({
  //       title: 'Escalator To Heaven',
  //       description: 'This is good.',
  //       genre: 'ROCK',
  //       year: 1969,
  //       price: 69.69,
  //       quantity: 8,
  //     });
  //     const id = response.body.id;
  //     const album = db.models.album;
  //     const newAlbum = await album.findByPk(id);
  //     expect(newAlbum.title).toEqual('Escalator To Heaven');
  //   });
  // });
});
