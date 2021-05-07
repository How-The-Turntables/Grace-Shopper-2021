const { User, Address } = require('../db/index.js');
const usersRouter = require('express').Router();
const { requireToken } = require('./auth');
const { authId } = require('../utils');

// two gets: /auth and /users/userId
usersRouter.get('/admin', requireToken, async (req, res, next) => {
  try {
    if (!req.user.admin) res.status(401).send('you are not authorized');
    else {
      const users = await User.findAll();
      res.send(users);
    }
  } catch (error) {
    console.log('error occured in /api/users: ', error);
    next(error);
  }
});

// usersRouter.post('/', async (req, res, next) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     const newUser = await User.create({
//       firstName: firstName.trim(),
//       lastName: lastName.trim(),
//       email: email.trim(),
//       password
//     });
//     res.send(newUser);
//   } catch (error) {
//     console.log('cannot create user');
//     next(error);
//   }
// })

// -------- To access a user ID, you must be authenticated by passing a token into the get request, such as below: ---------
/*

await axios.get(`/api/users/${id}`, {
  headers: {
    authorization: token,
  },
});

 */

usersRouter.get('/:id', requireToken, async (req, res, next) => {
  try {
    const id = authId(req);
    if (!id) res.status(401).send('you are not authorized');
    else {
      const user = await User.findAll({
        where: {
          id: req.user.id,
        },
      });
      res.send(user);
    }
  } catch (error) {
    console.log('problem with your GET /users/:id route: ', error);
    next(error);
  }
});

usersRouter.put('/:id', requireToken, async (req, res, next) => {
  try {
    const id = authId(req);
    if (!id) res.status(401).send('you are not authorized');
    else {
      let user = await User.findByPk(id );
      const userUpdated = await user.update({
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        email: req.body.email.trim(),
        password: req.body.password,
      });
      res.send(userUpdated);
    }
  } catch (error) {
    console.log('Error editing user in PUT users/:id route: ', error);
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

usersRouter.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    user.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.log('error occured during deleting in /api/users/:id');

    next(error);
  }
});

module.exports = usersRouter;
