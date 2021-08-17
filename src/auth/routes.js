const router = require('express').Router();
const passport = require('passport');

const authControllers = require('./controllers');
const { jwtMiddleware } = require('./middlewares');

router.post('/api/auth/register', authControllers.register);
router.post('/api/auth/login', authControllers.login);

router.get(
  '/auth/google',
  passport.authenticate('google', {
    accessType: 'offline',
    prompt: 'consent',
    scope: ['openid profile email https://www.googleapis.com/auth/drive'],
  }),
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // req.user contains then data of google user callback, we get that data and to what we want
    res.redirect('/');
  },
);

router.get('/api/me', jwtMiddleware, authControllers.me);

module.exports = router;
