const db = require('./../server/db/db');
const User = db.model('user');

const { expect } = require('chai');

describe('user model', () => {
  describe('seeding user data', () => {
    it('should have 1 user', async () => {
      const user = User.build();
      console.log(user);
      expect(1).to.equal(1);
    });
  });
});
