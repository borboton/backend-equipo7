const passport = require('passport');
const logger = require('../config/logger');

async function signIn(req, res, next) {
  passport.authenticate('signin', async (err, user, info) => {
    console.log(err, user, info);
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
}

const passportSignUp = passport.authenticate('signup', { session: false });

async function signUp(req, res) {
  res.json({
    message: 'Signup successful',
    user: req.user,
  });
}

module.exports = {
  signIn,
  signUp,
  passportSignUp,
};
