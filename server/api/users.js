// const {User} = require('../db/models/index.js')
const usersRouter = require('express').Router();

usersRouter.get('/', async (req, res, next) => {
  try {
    // const users = await usersRouter.findAll();
    const testHTML = `<html><body><p1>Hello World: details for all users</p1></body></html>`;
    res.send(testHTML);
  } catch (error) {
    console.log('error occured in /api/users');
    next(error);
  }
});

module.exports = usersRouter;
