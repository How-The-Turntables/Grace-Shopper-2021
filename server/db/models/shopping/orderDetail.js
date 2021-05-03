const { DataTypes, Model } = require('sequelize');
// const { db } = require('../../index');
const db = require('../../db');

// class OrderDetail extends Model {}

const OrderDetail = db.define('order_detail', {
  total: {
    type: DataTypes.DECIMAL(10, 2),
  },
  status: {
    type: DataTypes.ENUM('IN PROGRESS', 'COMPLETED', 'CANCELLED'),
    allowNull: false,
  },
});

// OrderDetail.init(
//   {
//     // id: {
//     //   type: DataTypes.UUID,
//     //   primaryKey: true,
//     //   defaultValue: DataTypes.UUIDV4,
//     //   unique: true,
//     // },
//     total: {
//       type: DataTypes.DECIMAL(10, 2),
//     },
//     status: {
//       type: DataTypes.ENUM('IN PROGRESS', 'COMPLETED', 'CANCELLED'),
//       allowNull: false,
//     },
//   },
//   { sequelize: db, modelName: 'order_detail' }
// );

module.exports = OrderDetail;
