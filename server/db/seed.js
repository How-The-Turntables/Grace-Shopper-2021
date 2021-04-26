const db = require('./db');
const OrderDetail = require('./models/shopping/orderDetail');
const User = require('./models/users/user');
const Review = require('./models/products/review');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const order = await OrderDetail.create({ total: 19.99 });
    const review = await Review.create({
      comment: 'This album has all my favorite jams.',
      stars: 5,
    });
    const user = await User.create({
      email_address: 'test@gmail.com',
      password: 'supersecret',
    });
  } catch (error) {
    console.log('error seeding database!', error);
  }
};

module.exports = syncAndSeed;
