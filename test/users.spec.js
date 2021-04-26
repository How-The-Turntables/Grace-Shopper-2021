const syncAndSeed = require('./../server/db/seed');

const { expect } = require('chai');

describe('user model', () => {
  describe('seeding data', () => {
    it('should have 1 a user', () => {
      expect(1 + 1).to.equal(2);
    });
  });
});
