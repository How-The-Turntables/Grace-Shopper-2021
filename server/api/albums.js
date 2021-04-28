const albumsRouter = require('express').Router();
const { Album, Review } = require('../db/index');

albumsRouter.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll();
    // const testHTML = `<html><body><p1>Hello World: details for all albums</p1></body></html>`;
    res.send(albums); // enter correct
  } catch (error) {
    console.log('error has occured in the /api/products');
    next(error);
  }
});

albumsRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    // const singleProduct = await Album.findByPk(id)
    const testHTML = `<html><body><p1>Hello World: details for single album id: ${id}</p1></body></html>`;
    res.send(testHTML);
  } catch (error) {
    console.log('error occured in the /api/products/:id');
    next(error);
  }
});

module.exports = albumsRouter;
