const { User } = require('../db/index.js');
const usersRouter = require('express').Router();

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.log('error occured in /api/users: ', error);
    next(error);
  }
});

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.send(user);
  } catch (error) {
    console.log('problem with your api/users/:id route: ', error);
    next(error);
  }
});

usersRouter.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    let user = await User.findByPk(id);
    const userUpdated = await user.update({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email_address: req.body.email,
      password: req.body.password,
    });
    res.send(userUpdated);
  } catch (error) {
    console.log('Error editing user in /:id put route: ', error);
    next(error);
  }
});

usersRouter.put('/:id/admin', async (req, res, next) => {
  try {
    const id = req.params.id;
    let user = await User.findByPk(id);
    const userUpdated = await user.update({
      admin: req.body.admin,
    });
    res.send(userUpdated);
  } catch (error) {
    console.log(
      'Error updating user admin assignment in put /:id/admin route: ',
      error
    );
    next(error);
  }
});

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    // const user = await User.findByPk(id)
    const testHTML = `<html><body><p1>Hello World: details for user id ${id}</p1></body></html>`;
    res.send(testHTML);
  } catch (error) {
    console.log('error occured in /api/users/:id');
    next(error);
  }
});

module.exports = usersRouter;
