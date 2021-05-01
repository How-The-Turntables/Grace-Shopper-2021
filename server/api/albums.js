const albumsRouter = require('express').Router();
const { Album, Review, Artist } = require('../db/index');

albumsRouter.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [Artist],
    });
    res.send(albums);
  } catch (error) {
    console.log('error has occured in the /api/albums: ', error);
    next(error);
  }
});

albumsRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const album = await Album.findByPk(id);
    res.send(album);
  } catch (error) {
    console.log('error occured in the /api/albums/:id');
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

//THESE ROUTES ARE FOR REVIEWS

albumsRouter.get('/:id/reviews', async (req, res, next) => {
  try {
    const id = req.params.id;
    const reviews = await Review.findAll({
      where: {
        albumId: id,
      },
      include: Album,
    });
    res.send(reviews);
  } catch (error) {
    console.log(
      'error occured in the /api/albums/:id/reviews get route: ',
      error
    );
    next(error);
  }
});

albumsRouter.post('/:id/reviews', async (req, res, next) => {
  try {
    const review = await Review.create({
      where: {
        comment: req.body.comment,
        stars: req.body.stars,
        albumId: req.body.albumId,
      },
    });

    res.status(201).send(review);
    review.save();
  } catch (error) {
    console.log('Post Error: Error posting new review: ', error);
    next(error);
  }
});
module.exports = albumsRouter;
