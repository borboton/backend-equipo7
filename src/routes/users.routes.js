const express = require('express');

const {
  httpGetUsers,
  httpPostUser,
  httpGetUserById,
  httpGetUserCourses,
  httpGetUserRoles,
  httpGetSoftwareAccess,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.get('/', httpGetUsers);
usersRouter.get('/:id', httpGetUserById);
usersRouter.get('/:id/roles', httpGetUserRoles);
usersRouter.get('/:id/courses', httpGetUserCourses);
usersRouter.get('/:id/software', httpGetSoftwareAccess);
usersRouter.post('/', httpPostUser);

module.exports = usersRouter;
