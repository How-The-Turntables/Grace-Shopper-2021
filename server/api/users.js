const { User } = require('../db/index.js');
const usersRouter = require('express').Router();

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await usersRouter.findAll();
    // const testHTML = `<html><body><p1>Hello World: details for all users</p1></body></html>`;
    res.send(users);
  } catch (error) {
    console.log('error occured in /api/users');
    next(error);
  }
});

module.exports = usersRouter;
