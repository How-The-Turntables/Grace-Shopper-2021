const router = require('express').Router();

const albumsRouter = require('./products');
const ordersRouter = require('./orders');

router.use('/albums', albumsRouter);
router.use('/orders', ordersRouter);

module.exports = router;
