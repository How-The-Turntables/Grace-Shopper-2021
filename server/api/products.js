const productsRouter = require('express').Router();
// const { Products } = require('../db/models'); /// enter the correct model name and address here

productsRouter.get('/', async (req, res, next) => {
  try {
    // const products = await Products.findAll();
    const testHTML = `<html><body><p1>Hello World: details for all products</p1></body></html>`;
    res.send(testHTML); // enter correct
  } catch (error) {
    console.log('error has occured in the /api/products');
    next(error);
  }
});

productsRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    // const singleProduct = await productsRouter.findByPk(id)
    const testHTML = `<html><body><p1>Hello World: details for single product id: ${id}</p1></body></html>`;
    res.send(testHTML);
  } catch (error) {
    console.log('error occured in the /api/products/:id');
    next(error);
  }
});

module.exports = productsRouter;
