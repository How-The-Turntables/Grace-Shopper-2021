const albumsRouter = require('express').Router();
const { Album, Review, Artist } = require('../db/index');

albumsRouter.get('/', async (req, res, next) => {
  try {
    const index = req.query.index ? req.query.index * 1 : 0; // query in the url bar -- add "?index=<some number>"
    const [albums, count] = await Promise.all([
      Album.findAll({
        limit: 10, // limits X number of albums per page
        offset: index * 10,
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
    const album = await Album.findByPk(id);
    res.send(album);
  } catch (error) {
    console.log('error occured in the /api/albums/:id');
    next(error);
  }
});

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
