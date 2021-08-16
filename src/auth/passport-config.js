/**
 * Initial the passport configuration
 */
const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  // issuer: "test@gmail.com", // email of the ???
  // audience: "abc.xyz", // only accept the request is sent from specific domain
};

passport.use(
  new JwtStrategy(jwtOpts, (jwtPayload, done) => {
    console.log(jwtPayload);
    return done(null, jwtPayload);
  })
);

// google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.DOMAIN}/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log({ accessToken, refreshToken, profile });
      // store the user information to database
      // return jwt token for the next time
      cb(null, profile);
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
