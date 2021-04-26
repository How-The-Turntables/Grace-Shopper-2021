const { expect } = require('chai');
const Album = require('../server/db/models/products/album');

describe('Mocha/Chai Test', function () {
  it('should show a passing test', function () {
    expect(1 + 1).to.equal(2);
  });
});

describe('Album', () => {
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
      const album = await Album.build({
        title: 'Americana',
        description: 'Pretty Awesome',
      });
      expect(album.description).to.equal('Pretty Awesome');
    });
  });
});
