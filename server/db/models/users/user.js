const { DataTypes, Model } = require('sequelize');
const db = require('../../db');
const bcrypt = require('bcrypt')

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Anonymous',
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'User',
    },
    email_address: {
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

User.addHook('beforeSave', (user) => {
  if (user._changed.has('password')) {
    user.password = bcrypt.hash(user.password, 5)
  }
})

module.exports = User;
