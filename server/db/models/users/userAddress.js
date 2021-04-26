const { Model, DataTypes } = require('sequelize');
const db = require('../../db');

class UserAddress extends Model {}

UserAddress.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  addressType: {
    type: DataTypes.ENUM(['SHIPPING', 'BILLING'])
  },
  addressLine1: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  addressLine2: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  state: {
    type: DataTypes.ENUM([ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]),
    allowNull:false
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
},{
  sequelize: db,
  modelName: 'user_address'
});

module.exports = UserAddress;