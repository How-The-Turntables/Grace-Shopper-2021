const db = require('./../server/db/db');
const User = db.model('user');

const { expect } = require('chai');

describe('user model', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });
  describe('seeding user data', async () => {
    const user = await User.build();
    it('should create an anonymous user', () => {
      expect(user.first_name).to.equal('Anonymous');
    });
  });
});
