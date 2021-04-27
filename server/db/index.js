const OrderDetail = require('./models/shopping');
const User = require('./models/users/user');
const Album = require('./models/products/album');
const Artist = require('.models/products/album');
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
