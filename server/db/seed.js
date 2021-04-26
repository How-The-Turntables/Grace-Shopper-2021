const db = require('./db');
const OrderDetail = require('./models/shopping/orderDetail');
const User = require('./models/users/user');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const order = await OrderDetail.create({ total: '19.99' });
  } catch (error) {
    console.log('error seeding database!', error);
  }
};

module.exports = syncAndSeed;
