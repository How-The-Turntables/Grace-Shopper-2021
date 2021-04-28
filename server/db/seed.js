const db = require('./db');
const {
  OrderDetail,
  OrderItem,
  Artist,
  Album,
  Review,
  User,
  UserAddress,
} = require('./index');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const order = await OrderDetail.create({
      total: 19.99,
      status: 'in progress',
    });
    const review = await Review.create({
      comment: 'This album has all my favorite jams.',
      stars: 5,
    });
    const user = await User.create({
      email_address: 'test@gmail.com',
      password: 'supersecret',
    });
    const artist = await Artist.create({
      name: 'Pinkk Flloyd',
      description: 'One of those boy bands from the 70s.',
    });
    const album = await Album.create({
      title: 'The Wall',
      description: 'A good record',
      genre: 'ROCK',
      year: 1973,
      price: 19.99,
      quantity: 20,
      photoUrl:
        'https://www.thestudentplaylist.com/wp-content/uploads/2019/11/pink_floyd_the_wall.jpg',
    });

    const item = await OrderItem.create({
      quantity: 2,
      albumId: album.id,
      order_detailId: order.id,
    });

    await album.setArtist(artist);
    await review.setAlbum(album);
    await review.setUser(user);
    await order.setUser(user);
  } catch (error) {
    console.log('error seeding database!', error);
  }
};

module.exports = syncAndSeed;
