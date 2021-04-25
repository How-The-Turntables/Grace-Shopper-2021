const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  email_address: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
  },
  admin: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
