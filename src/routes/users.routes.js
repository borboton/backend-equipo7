const express = require('express');
const {
  signIn,
  signUp,
  passportSignUp,
} = require('../middleware/passport.middleware');

const {
  getUserController,
  postUserController,
  putUserController,
  getRolUserController,
  getUserCoursesController,
  getUserSoftwareController,
  postAddRolUserController,
  getUsersController,
  deleteUserController,
  putRolUserController,
  deleteRolUserController,
  postCourseUserController,
  putCourseUserController,
  deleteCourseUserController,
} = require('../controllers/user.controller');

const usersRouter = express.Router();

usersRouter.get('/', getUsersController);

usersRouter.post('/', postUserController);
usersRouter.get('/:id', getUserController);
usersRouter.put('/:id', putUserController);
usersRouter.delete('./:id', deleteUserController);

usersRouter.post('/:id/rol/:idRol', postAddRolUserController);
usersRouter.get('/:id/rol', getRolUserController);
usersRouter.put('/:id/rol/:idRol', putRolUserController);
usersRouter.delete('/:id/rol/:idRol', deleteRolUserController);

usersRouter.get('/:id/courses', getUserCoursesController);
usersRouter.post('/:id/courses/:idCourse', postCourseUserController);
usersRouter.put('/:id/courses/:idCourse', putCourseUserController);
usersRouter.delete('/:id/courses/:idCourse', deleteCourseUserController);

usersRouter.get('/:id/software', getUserSoftwareController);
// Login with passport
usersRouter.post('/signin', signIn);
usersRouter.post('/signup', passportSignUp, signUp);

module.exports = usersRouter;
