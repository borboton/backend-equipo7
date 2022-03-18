const express = require('express');
const {
  signIn,
  signUp,
  passportSignUp,
} = require('../middleware/passport.middleware');

const {
  getUserController,
  postUserController,
  getRolUserController,
  getUserCoursesController,
  getUserSoftwareController,
  postAddRolUserController,
} = require('../controllers/user.controller');

const usersRouter = express.Router();

// usersRouter.get('/', getUsersController);
usersRouter.get('/:id', getUserController);
usersRouter.get('/:id/rol', getRolUserController);
usersRouter.get('/:id/courses', getUserCoursesController);
usersRouter.get('/:id/software', getUserSoftwareController);
usersRouter.post('/', postUserController);
usersRouter.post('/:id/rol/:idRol', postAddRolUserController);
// Login with passport
usersRouter.post('/signin', signIn);
usersRouter.post('/signup', passportSignUp, signUp);

module.exports = usersRouter;
