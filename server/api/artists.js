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
    res.status(200).send(artist);
  } catch (error) {
    console.log('error occured in /api/artists/:id: ', error);
    next(error);
  }
});

artistRouter.post('/', async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const newArtist = await Artist.create({
      name,
      description,
    });
    res.status(201).send(newArtist);
  } catch (error) {
    console.log('error occured in /api/artists/ post route: ', error);
    next(error);
  }
});

artistRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByPk(id);
    await artist.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.log('error occured in /api/artists/ delete route: ', error);
    next(error);
  }
});

artistRouter.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const artist = await Artist.findByPk(id);
    await artist.update({
      name,
      description,
    });
    res.status(201).send(artist);
  } catch (error) {
    console.log('error occured in /api/artists/ delete route: ', error);
    next(error);
  }
});

module.exports = artistRouter;
