const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const logger = require('./logger');
const User = require('../models/user.schema');

// Signup

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'userFile',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, userFile, password, done) => {
      try {
        const { name, lastname, email, avatar, phone, maritalStatus } =
          req.body;
        logger.info(req.body);
        const user = await User.create({
          userFile,
          password,
          email,
          name,
          lastname,
          avatar,
          phone,
          maritalStatus,
        });

        return done(null, user);
      } catch (e) {
        return done(e);
      }
    }
  )
);

// Login
passport.use(
  'signin',
  new LocalStrategy(
    {
      usernameField: 'userFile',
      passwordField: 'password',
    },
    async (userFile, password, done) => {
      logger.info(`auth file --> login:userFile:${userFile}`);
      logger.info(`auth file --> login:password:${password}`);
      try {
        const user = await User.findOne({ userFile });
        logger.info(`auth file --> login:user:model:${user}`);
        if (user) {
          const validate = await user.isValidPassword(password);
          if (!validate) {
            return done(null, false, { message: 'Wrong password' });
          }
          return done(null, user, { message: 'Login successfull' });
        }
        return done(null, false, { message: 'User not found' });
      } catch (e) {
        return done(e);
      }
    }
  )
);
