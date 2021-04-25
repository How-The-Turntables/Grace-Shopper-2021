const router = require('express').Router();
const allProducts = require('./products');

router.use('/products', allProducts);

module.exports = router;
