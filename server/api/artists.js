const { Artist, Album } = require('../db/index');

const artistRouter = require('express').Router();

artistRouter.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists);
  } catch (error) {
    console.log('error occured in /api/artists: ', error);
    next(error);
  }
});

artistRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const artist = await Artist.findByPk(id, { include: [Album] });
    res.send(artist);
  } catch (error) {
    console.log('error occured in /api/artists/:id: ', error);
    next(error);
  }
});

module.exports = artistRouter;
