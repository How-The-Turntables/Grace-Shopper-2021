const { expect } = require('chai');
const Album = require('../server/db/models/products/album');

describe('Mocha/Chai Test', function () {
  it('should show a passing test', function () {
    expect(1 + 1).to.equal(2);
  });
});

describe('Album', async () => {
  let albumMaster = await Album.build({
    title: 'Americana',
    description: 'Pretty Fly',
    genre: 'MATH ROCK',
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
    it('it has a genre, which is one of ENUM choices', async () => {
      const albumWeird = await Album.build({
        title: 'Americana',
        description: 'Pretty Fly',
        genre: 'PUNK ROCK',
        year: 1999,
        price: 199.99,
        quantity: 8,
        photoUrl:
          'https://blog.masterappliance.com/wp-content/uploads/2014/03/vinyl-record-bowl-with-heat-gun.jpg',
      });
      try {
        albumWeird.genre = 'DISCO ROCK';
        await albumWeird.save();
        throw Error('genre cannot be outside of what is specified');
      } catch (error) {
        expect(error.message).to.contain('invalid input value');
      }
    });
    it('it has a year', () => {
      expect(typeof albumMaster.year).to.equal('number');
    });
    it('it has a price', () => {
      expect(typeof albumMaster.price).to.equal('number');
    });
    it('it has a photo url', () => {
      expect(typeof albumMaster.photoUrl).to.equal('string');
      expect(albumMaster.photoUrl).to.equal(
        'https://blog.masterappliance.com/wp-content/uploads/2014/03/vinyl-record-bowl-with-heat-gun.jpg'
      );
    });

    it('given a blank string in the photoUrl, the default value should be used', async () => {
      albumMaster.photoUrl = '';
      await albumMaster.save();
      expect(albumMaster.photoUrl).to.equal(
        'https://image.shutterstock.com/image-photo/black-vinyl-record-isolated-on-260nw-121247890.jpg'
      );
    });
    it('it has a quantity', () => {
      expect(typeof albumMaster.quantity).to.equal('number');
      expect(albumMaster.quantity).to.equal(8);
    });
  });
});
