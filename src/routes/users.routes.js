const express = require('express');

const {
  getUserController,
  postUserController,
  getRolUserController,
  getUserCoursesController,
  getUserSoftwareController,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

// usersRouter.get('/', getUsersController);
usersRouter.get('/:id', getUserController);
usersRouter.get('/:id/rol', getRolUserController);
usersRouter.get('/:id/courses', getUserCoursesController);
usersRouter.get('/:id/software', getUserSoftwareController);
usersRouter.post('/', postUserController);

module.exports = usersRouter;
