const faker = require('faker');

const {
  OrderDetail,
  OrderItem,
  Artist,
  Album,
  Review,
  User,
  UserAddress,
  db,
} = require('./index');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    // --------- creating bands ---------
    const bandNames = Array(20)
      .fill(1)
      .map(
        (album) => `${faker.company.bsAdjective()} ${faker.name.firstName()}`
      );

    const bandPromises = [];

    bandNames.forEach((name) => {
      bandPromises.push(
        Artist.create({
          name,
          description: faker.company.catchPhraseDescriptor(),
        })
      );
    });

    await Promise.all(bandPromises);

    // --------- creating albums ---------
    const albumNamesArray = Array(200)
      .fill(1)
      .map((album) => `${faker.lorem.words(3).toUpperCase()}`);
    const genres = ['ROCK', 'JAZZ', 'POP', 'METAL', 'OTHER'];

    const albumPromises = [];

    albumNamesArray.forEach((title) => {
      const bandId = Math.floor(Math.random() * 19) + 1;

      albumPromises.push(
        Album.create({
          title,
          description: faker.commerce.productDescription(),
          genre: genres[Math.floor(Math.random() * 4)],
          year: Math.floor(Math.random() * (2021 - 1700 + 1)) + 1700,
          price: Math.floor(Math.random() * (300 - 29 + 1)) + 29.99,
          quantity: Math.floor(Math.random() * 25) + 1,
          artistId: bandId,
        })
      );
    });

    await Promise.all(albumPromises);

    // --------- creating users ---------
    const usersArray = Array(20)
      .fill(1)
      .map((user) => faker.name.firstName());

    const userPromises = [];

    usersArray.forEach((firstName) => {
      const lastName = faker.name.lastName();
      userPromises.push(
        User.create({
          firstName,
          lastName: lastName,
          email: `${firstName[0].toLowerCase()}${lastName
            .replace(/'/g, '')
            .toLowerCase()}@gmail.com`,
          password: '123',
        })
      );
    });

    await Promise.all(userPromises);

    // --------- creating admin ---------
    await Promise.all([
      User.create({
        firstName: 'Jonathan',
        lastName: 'Crider',
        email: 'jonathan.crider@howtheturntables.com',
        password: process.env.AMPW,
        admin: true,
      }),
      User.create({
        firstName: 'Emily',
        lastName: 'Asaro',
        email: 'emily.asaro@howtheturntables.com',
        password: process.env.AMPW,
        admin: true,
      }),
      User.create({
        firstName: 'Maciej',
        lastName: 'Piech',
        email: 'maciej.piech@howtheturntables.com',
        password: process.env.AMPW,
        admin: true,
      }),
      User.create({
        firstName: 'Kevin',
        lastName: 'Gil',
        email: 'kevin.gil@howtheturntables.com',
        password: process.env.AMPW,
        admin: true,
      }),
    ]);

    // --------- creating reviews ---------
    const reviewsArray = Array(20)
      .fill(1)
      .map((stars) => Math.floor(Math.random() * 5) + 1);
    const usersdata = await User.findAll();
    const userIds = usersdata.map((user) => user.id); // array of user Ids since they're UUID type

    const reviewPromises = [];

    reviewsArray.forEach((stars) => {
      reviewPromises.push(
        Review.create({
          stars,
          comment: faker.lorem.sentence(4),
          userId: userIds[Math.floor(Math.random() * 20) + 1],
          albumId: Math.floor(Math.random() * 200) + 1,
        })
      );
    });

    await Promise.all(reviewPromises);

    // ------------ creating cart data --------------

    // Order_Details
    // Order_Items

    // Product => Order_Item => Order_detail

    // User => unhash the id
    // Order_details => total, status, userId (unhashed)
    // Order_Item => quantit, albumId, order_detailId
    // Product => just the id

    const buyer = await User.create({
      firstName: 'Henry',
      lastName: 'Bigbottom',
      email: 'hbig@gmail.com',
      password: 'welcome123',
    });

    const record1 = await Album.create({
      title: 'Greatest Coding Hits',
      description: 'Prety Awesome',
      genre: 'ROCK',
      year: 1999,
      price: 19.99,
      artistId: 2,
    });

    const record2 = await Album.create({
      title: 'Greatest Coding Hits 2',
      description: 'Prety Awesome',
      genre: 'ROCK',
      year: 2000,
      price: 19.99,
      artistId: 2,
    });

    const record3 = await Album.create({
      title: 'Greatest Coding Hits 3',
      description: 'Prety Awesome',
      genre: 'ROCK',
      year: 2000,
      price: 19.99,
      artistId: 2,
    });

    // const order_detail = await OrderDetail.create({
    //   total: 1 * record1.price + 1 * record2.price,
    //   status: 'IN PROGRESS',
    // });

    const order_detail2 = await OrderDetail.create({
      total: 1 * record3.price,
      status: 'COMPLETED',
    });

    const order_item1 = await OrderItem.create({
      quantity: 2,
    });
    const order_item2 = await OrderItem.create({
      quantity: 2,
    });
    const order_item3 = await OrderItem.create({
      quantity: 4,
    });

    // await Promise.all([buyer, record, order_detail, order_item]);
    // fix this

    // order_detail.userId = buyer.id;
    order_detail2.userId = buyer.id;
    order_item1.albumId = record1.id;
    order_item2.albumId = record2.id;
    order_item3.albumId = record3.id;

    order_item1.order_detailId = 25;
    order_item2.order_detailId = 25;
    order_item3.order_detailId = order_detail2.id;

    // await order_detail.save();
    await order_detail2.save();
    await order_item1.save();
    await order_item2.save();
    await order_item3.save();

    // ------------ ^^creating cart data^^ --------------

    // const order = await OrderDetail.create({
    //   total: 19.99,
    //   status: 'IN PROGRESS',
    // });
    // const review = await Review.create({
    //   comment: 'This album has all my favorite jams.',
    //   stars: 5,
    // });
    // const user = await User.create({
    //   email: 'test@gmail.com',
    //   password: 'supersecret',
    // });
    // const artist = await Artist.create({
    //   name: 'Pinkk Flloyd',
    //   description: 'One of those boy bands from the 70s.',
    // });
    // const album = await Album.create({
    //   title: 'The Wall',
    //   description: 'A good record',
    //   genre: 'ROCK',
    //   year: 1973,
    //   price: 19.99,
    //   quantity: 20,
    //   photoUrl:
    //     'https://www.thestudentplaylist.com/wp-content/uploads/2019/11/pink_floyd_the_wall.jpg',
    // });

    // const item = await OrderItem.create({
    //   quantity: 2,
    //   albumId: album.id,
    //   order_detailId: order.id,
    // });

    // await album.setArtist(artist);
    // await review.setAlbum(album);
    // await review.setUser(user);
    // await order.setUser(user);
  } catch (error) {
    console.log('error seeding database!', error);
  }
};

module.exports = syncAndSeed;
