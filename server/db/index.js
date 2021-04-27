const OrderDetail = require('./models/shopping/orderDetail');
const User = require('./models/users/user');
const Album = require('./models/products/album.js');
const Artist = require('./models/products/album');
const Review = require('./models/products/review');

Album.belongsTo(Artist);
Artist.hasMany(Album);

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
  Artist,
  Album,
  Review,
  User,
};
