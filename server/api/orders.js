const ordersRouter = require('express').Router();
const { OrderDetail, User, OrderItem } = require('../db/index');

// Active user cart
ordersRouter.get('/:id/cart', async (req, res, next) => {
  try {
    const cart = await OrderDetail.findAll({
      where: {
        userId: req.params.id,
        status: 'IN PROGRESS',
      },
      include: {
        all: true,
      },
    });
    // if (!cart) res.status(404).json('Your cart is empty');
    // const orderItems = await OrderItem.findAll({
    //   where: {
    //     order_detailId: cart.id,
    //   },
    //   include: {
    //     all: true,
    //   },
    // });

    res.status(200).send(cart);
  } catch (error) {
    console.log('problem with your api/orders get route: ', error);
    next(error);
  }
});

ordersRouter.post('/:id/cart', async (req, res, next) => {
  try {
    // let cart =
    const cart = await OrderDetail.findAll({
      where: {
        userId: req.params.id, // (check syntax for this)
        status: 'IN PROGRESS',
      },
      include: {
        all: true,
      },
    });
    console.log('******', cart.albums);
    res.status(200).send(cart);
  } catch (error) {
    console.log('problem with your api/orders get route: ', error);
    next(error);
  }
});

//  all orders route for admin
ordersRouter.get('/admin', async (req, res, next) => {
  try {
    const orders = await OrderDetail.findAll({
      include: {
        all: true,
      },
    });
    res.status(200).send(orders);
  } catch (error) {
    console.log('problem with your api/orders get route: ', error);
    next(error);
  }
});

// all orders by customer for customer account view
ordersRouter.get('/:id', async (req, res, next) => {
  try {
    const order = await OrderDetail.findAll({
      where: {
        userId: req.params.id,
      },
      include: {
        all: true,
      },
    });

    res.send(order);
  } catch (error) {
    console.log('problem with your api/orders/:id route: ', error);
    next(error);
  }
});

// single order put route for admin to change order status
ordersRouter.put('/:id/admin', async (req, res, next) => {
  try {
    const order = await OrderDetail.findAll({
      where: {
        userId: req.params.id,
        status: req.params.status,
      },
      include: {
        all: true,
      },
    });

    res.send(order);
  } catch (error) {
    console.log('problem with your api/orders/:id/admin route: ', error);
    next(error);
  }
});

module.exports = ordersRouter;
