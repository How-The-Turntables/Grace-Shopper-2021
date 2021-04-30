const { db, User } = require('./../server/db/index');

describe('user model', () => {
  describe('seeding user data', () => {
    beforeEach(async () => {
      await db.sync({ force: true });
    });

    afterAll(async () => {
      await db.close();
    });

    it('should create an anonymous user', async () => {
      const user = await User.build();

      expect(user.first_name).toEqual('Anonymous');
    });
  });
});
