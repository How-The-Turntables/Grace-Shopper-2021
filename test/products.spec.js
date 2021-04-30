const { db, Album } = require('./../server/db/index');

describe('Mocha/Chai Test', function () {
  it('should show a passing test', function () {
    expect(1 + 1).toEqual(2);
  });
});

describe('Album', () => {
  let albumMaster;

  beforeEach(async () => {
    await db.sync({ force: true });

    albumMaster = await Album.build({
      title: 'Americana',
      description: 'Pretty Fly',
      genre: 'ROCK',
      year: 1999,
      price: 199.99,
      quantity: 8,
      photoUrl:
        'https://blog.masterappliance.com/wp-content/uploads/2014/03/vinyl-record-bowl-with-heat-gun.jpg',
    });
  });

  afterAll(async () => {
    await db.close();
  });

  describe('can create a new album', () => {
    it('it has a title', async () => {
      const album = await Album.build();
      try {
        await album.validate();
        throw Error('title should be required');
      } catch (error) {
        expect(error.message.includes('cannot be null')).toBeTruthy();
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
        expect(error.message.includes('Validation error')).toBeTruthy();
      }
    });
    it('it has a description', async () => {
      expect(albumMaster.description).toEqual('Pretty Fly');
    });
    it('it has a price, which is a number', async () => {
      expect(typeof albumMaster.price).toEqual('number');
    });
    it('it has a year', () => {
      expect(typeof albumMaster.year).toEqual('number');
    });
    it('it has a price', () => {
      expect(typeof albumMaster.price).toEqual('number');
    });
    it('it has an photo url', () => {
      expect(typeof albumMaster.photoUrl).toEqual('string');
      expect(albumMaster.photoUrl).toEqual(
        'https://blog.masterappliance.com/wp-content/uploads/2014/03/vinyl-record-bowl-with-heat-gun.jpg'
      );
    });
    it('it has a quantity', () => {
      expect(typeof albumMaster.quantity).toEqual('number');
      expect(albumMaster.quantity).toEqual(8);
    });
  });
});
