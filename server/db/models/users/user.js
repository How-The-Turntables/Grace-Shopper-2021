const { DataTypes, Model } = require('sequelize');
const db = require('../../db');
const OrderDetail = require('../shopping/orderDetail');
// const { db, OrderDetail } = require('../../index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User extends Model {}

User.init(
  {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4,
    //   unique: true,
    // },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Anonymous',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'User',
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: 'user' }
);

User.afterCreate(async (user) => {
  await OrderDetail.create({
    total: 0,
    status: 'IN PROGRESS',
    userId: user.id,
  });
});

User.addHook('beforeSave', async (user) => {
  if (user._changed.has('password')) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

// drying out the error we're throwing for authentication
const error = function () {
  const err = Error('bad credentials, you suck');
  err.status = 401;
  return err;
};

User.authenticate = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    return await jwt.sign(user.id, process.env.JWT); // token w/ user ID
  }
  throw error();
};

User.byToken = async (token) => {
  try {
    const id = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (user) return user;
    throw error();
  } catch (ex) {
    throw error();
  }
};

module.exports = User;
