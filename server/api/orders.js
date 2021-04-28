const ordersRouter = require('express').Router();
const { OrderDetail, User, OrderItem } = require('../db/index');

ordersRouter.get('/', async (req, res, next) => {
  try {
    const orders = await OrderDetail.findAll({
      include: {
        model: User,
      },
    });
    res.status(200).send(orders);
  } catch (error) {
    console.log('problem with your api/orders get route: ', error);
    next(error);
  }
});

ordersRouter.get('/:id', async (req, res, next) => {
  try {
    const order = await OrderDetail.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.send(order);
  } catch (error) {
    console.log('problem with your api/orders/:id route: ', error);
    next(error);
  }
});

module.exports = ordersRouter;
