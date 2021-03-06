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

    // -------------funny stuff------------------
    const funnyArtists = [
      Artist.create({
        name: 'Guns and Moses',
        description: 'Welcome to the Bootcamp',
      }),
      Artist.create({
        name: 'The Profs',
        description: 'Everything is white',
      }),
      Artist.create({
        name: 'AC/PC',
        description: 'Theyre on the highway to SQL',
      }),
      Artist.create({
        name: 'Von Zeppelin',
        description: 'Boom!',
      }),
      Artist.create({
        name: '#FFC0CB Floyd',
        description: 'VV |2 1 7 7 3 [\\]    1 [\\]    1 3 3 7',
      }),
      Artist.create({
        name: 'Infinite Loop of Destruction',
        description: 'While(i > 0) i++',
      }),
      Artist.create({
        name: 'Redux Stones',
        description: 'I cant get no SPA',
      }),
      Artist.create({
        name: 'Soggy Bottom Boys',
        description: 'oh Brother, Where art though',
      }),
    ];

    await Promise.all(funnyArtists);

    const funnyAlbums = [
      Album.create({
        title: 'Greatest Coding Hits vol 62',
        photoUrl: 'https://cdn.pocket-lint.com/r/s/320x/assets/images/134579-gadgets-feature-53-of-the-worst-album-covers-of-all-time-image22-sl1hcqpb5o.jpg?v1',
        description: 'Prety Awesome',
        genre: 'ROCK',
        year: 1998,
        price: 99.99,
        quantity: 72,
        artistId: 2,
      }),
      Album.create({
        title: 'Escalator To Heaven',
        photoUrl: 'https://www.ultimate-guitar.com/static/article/news/1/69761_ver1516630290.jpg',
        description: 'Out of Order',
        genre: 'ROCK',
        year: 1975,
        price: 19.99,
        quantity: 18,
        artistId: 5,
      }),
      Album.create({
        title: 'You Broke My Heart So I Busted Your Jaw',
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3okNYxBt2InkFRt7Bo8-312si21RRetUqm1mKG7FunwTbe82m_6lAE5InaCHZ3tS56VQ&usqp=CAU',
        description: 'Collection of the most metal love songs',
        genre: 'METAL',
        year: 2004,
        price: 39.99,
        quantity: 21,
        artistId: 6,
      }),
      Album.create({
        title: 'Were Doing This For Money',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Money_1973.jpg',
        description: 'Give us Money!',
        genre: 'JAZZ',
        year: 1982,
        price: 139.99,
        quantity: 1000,
        artistId: 7,
      }),
      Album.create({
        title: 'Psychodelic CSS',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Weird_Al_Yankovic_-_Dare_to_Be_Stupid.jpg/220px-Weird_Al_Yankovic_-_Dare_to_Be_Stupid.jpg',
        description: 'Taste the sound',
        genre: 'OTHER',
        year: 1979,
        price: 0.99,
        quantity: 100,
        artistId: 1,
      }),
      Album.create({
        title: 'Saturday Night Coding',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/TheBeeGeesSaturdayNightFeveralbumcover.jpg',
        description: 'Drink all the booze, hack all the things',
        genre: 'POP',
        year: 1986,
        price: 19.99,
        quantity: 1,
        artistId: 3,
      }),
      Album.create({
        title: 'The Dark Side of Middleware',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Pink_Floyd_-_Division_Bell.jpg',
        description: 'The fault is not with RequireToken',
        genre: 'ROCK',
        year: 1969,
        price: 299.99,
        quantity: 4,
        artistId: 4,
      }),
      Album.create({
        title: 'Another Line in the Code',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Queen_The_Game.png/220px-Queen_The_Game.png',
        description: 'Just one more line of code',
        genre: 'ROCK',
        year: 1980,
        price: 18.99,
        quantity: 7,
        artistId: 5,
      }),
      Album.create({
        title: 'Men of Constant Sorrow',
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-aUxvpcQQfSVt7g-DxbkNwjEI3KEj44Ymr0eFEmXcgZT960VpVeTAwuo2_PuB0K23o7E&usqp=CAU',
        description: 'O Brother, where art though',
        genre: 'POP',
        year: 2004,
        price: 49.99,
        quantity: 10,
        artistId: 8,
      }),
    ];

    await Promise.all(funnyAlbums);

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
