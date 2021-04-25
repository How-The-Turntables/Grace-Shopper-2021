const productsRouter = require('express').Router();
// const { Products } = require('../db/models'); /// enter the correct model name and address here

productsRouter.get('/', async (req, res, next) => {
  try {
    // const products = Products.findAll();
    const testHTML = `<html><body><p1>Hello World</p1></body></html>`;
    res.send(testHTML); // enter correct
  } catch (error) {
    console.log('error has occured in the /api/Products');
    next(error);
  }
});

module.exports = productsRouter;
