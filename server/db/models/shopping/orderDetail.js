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

OrderDetail.fetchItems = async (order_detailId) => {
  const items = await OrderItem.findAll({
    where: {
      order_detailId,
    },
  });
  // incomplete feature, should find all relevant order items for this cart and add them to that cart instance
};

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
