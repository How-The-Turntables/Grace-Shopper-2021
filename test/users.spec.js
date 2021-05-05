const { db, User, OrderDetail } = require('./../server/db/index');

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

      expect(user.firstName).toEqual('Anonymous');
    });
    it('new users should have a cart', async () => {
      const user = await User.create({
        firstName: 'Test',
        lastName: 'User',
        email: 'test.user@howtheturntables.com',
        password: '123',
      });
      const order = await OrderDetail.findOne({
        where: {
          userId: user.id
        }
      });
      console.log("TEST SPEC ORDER", order)
      expect(order).not.toBeNull();
    })
  });
});
