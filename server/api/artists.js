const artistRouter = require('express').Router();
// const {Artist} = require('../db/models/products/...')  // enter the correct model name and address here

artistRouter.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.findAll();
    const testHTML = `<html><body><p1>Hello World: details for all artists</p1></body></html>`;
    res.send(testHTML); // enter correct
  } catch (error) {
    console.log('error occured in /api/artists');
    next(error);
  }
});

module.exports = artistRouter;
