const usersRouter = require('express').Router();
const User = require('./../db/models/users/user');

usersRouter.get('/', async (req, res, next) => {
  const user = await User.findAll();
  res.send(user);
});

module.exports = usersRouter;
