const { expect } = require('chai');
const Album = require('../server/db/models/products/album');
const db = require('./../server/db/db');

describe('Mocha/Chai Test', function () {
  it('should show a passing test', function () {
    expect(1 + 1).to.equal(2);
  });
});

describe('Album', async () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });
  let albumMaster = await Album.build({
    title: 'Americana',
    description: 'Pretty Fly',
    genre: 'ROCK',
    year: 1999,
    price: 199.99,
    quantity: 8,
    photoUrl:
      'https://blog.masterappliance.com/wp-content/uploads/2014/03/vinyl-record-bowl-with-heat-gun.jpg',
  });
  describe('can create a new album', () => {
    it('it has a title', async () => {
      const album = await Album.build();
      try {
        await album.validate();
        throw Error('title should be required');
      } catch (error) {
        expect(error.message).to.contain('cannot be null');
      }
    });
    it('title is not an empty string', async () => {
      const album = await Album.build({
        title: '',
      });
      try {
        await album.validate();
        throw Error('title cannot be an empty string');
      } catch (error) {
        expect(error.message).to.contain('Validation error');
      }
    });
    it('it has a description', async () => {
      expect(albumMaster.description).to.equal('Pretty Fly');
    });
    it('it has a price, which is a number', async () => {
      expect(typeof albumMaster.price).to.equal('number');
    });
    it('it has a year', () => {
      expect(typeof albumMaster.year).to.equal('number');
    });
    it('it has a price', () => {
      expect(typeof albumMaster.price).to.equal('number');
    });
    it('it has an photo url', () => {
      expect(typeof albumMaster.photoUrl).to.equal('string');
      expect(albumMaster.photoUrl).to.equal(
        'https://blog.masterappliance.com/wp-content/uploads/2014/03/vinyl-record-bowl-with-heat-gun.jpg'
      );
    });
    it('it has a quantity', () => {
      expect(typeof albumMaster.quantity).to.equal('number');
      expect(albumMaster.quantity).to.equal(8);
    });
  });
});
