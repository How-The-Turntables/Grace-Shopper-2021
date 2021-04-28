const albumsRouter = require('express').Router();
const { Album, Review } = require('../db/index');

albumsRouter.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll();
    res.send(albums); // enter correct
  } catch (error) {
    console.log('error has occured in the /api/albums');
    next(error);
  }
});

albumsRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const album = await Album.findByPk(id);
    // const testHTML = `<html><body><p1>Hello World: details for single album id: ${id}</p1></body></html>`;
    res.send(album);
  } catch (error) {
    console.log('error occured in the /api/albums/:id');
    next(error);
  }
});

module.exports = albumsRouter;
