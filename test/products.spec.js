const { expect } = require('chai');
const Album = require('../server/db/models/products/album');

describe('Mocha/Chai Test', function () {
  it('should show a passing test', function () {
    expect(1 + 1).to.equal(2);
  });
});

describe('Album', () => {
  describe('can create a new album', () => {
    it('it has a name', () => {});
  });
});
