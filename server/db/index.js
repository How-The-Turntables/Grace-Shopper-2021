const OrderDetail = require('./models/shopping/orderDetail');
const OrderItem = require('./models/shopping/orderItem');
const User = require('./models/users/user');
const UserAddress = require('./models/users/userAddress');
const Album = require('./models/products/album.js');
const Artist = require('./models/products/album');
const Review = require('./models/products/review');

UserAddress.belongsTo(User);
User.hasMany(UserAddress);

OrderDetail.belongsTo(User);
User.hasMany(OrderDetail);

Album.belongsTo(Artist);
Artist.hasMany(Album);

Review.belongsTo(User);
User.hasMany(Review);

Review.belongsTo(Album);
Album.hasMany(Review);

Album.belongsToMany(OrderDetail, {
  through: 'order_items',
  foreignKey: 'albumId',
  otherKey: 'order_detailsId',
});

OrderDetail.belongsToMany(Album, {
  through: 'order_items',
  foreignKey: 'order_detailsId',
  otherKey: 'albumId',
});

module.exports = {
  OrderDetail,
  OrderItem,
  Artist,
  Album,
  Review,
  User,
  UserAddress,
};
