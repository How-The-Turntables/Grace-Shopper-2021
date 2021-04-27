const router = require('express').Router();

const albumsRouter = require('./products');
const ordersRouter = require('./orders');
const artistRouter = require('./artists');

router.use('/albums', albumsRouter);
router.use('/orders', ordersRouter);
router.use('/artists', artistRouter);

module.exports = router;
