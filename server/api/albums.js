const albumsRouter = require('express').Router();
const { Album, Review, Artist } = require('../db/index');

albumsRouter.get('/', async (req, res, next) => {
  try {
    const idx = req.query.idx ? req.query.idx * 1 : 0;
    const [albums, count] = await Promise.all([
      Album.findAll({
        limit: 10,
        offset: idx * 10,
        order: [['title']],
        include: [Artist],
      }),
      Album.count(),
    ]);
    res.send({ count, albums });
  } catch (error) {
    console.log('error has occured in the /api/albums: ', error);
    next(error);
  }
});

albumsRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const album = await Album.findByPk(id, { include: { all: true } });
    res.send(album);
  } catch (error) {
    console.log('error occured in the /api/albums/:id/details');
    next(error);
  }
});

albumsRouter.post('/', async (req, res, next) => {
  try {
    const {
      title,
      description,
      genre,
      year,
      price,
      photoURL,
      quantity,
    } = req.body;
    const newAlbum = await Album.create({
      title,
      description,
      genre,
      year,
      price,
      photoURL,
      quantity,
    });
    res.status(201).send(newAlbum);
  } catch (error) {
    console.log('error has occured in the api/albums post route: ', error);
    next(error);
  }
});



//ALBUMS EDITING ROUTES FOR ADMINS - ADD, DELETE, EDIT

albumsRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const album = await Album.findByPk(id);
    await album.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.log('error has occured in the api/albums/delete route: ', error);
    next(error);
  }
});

albumsRouter.put('/:id', async (req, res, next) => {
  try {
    const {
      title,
      description,
      genre,
      year,
      price,
      photoURL,
      quantity,
    } = req.body;
    const { id } = req.params;
    const album = await album.findByPk({ id });
    await album.update({
      title,
      description,
      genre,
      year,
      price,
      photoURL,
      quantity,
    });
    res.status(201).send(album);
  } catch (error) {
    console.log('error has occured in the /api/albums put route: ', error);
    next(error);
  }
});

// ALBUM REVIEWS


albumsRouter.post('/:id/reviews', async (req, res, next) => {
  try {
    const review = await Review.create({
      where: {
        comment: req.body.comment,
        stars: req.body.stars,
        albumId: req.body.albumId,
      },
      include: [Album],
    });

    res.status(201).send(review);
    review.save();
  } catch (error) {
    console.log('Post Error: Error posting new review: ', error);
    next(error);
  }
});


module.exports = albumsRouter;
