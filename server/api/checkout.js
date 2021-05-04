const checkoutRouter = require('express').Router();
const stripe = require('../server');

const uuid = require('uuid/v4');



// need to pass a token from the front end
// token would have email, product info, etc.

// product information - the price, the charge

checkoutRouter.post('/payment', async (req, res) => {
  // const session = await stripe.checkout.sessions.create({})
  const {product, token} = req.body;
  console.log('PRODUCT ', product)
  console.log('PRICE ', product.price)
  // fired only once when you hit this route. Makes sure you're not twice for the same product
  const idempontencyKey = uuid();


  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100, // not sure we want the 100
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email, // check documentation
      description:`purchase of product.name`,
      shipping: {
        name: token.card.name,
        address: {
          country: token.card.address_country
        }
      }
    }, {idempontencyKey})
  })
  .then(result => res.status(200).json(result))
  .catch(err => console.log(err))
})



module.exports = checkoutRouter;
