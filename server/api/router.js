const router = require('express').Router();

const albumsRouter = require('./albums');
const ordersRouter = require('./orders');
const artistRouter = require('./artists');
const usersRouter = require('./users');
const { authRouter } = require('./auth');

router.use('/albums', albumsRouter);
router.use('/orders', ordersRouter);
router.use('/artists', artistRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;
