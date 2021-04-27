const router = require('express').Router();

const albumsRouter = require('./albums');
const ordersRouter = require('./orders');
const artistRouter = require('./artists');
const usersRouter = require('./users');

router.use('/albums', albumsRouter);
router.use('/orders', ordersRouter);
router.use('/users', usersRouter);

module.exports = router;
