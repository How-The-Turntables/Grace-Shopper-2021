const router = require('express').Router();
const allProducts = require('./products');
const ordersRouter = require('./orders');

router.use('/products', allProducts);
router.use('/orders', ordersRouter);

module.exports = router;
