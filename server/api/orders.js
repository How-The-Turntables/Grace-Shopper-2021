const ordersRouter = require('express').Router();
const { Op } = require('sequelize'); // MOVE THS and the query to order model
const { OrderDetail, Album } = require('../db/index');
const OrderItem = require('../db/models/shopping/orderItem');
const { requireToken } = require('./auth');
const { authId } = require('../utils');

//  all orders route for admin
ordersRouter.get('/admin', requireToken, async (req, res, next) => {
  try {
    if (!res.user.admin) res.status(401).send('you are not authorized');
    else {
      const orders = await OrderDetail.findAll({
        include: { all: true },
      });
      res.status(200).send(orders);
    }
  } catch (error) {
    console.log('problem with your api/orders get route: ', error);
    next(error);
  }
});

// ordersRouter.get('/:id/items', async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const items = await OrderItem.findAll({
//       where: {
//         order_detailId: id,
//       },
//     });
//     res.status(200).send(items);
//   } catch (error) {
//     console.log('error occured in /api/orders/:id/items');
//     next(error);
//   }
// });

// ordersRouter.post('/items', async (req, res, next) => {
//   try {
//     const data = req.params.data;
//     const newOrderItems = await OrderItem.create({
//       quantity: 1,
//       albumId: data.albumId,
//       order_detailId: data.order_detailId,
//     });
//     res.status(204).send(newOrderItems);
//   } catch (error) {
//     console.log('error occured in POST /api/orders/:id/items');
//     next(error);
//   }
// });

// Active user cart
ordersRouter.get('/:id/cart', requireToken, async (req, res, next) => {
  try {
    const id = authId(req);
    if (!id) res.status(401).send('you are not authorized');
    const cart = await OrderDetail.findOne({
      where: {
        userId: id,
        status: 'IN PROGRESS',
      },
      include: { all: true },
    });
    // const cartId = cart.dataValues.id;
    // const orderItems = await OrderItem.findAll({
    //   where: {
    //     order_detailId: cartId,
    //   },
    // });

    // const cartDetails = { cart, orderItems };
    if (!cart) res.sendStatus(404);
    else res.status(200).send(cart);
  } catch (error) {
    console.log('problem with your GET api/orders/:id/cart route: ', error);
    next(error);
  }
});

// all orders by user for user account view
ordersRouter.get('/:id', requireToken, async (req, res, next) => {
  try {
    const id = authId(req);
    if (!id) res.status(401).send('you are not authorized');
    const order = await OrderDetail.findAll({
      where: {
        userId: id,
        [Op.or]: [{ status: 'COMPLETED' }, { status: 'CANCELLED' }],
      },
      include: { all: true },
    });
    res.send(order);
  } catch (error) {
    console.log('problem with your GET api/orders/:id user route: ', error);
    next(error);
  }
});

// user adds item to cart
ordersRouter.post('/cart', requireToken, async (req, res, next) => {
  try {
    const id = authId(req);
    if (!id) res.status(401).send('you are not authorized');
    const cart = await OrderDetail.create({
      where: {
        userId: req.params.id,
        status: 'IN PROGRESS',
      },
      include: { all: true },
    });
    // const cartId = cart.dataValues.id;
    // const orderItemToUpdate = await OrderItem.findOne({
    //   where: {
    //     order_detailId: cartId,
    //   },
    //   include: { all: true }
    // });

    res.status(201).send(cart); // sending new cart session to client
  } catch (error) {
    console.log('problem with your POST api/orders/:id/cart route: ', error);
    next(error);
  }
});

// user can add cart items and quantity of current items
ordersRouter.put('/:id/cart/:albumId', requireToken, async (req, res, next) => {
  try {
    const id = authId(req);
    if (!id) res.status(401).send('you are not authorized');
    const albumSelected = await Album.findByPk(req.params.albumId);
    const cartSession = await OrderDetail.findOne({
      // because they could already have a cart in session
      where: {
        userId: id,
        status: 'IN PROGRESS',
      },
      include: { all: true },
    });
    const cart = cartSession.dataValues;
    let orderItem = await OrderItem.findOne({
      where: {
        order_detailId: cart.id,
        albumId: albumSelected.id,
      },
      include: { all: true },
    });
    // updating cart item quantity and removing quantity from selected album
    if (!orderItem) {
      orderItem = await OrderItem.create({
        where: {
          order_detailId: cart.id,
          albumId: albumSelected.id,
          quantity: req.body.quantity,
        },
        include: { all: true },
      });
    }
    // updates quantity and total
    if (orderItem.quantity < req.body.quantity) {
      orderItem.quantity += req.body.quantity;
      cart.total += 1 * albumSelected.price;
    } else {
      orderItem.quantity -= req.body.quantity;
      cart.total -= 1 * albumSelected.price;
    }
    res.status(200).send(orderItem);
  } catch (error) {
    console.log('problem with your PUT api/:id/cart/:albumId route: ', error);
    next(error);
  }
});

// user can delete current items
ordersRouter.delete(
  '/:id/cart/:albumId',
  requireToken,
  async (req, res, next) => {
    try {
      const id = authId(req);
      if (!id) res.status(401).send('you are not authorized');
      const albumToRemove = await Album.findByPk(req.params.albumId); // change to a findOne w/ where clause?
      const cartSession = await OrderDetail.findOne({
        // because they could already have a cart in session
        where: {
          userId: req.params.id,
          status: 'IN PROGRESS',
        },
        include: { all: true },
      });
      const cart = cartSession.dataValues;

      let orderItem = await OrderItem.findOne({
        where: {
          order_detailId: cart.id,
          albumId: albumToRemove.id,
        },
        include: { all: true },
      });
      // updating cart item quantity and quantity of selected album
      if (orderItem > 1) {
        orderItem.quantity -= req.body.quantity;
        cart.total -= 1 * albumToRemove.price;
        res.status(204).send(orderItem);
      } else orderItem.destroy();
    } catch (error) {
      console.log(
        'problem with your DELETE api/orders/:id/cart route: ',
        error
      );
      next(error);
    }
  }
);

// single order put route for admin to change order status
ordersRouter.put('/:id/admin', requireToken, async (req, res, next) => {
  try {
    if (!res.user.admin) res.status(401).send('you are not authorized');
    const order = await OrderDetail.findAll({
      where: {
        userId: req.params.id,
        status: req.body.status,
      },
      include: { all: true },
    });

    res.send(order);
  } catch (error) {
    console.log('problem with your PUT api/orders/:id/admin route: ', error);
    next(error);
  }
});

ordersRouter.post('/cart', async (req, res, next) => {
  try {
    const cart = await OrderDetail.create({
      status: 'IN PROGRESS',
    });
    res.status(201).send(cart);
  } catch (error) {
    console.log('problem with your POST api/cart route: ', error);
    next(error);
  }
});

module.exports = ordersRouter;

// // console.logs that were helpful for debugging
//   // calculate cart total --- NOT necessary in backend route but leaving for now just in case
//     // console.log(orderItems.map((item) => {
//     //   return item.albumId
//     // }))
//     // console.log(cart[0].albums[0].price)
//     // console.log(cart.map((album) => {
//     //   return album
//     // }))
