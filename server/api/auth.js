const authRouter = require('express').Router();
const { User } = require('../db/index');

// auth middleware, can be used to access content tied to user (like carts or purchase history)
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.byToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

// create token
authRouter.post('/', async (req, res, next) => {
  try {
    // const { email, password } = req.body;
    const { token } = await User.authenticate(req.body);
    console.log('token', token);
    res.send({ token });
  } catch (error) {
    next(error);
  }
});

// authenticate user with token
authRouter.get('/', requireToken, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  authRouter,
  requireToken,
};
