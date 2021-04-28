const { expect } = require('chai');
const Artist = require('../server/db/models/products/artist');
const db = require('./../server/db/db');
const syncAndSeed = require('./../server/db/seed');


const app = require('supertest')(require('../server/index'));

describe('This is a blank test', () => {
  it('should pass', () => {
    expect(1 + 2).to.equal(3);
  });
});


describe('Testing the Route', async () => {
  await db.sync({ force: true });
  syncAndSeed();

describe('Testing the Route', () => {

  describe('/api/albums', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/albums');
      expect(response.status).to.equal(200);
    });
  });
  describe('/api/albums/:id', () => {
    it('expects the route with id 3 to be accessible', async () => {
      const response = await app.get('/api/albums/3');
      expect(response.status).to.equal(200);
    });
    it('expects the route with id 6 to be accessible', async () => {
      const response = await app.get('/api/albums/6');
      expect(response.status).to.equal(200);
    });
    it('expects the route with id 18 to be accessible', async () => {
      const response = await app.get('/api/albums/18');
      expect(response.status).to.equal(200);
    });
  });

  describe('/api/artists', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/artists');

      expect(response.status).to.equal(200);


    });
  });
});
