const authRouter = require('express').Router();
const { User } = require('../db/index');

// auth middleware, can be used to access content tied to user (like carts or purchase history)
// to use for routes, import into your file as const { requireToken } = require('./auth')
// ** be sure to use correct path, depends where you import **
// complimentary utility to compare id in route with id from authorized user (user or admin) in utils: const { authId } = require('../utils');
// const id = utils(req); ** returns either requested ID or null.
const requireToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) res.status(401).send('GTFO');
    const token = req.headers.authorization;

    const user = await User.byToken(token);

    console.log('******USER',user)
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

// create token
authRouter.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await User.authenticate({ email, password });
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
