const router = require('express').Router();
const albumsRouter = require('./products');

router.use('/albums', albumsRouter);

module.exports = router;
