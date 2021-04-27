const db = require('./../server/db/db');
const User = db.model('user');

const { expect } = require('chai');

describe('user model', async () => {
  const user = await User.build();
  describe('seeding user data', () => {
    it('should create an anonymous user', () => {
      expect(user.first_name).to.equal('Anonymous');
    });
  });
});
//this is a note
