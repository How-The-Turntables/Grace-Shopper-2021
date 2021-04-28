const { DataTypes, Model } = require('sequelize');
const db = require('../../db');

class OrderDetail extends Model {}

OrderDetail.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('IN PROGRESS', 'COMPLETED', 'CANCELLED'),
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'order_detail' }
);

module.exports = OrderDetail;
