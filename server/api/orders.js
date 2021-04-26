const ordersRouter = require('express').Router();
const Order = require('../db/models/shopping/orderDetail');

ordersRouter.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll(); // noting that we could include User to have some basic order details display in all orders view

    res.status(200).send(orders);
    // const testHTML = `<html><body><p1>Hello World: details for all albums</p1></body></html>`;
    // res.send(testHTML); // enter correct
  } catch (error) {
    console.log('problem with your /orders get route');
    next(error);
  }
});

ordersRouter.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(order);
  } catch (error) {
    console.log('problem with your /:id order route');
    next(error);
  }
});

module.exports = ordersRouter;
