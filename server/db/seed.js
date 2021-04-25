const db = require('./db');
const OrderDetail = require('./models/shopping/orderDetail');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
  } catch (error) {
    console.log('error seeding database!', error);
  }
};

module.exports = syncAndSeed;
