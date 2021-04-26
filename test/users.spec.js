const db = require('./../server/db/db');
const User = db.model('user');

const { expect } = require('chai');

describe('user model', () => {
  describe('seeding user data', () => {
    it('should create an anonymous user', async () => {
      const user = User.build();
      expect(user.first_name).to.equal('Anonymous');
    });
  });
});
