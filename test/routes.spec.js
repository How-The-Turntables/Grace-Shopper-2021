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

describe('Testing the Routes', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
    await syncAndSeed();
  });

  afterAll(async () => {
    await db.close();
  });
  describe('POST /api/albums/:id', () => {
    it('responds with status 201', async () => {
      const response = await app.post('/api/albums').send({
        title: 'Escalator To Heaven',
        description: 'This is good.',
        genre: 'ROCK',
        year: 1969,
        price: 69.69,
        quantity: 8,
      });
      expect(response.status).toEqual(201);
    });
    it('checks if we can find new album in the db', async () => {
      const response = await app.post('/api/albums').send({
        title: 'Escalator To Heaven',
        description: 'This is good.',
        genre: 'ROCK',
        year: 1969,
        price: 69.69,
        quantity: 8,
      });
      const id = response.body.id;
      const album = db.models.album;
      const newAlbum = await album.findByPk(id);
      expect(newAlbum.title).toEqual('Escalator To Heaven');
    });
  });

  describe('GET /api/albums', () => {
    it('expects the route to be accessible', async () => {
      const response = await app.get('/api/albums');
      expect(response.status).toEqual(200);
    });
  });
  describe('GET /api/albums/:id', () => {
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
  describe('POST /api/artists/:id', () => {
    it('responds with status 201', async () => {
      const response = await app.post('/api/artists').send({
        name: 'Thunder Trouser',
        description: 'Rock on',
      });
      expect(response.status).toEqual(201);
    });
  });
  it('checks if we can find new artist in the db', async () => {
    const response = await app.post('/api/artists').send({
      name: 'Thunder Trouser',
      description: 'Rock on',
    });
    const id = response.body.id;
    const artist = db.models.artist;
    const newArtist = await artist.findByPk(id);
    expect(newArtist.name).toEqual('Thunder Trouser');
  });

});
