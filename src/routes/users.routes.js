const express = require('express');
const passport = require('passport');
const logger = require('../config/logger');
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
usersRouter.post('/signin', async (req, res, next) => {
  passport.authenticate('signin', async (err, user, info) => {
    try {
      if (err || !user) {
        logger.info(err);
        return res.status(403).json(info);
      }
      return res.json(user);
    } catch (e) {
      return next(e);
    }
  })(req, res, next);
});
usersRouter.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res) => {
    res.json({
      message: 'Signup successful',
      user: req.user,
    });
  }
);

module.exports = usersRouter;
