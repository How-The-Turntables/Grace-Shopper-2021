const albumsRouter = require('express').Router();
const Album = require('../db/models/products/album'); /// enter the correct model name and address here
const Review = require('../db/models/products/review');

albumsRouter.get('/', async (req, res, next) => {
  try {
    console.log('hi');
    const albums = await Album.findAll();
    console.log(albums);
    res.status(200).send(albums);
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
