const supertest = require('supertest');
const { db } = require('../server/db/index');
const server = require('../server/server');
const syncAndSeed = require('../server/db/seed');

const app = supertest(server);

describe('This is a blank test', () => {
  it('should pass', () => {
    expect(1 + 2).toEqual(3);
  });
});

describe('Testing the Route', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
    await syncAndSeed();
  });

  afterAll(async () => {
    await db.close();
  });

  describe('/api/albums', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/albums');
      expect(response.status).toEqual(200);
    });
  });
  describe('/api/albums/:id', () => {
    it('expects the route with id 3 to be accessible', async () => {
      const response = await app.get('/api/albums/3');
      expect(response.status).toEqual(200);
    });
    it('expects the route with id 6 to be accessible', async () => {
      const response = await app.get('/api/albums/6');
      expect(response.status).toEqual(200);
    });
    it('expects the route with id 18 to be accessible', async () => {
      const response = await app.get('/api/albums/18');
      expect(response.status).toEqual(200);
    });
  });

  describe('Artists', () => {
    describe('/api/artists', () => {
      it('expects the route to be accessible', async () => {
        const response = await app.get('/api/artists');
        expect(response.status).toEqual(200);
      });
    });
    describe('/api/artists/:id', () => {
      it('expects the route to be accessible', async () => {
        const response = await app.get('/api/artists/1');
        expect(response.status).toEqual(200);
      });
    });
  });
});
