const express = require('express');

const {
  getUsersController,
  postUserController,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.get('/', getUsersController);
// usersRouter.get('/:id', httpGetUserById);
// usersRouter.get('/:id/roles', httpGetUserRoles);
// usersRouter.get('/:id/courses', httpGetUserCourses);
// usersRouter.get('/:id/software', httpGetSoftwareAccess);
usersRouter.post('/', postUserController);

module.exports = usersRouter;
