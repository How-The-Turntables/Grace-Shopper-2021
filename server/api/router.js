const router = require('express').Router();

const albumsRouter = require('./albums');
const ordersRouter = require('./orders');

router.use('/albums', albumsRouter);
router.use('/artists', artistRouter);
router.use('/orders', ordersRouter);
router.use('/users', usersRouter);


module.exports = router;
